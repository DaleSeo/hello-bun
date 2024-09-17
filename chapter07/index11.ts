import express from "express";

const app = express();
app.get("/", (req, res) => res.send("헬로, Bun!"));
app.listen(3000);
