Bun.serve({
  async fetch(req) {
    const data = await req.formData();
    return new Response(`key1: ${data.get("key1")}, key2: ${data.get("key2")}`);
  },
});
