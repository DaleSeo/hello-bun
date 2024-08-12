import { Database } from "bun:sqlite";

export const taskDatabase = new Database("tasks.db");
taskDatabase.exec(
  "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT)"
);
