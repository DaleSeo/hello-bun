import { afterEach, beforeEach, expect, test } from "bun:test";
import { Database } from "bun:sqlite";
import { TaskService } from "./tasks-service";

const db: Database = new Database();
db.exec("CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT)");
let service: TaskService;

beforeEach(() => {
  db.exec("INSERT INTO tasks (title) VALUES ('먹기'), ('자기'), ('놀기')");
  service = new TaskService(db);
});

afterEach(() => {
  db.exec("DELETE FROM tasks");
});

test("findTasks", () => {
  const tasks = service.findTasks();

  expect(tasks).toHaveLength(3);
});

test("findTask", () => {
  const task = service.findTask(2);

  expect(task).toEqual({
    id: 2,
    title: "자기",
  });
});

test("createTask", () => {
  service.createTask({ title: "코딩" });

  expect(db.query("SELECT * FROM tasks").all()).toHaveLength(4);
  expect(db.query("SELECT * FROM tasks WHERE id = 4").get()).toEqual({
    id: 4,
    title: "코딩",
  });
});

test("deleteTask", () => {
  service.deleteTask(2);

  expect(db.query("SELECT * FROM tasks").all()).toHaveLength(2);
  expect(db.query("SELECT * FROM tasks WHERE id = 2").get()).toBeNull();
});

test("updateTask", () => {
  expect(db.query("SELECT * FROM tasks WHERE id = 2").get()).toHaveProperty(
    "title",
    "자기"
  );

  service.updateTask(2, { title: "코딩" });

  expect(db.query("SELECT * FROM tasks WHERE id = 2").get()).toHaveProperty(
    "title",
    "코딩"
  );
});
