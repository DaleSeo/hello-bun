const ws = new WebSocket("ws://localhost:3000/chat");

ws.addEventListener("open", (event) => {
  console.log("서버에 접속하였습니다.");
});

ws.addEventListener("message", (event) => {
  console.log(`서버 > ${event.data}`);
  const data = prompt("클라이언트 > ");
  ws.send(data ?? "");
});

ws.addEventListener("close", ({ code, reason }) => {
  console.log(`서버와 연결이 끊어졌습니다. (코드: ${code}, 이유: ${reason})`);
});
