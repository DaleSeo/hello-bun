const file = Bun.file("./package.json");
console.log(await file.text());
