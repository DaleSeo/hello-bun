import { Database } from "bun:sqlite";

type Task = {
  id: number;
  title: string;
};

export class TaskService {
  constructor(private readonly db: Database) {}

  findTasks() {
    const selectMany = this.db.query("SELECT * FROM tasks");
    return selectMany.all();
  }

  createTask(task: Omit<Task, "id">) {
    const insert = this.db.query("INSERT INTO tasks (title) VALUES (?)");
    insert.run(task.title);
  }

  findTask(id: number) {
    const selectOne = this.db.query("SELECT * FROM tasks WHERE id = ?");
    return selectOne.get(id);
  }

  deleteTask(id: number) {
    const remove = this.db.prepare("DELETE FROM tasks WHERE id = ?");
    remove.run(id);
  }

  updateTask(id: number, task: Omit<Task, "id">) {
    const update = this.db.prepare("UPDATE tasks SET title = ? WHERE id = ?");
    update.run(task.title, id);
  }
}
