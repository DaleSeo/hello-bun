Bun.serve({
  fetch() {
    return new Response("헬로, Bun!");
  },
});
