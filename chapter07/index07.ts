Bun.serve({
  fetch(req) {
    const host = req.headers.get("Host");
    const userAgent = req.headers.get("User-agent");
    return Response.json({ host, userAgent }, { headers: { xxx: "yyy" } });
  },
});
