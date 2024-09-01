// import { rmdir } from "node:fs";
// import { rmdir as rmdirSync } from "node:fs/promises";
import { rmdir, rmdirSync } from "node:fs";

rmdir("folder1", (err) => console.log(err));

try {
  rmdirSync("folder2", { recursive: true });
} catch (err) {
  console.log(err);
}
