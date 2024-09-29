import { expect, spyOn, test } from "bun:test";
import { app } from "./tasks-api";
import { TaskService } from "./tasks-service";

test("GET /tasks", async () => {
  const findTasks = spyOn(TaskService.prototype, "findTasks");
  findTasks.mockReturnValue([
    { id: 1, title: "먹기" },
    { id: 2, title: "자기" },
  ]);

  const response = await app.handle(new Request("http://localhost/tasks"));
  expect(response.status).toBe(200);

  const tasks = await response.json();
  expect(tasks).toHaveLength(2);
  expect(findTasks).toHaveBeenCalledTimes(1);
  expect(findTasks).toHaveBeenCalledWith();
});

test("POST /tasks", async () => {
  const createTask = spyOn(TaskService.prototype, "createTask");
  createTask.mockImplementation(() => {});

  const response = await app.handle(
    new Request("http://localhost/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ title: "노래하기" }),
    })
  );

  expect(response.status).toBe(201);
  expect(response.text()).resolves.toEqual("task created");
  expect(createTask).toHaveBeenCalledTimes(1);
  expect(createTask).toHaveBeenCalledWith({ title: "노래하기" });
});

test("GET /tasks/:id", async () => {
  const findTask = spyOn(TaskService.prototype, "findTask");
  findTask.mockReturnValue({
    id: 3,
    title: "놀기",
  });

  const response = await app.handle(new Request("http://localhost/tasks/3"));

  expect(response.status).toBe(200);
  expect(response.json()).resolves.toEqual({ id: 3, title: "놀기" });
  expect(findTask).toHaveBeenCalledTimes(1);
  expect(findTask).toHaveBeenCalledWith(3);
});

test("DELETE /tasks/:id", async () => {
  const deleteTask = spyOn(TaskService.prototype, "deleteTask");
  deleteTask.mockImplementation(() => {});

  const response = await app.handle(
    new Request("http://localhost/tasks/3", {
      method: "DELETE",
    })
  );

  expect(response.status).toBe(204);
  expect(response.text()).resolves.toEqual("task deleted");
  expect(deleteTask).toHaveBeenCalledTimes(1);
  expect(deleteTask).toHaveBeenCalledWith(3);
});

test("PUT /tasks/:id", async () => {
  const updateTask = spyOn(TaskService.prototype, "updateTask");
  updateTask.mockImplementation(() => {});

  const response = await app.handle(
    new Request("http://localhost/tasks/3", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ title: "춤추기" }),
    })
  );

  expect(response.status).toBe(200);
  expect(response.text()).resolves.toEqual("task updated");
  expect(updateTask).toHaveBeenCalledTimes(1);
  expect(updateTask).toHaveBeenCalledWith(3, { title: "춤추기" });
});
