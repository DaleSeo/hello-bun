import { readFile, writeFile } from "node:fs/promises";

try {
  const data = readFile("package.json", "utf8");
  console.log(data);
} catch (err) {
  console.log(err);
}

try {
  const data = "헬로, Bun!";
  writeFile("./output.txt", data);
} catch (err) {
  console.log(err);
}
