Bun.serve({
  fetch() {
    throw new Error("문제 발생");
  },
  error(error) {
    return new Response(error.message, { status: 500 });
  },
});
