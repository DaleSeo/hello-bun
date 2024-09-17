Bun.serve({
  port: 4321,
  fetch() {
    return new Response("헬로, Bun!");
  },
});
