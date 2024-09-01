import { readFile, writeFile } from "node:fs";

readFile("package.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

const data = "헬로, Bun!";
writeFile("./output.txt", data, (err) => console.log(err));
