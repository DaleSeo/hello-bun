// import { mkdir } from "node:fs";
// import { mkdir as mkdirSync } from "node:fs/promises";
import { mkdir, mkdirSync } from "node:fs";

mkdir("folder1", (err) => console.log(err));

try {
  mkdirSync("folder2/folder3", { recursive: true });
} catch (err) {
  console.log(err);
}
