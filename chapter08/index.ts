Bun.serve({
  fetch(req, server) {
    const { pathname } = new URL(req.url);
    if (pathname == "/chat") {
      if (server.upgrade(req)) {
        return;
      }
      return new Response("Upgrade failed", { status: 500 });
    }
    return new Response("헬로, Bun!");
  },
  websocket: {
    open(ws) {
      console.log("연결되었습니다!");
    },
    message(ws, message) {
      console.log(`받은 메세지: ${message}`);
      ws.send(message); // 클라이언트의 메시지를 그대로 보냄
    },
    close(ws, code, reason) {
      console.log(`연결이 끊어졌습니다. (코드: ${code}, 이유: ${reason})`);
    },
  },
});
