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
      if (confirm("클라이언트의 접속을 수락하실 건가요?")) {
        console.log("클라이언트가 접속하였습니다.");
        ws.send("환영합니다!");
      } else {
        ws.close(1000, "서버가 접속을 거부합니다.");
      }
    },
    message(ws, message) {
      console.log(`클라이언트 > ${message}`);
      const data = prompt("서버 > ");
      ws.send(data ?? "");
    },
    close(ws, code, reason) {
      console.log(
        `클라이언트와 연결이 끊어졌습니다. (코드: ${code}, 이유: ${reason})`
      );
    },
  },
});
