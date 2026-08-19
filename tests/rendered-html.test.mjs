import assert from "node:assert/strict";
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

  const caseStudy = await worker.fetch(
    new Request("http://localhost/work/1048-gate", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const caseStudyHtml = await caseStudy.text();
  assert.equal(caseStudy.status, 200);
  assert.match(caseStudyHtml, /The league now owns its story/i);
  assert.match(caseStudyHtml, /4,785/);
});
