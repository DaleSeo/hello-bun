import { Elysia, t } from "elysia";
import { taskDatabase } from "./tasks-database";
import { TaskService } from "./tasks-service";

const service = new TaskService(taskDatabase);

export const app = new Elysia()
  .get("/tasks", () => service.findTasks())
  .post(
    "/tasks",
    ({ body: task }) => {
      service.createTask(task);
      return new Response("task created", { status: 201 });
    },
    { body: t.Object({ title: t.String() }) }
  )
  .get("/tasks/:id", ({ params: { id } }) => {
    const task = service.findTask(+id);
    if (task) return task;
    return new Response("task not found", { status: 404 });
  })
  .delete("/tasks/:id", ({ params: { id } }) => {
    service.deleteTask(+id);
    return new Response("task deleted", { status: 204 });
  })
  .put(
    "/tasks/:id",
    ({ params: { id }, body: task }) => {
      service.updateTask(+id, task);
      return new Response("task updated", { status: 200 });
    },
    { body: t.Object({ title: t.String() }) }
  );
