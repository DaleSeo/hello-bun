import { app } from "./tasks-api";

app.listen(3000, (app) => {
  console.log(`Listening on http://${app.hostname}:${app.port}`);
});
