const file = Bun.file("./package.json");
console.log({
  size: file.size,
  type: file.type,
  name: file.name,
  lastModified: file.lastModified,
});
