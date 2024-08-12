import { $ } from "bun";

await $`curl http://localhost:3000/tasks -H 'Content-type: application/json;charset=utf-8' -s -X POST -d '{ "title": "놀기" }' >/dev/null`;
await $`curl http://localhost:3000/tasks -H 'Content-type: application/json;charset=utf-8' -s -X POST -d '{ "title": "자기" }' >/dev/null`;
await $`curl http://localhost:3000/tasks -H 'Content-type: application/json;charset=utf-8' -s -X POST -d '{ "title": "먹기" }' >/dev/null`;

const tasks = await $`curl http://localhost:3000/tasks -X GET`.json();
if (tasks.length >= 3) {
  console.log("✅ 할 일이 생성되었습니다.");
} else {
  throw Error("🚨 할 일이 생성되지 않았습니다.");
}

const lastId = Math.max(...tasks.map((task) => task.id));

const foundTask =
  await $`curl http://localhost:3000/tasks/${lastId} -s -X GET`.json();
if (foundTask.title == "먹기") {
  console.log("✅ 할 일이 조회되었습니다.");
} else {
  throw Error("🚨 할 일이 조회되지 않았습니다.");
}

await $`curl http://localhost:3000/tasks/${lastId} -H 'Content-type: application/json;charset=utf-8' -s  -X PUT -d '{ "title": "코딩" }' >/dev/null`;

const updatedTask =
  await $`curl http://localhost:3000/tasks/${lastId} -s -X GET`.json();
if (updatedTask.title == "코딩") {
  console.log("✅ 할 일이 수정되었습니다.");
} else {
  throw Error("🚨 할 일이 수정되지 않았습니다.");
}

await $`curl http://localhost:3000/tasks/${lastId} -s -X DELETE`;

const message =
  await await $`curl http://localhost:3000/tasks/${lastId} -s -X GET`.text();
if (message == "task not found") {
  console.log("✅ 할 일이 삭제되었습니다.");
} else {
  throw Error("🚨 할 일이 삭제되지 않았습니다.");
}
