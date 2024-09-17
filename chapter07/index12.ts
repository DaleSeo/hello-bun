import { Elysia } from "elysia";

new Elysia().get("/", () => "헬로, Bun!").listen(3000);
