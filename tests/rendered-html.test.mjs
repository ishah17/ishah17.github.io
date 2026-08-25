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
  assert.match(html, /<title>Ishan Shah \| Insurance Product \+ Systems<\/title>/i);
  assert.match(html, /Insurance Product \+ Systems/);
  assert.match(html, /Premium-audit platform replacement/);
  assert.match(html, /Why I’m not active on LinkedIn/);
  assert.match(html, /What being a pilot taught me about process over goals/);
  assert.match(html, /CIO-sponsored nationwide platform replacement/);
  assert.match(html, /Product Manager/);
  assert.match(html, /href="#why-im-not-active-on-linkedin"/);
  assert.match(html, /href="#pilot-process-not-goals"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
