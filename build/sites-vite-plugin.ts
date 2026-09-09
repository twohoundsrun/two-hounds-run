import { access, cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import type { Plugin } from "vite";

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

// Packages Sites metadata and migrations after Vite finishes compiling.
export function sites(): Plugin {
  let root = process.cwd();

  return {
    name: "sites",
    apply: "build",
    configResolved(config) {
      root = config.root;
    },
    async closeBundle() {
      const outputDirectory = resolve(root, "dist", ".openai");
      const hostingConfig = resolve(root, ".openai", "hosting.json");
      const drizzleSource = resolve(root, "drizzle");

      await rm(outputDirectory, { recursive: true, force: true });
      await mkdir(outputDirectory, { recursive: true });

      if (await exists(hostingConfig)) {
        await cp(hostingConfig, resolve(outputDirectory, "hosting.json"));
      }
      if (await exists(drizzleSource)) {
        await cp(drizzleSource, resolve(outputDirectory, "drizzle"), {
          recursive: true,
        });
      }

      // vinext embeds cached next/font CSS into the worker. Older builds baked
      // those urls as absolute machine paths (for example /home/.../.vinext/fonts),
      // which 404 on the origin. Keep any leftover filesystem prefixes pointed
      // at the site-relative copies in public/fonts.
      await rewriteBakedFontPaths(resolve(root, "dist"));
    },
  };
}

async function rewriteBakedFontPaths(distDir: string) {
  const { readdir, readFile, writeFile } = await import("node:fs/promises");
  const { extname } = await import("node:path");
  const stack = [distDir];
  const textExt = new Set([".js", ".css", ".html", ".mjs", ".json"]);
  while (stack.length > 0) {
    const dir = stack.pop();
    if (!dir) continue;
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      const full = resolve(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
        continue;
      }
      if (!textExt.has(extname(entry.name))) continue;
      const original = await readFile(full, "utf8");
      const rewritten = original.replace(
        /(?:\/home\/[^"'\s)]+|\/[A-Za-z0-9._-]+)*\/\.vinext\/fonts\//g,
        "/fonts/",
      );
      if (rewritten !== original) {
        await writeFile(full, rewritten);
      }
    }
  }
}
