Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    return new Response(url.search);
  },
});
