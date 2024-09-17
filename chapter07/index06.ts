Bun.serve({
  fetch() {
    return new Response("생성되었습니다.", { status: 201 });
  },
});
