console.log("프로그램 시작");
await new Promise((r) => setTimeout(r, 2_000)).then(() =>
  console.log("2초 뒤, 실행 재개")
);
