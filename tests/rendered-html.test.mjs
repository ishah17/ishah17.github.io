import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the public portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ishan Shah \| Project Delivery, Scrum &amp; Technology<\/title>/i);
  assert.match(html, /Insurance Technology Transformation/);
  assert.match(html, /Replacing a platform people depended on/);
  assert.match(html, /Why I’m not active on LinkedIn/);
  assert.match(html, /What aviation taught me about following the process/);
  assert.match(html, /Nationwide implementation in under 18 months/);
  assert.match(html, /Scrum Master/);
  assert.match(html, /src="\/process-map\.png"/);
  assert.match(html, /href="#why-im-not-active-on-linkedin"/);
  assert.match(html, /href="#pilot-process-not-goals"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
