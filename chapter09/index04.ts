const file = Bun.file("./package.json");
const decoder = new TextDecoder();
for await (const value of file.stream()) {
  console.log(decoder.decode(value));
}
