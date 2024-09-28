alert(">> 구구단 프로그램을 시작합니다.");
while (true) {
  const input = prompt(">> 몇 단을 구할지 입력하세요:");
  if (!input?.trim()) {
    console.log("아무 값도 입력하지 않으셨습니다!");
  } else if (!["2", "3", "4", "5", "6", "7", "8", "9"].includes(input)) {
    console.log("2부터 9까지의 정수만 입력이 가능합니다!");
  } else {
    for (let i = 1; i <= 9; i++) {
      console.log(`${input} * ${i} = ${parseInt(input) * i}`);
    }
  }
  const done = confirm(">> 프로그램을 종료할까요?");
  if (done) break;
}
