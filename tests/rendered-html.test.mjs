import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders the featured portfolio and all three case studies", async () => {
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
  assert.match(homepageHtml, /Featured work/i);
  assert.match(homepageHtml, /Three ideas, built into real products/i);
  assert.match(homepageHtml, /Useful websites/i);
  assert.match(homepageHtml, /\/work\/1048-gate/);
  assert.match(homepageHtml, /\/work\/keystone-beat/);
  assert.match(homepageHtml, /\/work\/arenatap/);
  assert.match(homepageHtml, /https:\/\/1048gate\.com\//);
  assert.match(homepageHtml, /https:\/\/keystonebeat\.com\//);
  assert.match(homepageHtml, /https:\/\/arenatap\.vercel\.app\//);
  assert.match(homepageHtml, /I(?:&#x27;|')m Collin/i);
  assert.match(homepageHtml, /Available for select projects/i);
  assert.match(homepageHtml, /website-header\.png/);
  assert.match(homepageHtml, /HoundFix PC Toolkit/);
  assert.match(homepageHtml, /\/products\/houndfix/);
  assert.match(homepageHtml, /Bring the problem/i);
  assert.match(homepageHtml, /\/websites/);
  assert.doesNotMatch(homepageHtml, /technologybuilt/i);
  assert.doesNotMatch(homepageHtml, /codex-preview/i);
  assert.doesNotMatch(homepageHtml, /\/home\/collindk94/);
  assert.match(homepageHtml, /\/images\/two-hounds-mark\.png/);
  assert.match(homepageHtml, /\/images\/two-hounds-lockup\.png/);
  assert.doesNotMatch(homepageHtml, /logo-white\.png/);
  assert.doesNotMatch(homepageHtml, /399K\+player-stat/i);

  for (const [path, expected] of [
    ["/work/1048-gate", "The league now owns its story"],
    ["/work/keystone-beat", "A small desk for a big sports state"],
    ["/work/arenatap", "An original sports idea people can play today"],
  ]) {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      env,
      ctx,
    );
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(expected, "i"));
  }

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

  assert.match(css, /@media \(max-width: 560px\)[\s\S]*?\.hero\s*\{[^}]*flex-direction:\s*column;/);
  assert.match(css, /@media \(max-width: 560px\)[\s\S]*?\.hero-card\s*\{[^}]*width:\s*100%;/);
  assert.match(css, /\.proof-strip\s*\{[^}]*grid-template-columns:\s*repeat\(2,/);
  assert.match(css, /\.services\s*\{\s*display:\s*none;/);
  assert.match(css, /\.project-grid\s*\{[^}]*overflow-x:\s*auto;/);
  assert.match(css, /\.additional-work\s*\{[^}]*grid-template-columns:\s*1fr;/);
});
