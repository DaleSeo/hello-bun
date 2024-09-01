const input = Bun.file("./package.json");
const output = Bun.file("./package-clone.json");
await Bun.write(output, input);
