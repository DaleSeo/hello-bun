const input = Bun.file("./package.json");
await Bun.write("./package-clone.json", input);
