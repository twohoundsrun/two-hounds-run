import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("renders portfolio proof and the 1048 Gate case study", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("portfolio-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const homepage = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const homepageHtml = await homepage.text();
  assert.equal(homepage.status, 200);
  assert.match(homepageHtml, /Built &amp; shipped/i);
  assert.match(homepageHtml, /109,875/);
  assert.match(homepageHtml, /\/work\/1048-gate/);
  assert.match(homepageHtml, /HoundFix PC Toolkit/);
  assert.match(homepageHtml, /\/products\/houndfix/);
  assert.match(homepageHtml, /Different problems\. The same practical approach/i);
  assert.match(homepageHtml, /\/websites/);
  assert.doesNotMatch(homepageHtml, /technologybuilt/i);
  assert.doesNotMatch(homepageHtml, /399K\+player-stat/i);

  const caseStudy = await worker.fetch(
    new Request("http://localhost/work/1048-gate", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const caseStudyHtml = await caseStudy.text();
  assert.equal(caseStudy.status, 200);
  assert.match(caseStudyHtml, /The league now owns its story/i);
  assert.match(caseStudyHtml, /4,785/);

  const product = await worker.fetch(
    new Request("http://localhost/products/houndfix", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const productHtml = await product.text();
  assert.equal(product.status, 200);
  assert.match(productHtml, /Meet[^<]*<em[^>]*>HoundFix/i);
  assert.match(productHtml, /Request early access/i);
  assert.match(productHtml, /Windows 10\/11/i);

  for (const [path, expected] of [
    ["/websites", "A website that makes your business easier to trust"],
    ["/automation", "Spend less time repeating the same work"],
    ["/data-tools", "Turn scattered data into something people can use"],
  ]) {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      env,
      ctx,
    );
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(expected, "i"));
  }
});

test("keeps the mobile homepage intentionally compact", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /@media \(max-width: 560px\)[\s\S]*?\.hero-card\s*\{\s*display:\s*none;/);
  assert.match(css, /\.proof-strip\s*\{[^}]*grid-template-columns:\s*repeat\(2,/);
  assert.match(css, /\.services\s*\{\s*display:\s*none;/);
  assert.match(css, /\.project-grid\s*\{[^}]*overflow-x:\s*auto;/);
  assert.match(css, /\.lab-card p, \.lab-card em\s*\{\s*display:\s*none;/);
});
