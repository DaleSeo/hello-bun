Bun.serve({
  async fetch(req) {
    const data = await req.json();
    return Response.json({ name: data.name, message: "안녕하세요!" });
  },
});
