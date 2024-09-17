Bun.serve({
  fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/") return new Response("홈페이지");
    if (pathname === "/about") return new Response("마이 페이지");
    return new Response("페이지를 찾을 수 없습니다.", { status: 404 });
  },
});
