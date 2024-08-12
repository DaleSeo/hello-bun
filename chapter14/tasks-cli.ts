alert(">> 할 일 관리 프로그램을 시작합니다.");
while (true) {
  const command = prompt(
    ">> 명령어를 입력하세요. 목록(L), 생성(N), 수정(U), 삭제(D), 종료(0):"
  );
  if (!command?.trim() || "LNDU".includes(command.toLowerCase())) {
    console.log("잘못 입력하셨습니다!");
  } else if (command.toUpperCase() == "L") {
    await listTasks();
  } else if (command.toUpperCase() == "N") {
    await createTask();
  } else if (command.toUpperCase() == "D") {
    await deleteTask();
  } else if (command.toUpperCase() == "U") {
    await updateTask();
  } else {
    const done = confirm(">> 프로그램을 종료할까요?");
    if (done) break;
  }
}

async function listTasks() {
  const response = await fetch("http://localhost:3000/tasks");
  const tasks: Array<{ id: number; title: string }> = await response.json();
  tasks.forEach(({ id, title }) => {
    console.log(`${id}: ${title}`);
  });
}

async function createTask() {
  const title = prompt(">> 할 일을 입력하세요:");
  if (!title?.trim()) return console.log("아무 값도 입력하지 않으셨습니다!");

  await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ title }),
  });
  console.log("할 일이 등록되었습니다.");
}

async function deleteTask() {
  const id = prompt(">> 할 일 ID를 입력하세요:");
  if (!id?.trim()) return console.log("아무 값도 입력하지 않으셨습니다!");

  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
  });
  console.log("할 일이 삭제되었습니다.");
}

async function updateTask() {
  const id = prompt(">> 할 일 ID를 입력하세요:");
  if (!id?.trim()) return console.log("아무 값도 입력하지 않으셨습니다!");
  const title = prompt(">> 할 일을 입력하세요:");
  if (!title?.trim()) return console.log("아무 값도 입력하지 않으셨습니다!");

  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ title }),
  });
  console.log("할 일이 수정되었습니다.");
}
