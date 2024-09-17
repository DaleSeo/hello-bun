Bun.serve({
  development: false,
  fetch() {
    throw new Error("문제 발생");
  },
});
