Bun.serve({
  async fetch(req) {
    const name = await req.text();
    return new Response(`${name} 님, 안녕하세요!`);
  },
});
