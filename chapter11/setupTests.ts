import { beforeAll, afterAll } from "bun:test";

beforeAll(() => {
  console.log("테스트가 실행됩니다.");
});

afterAll(() => {
  console.log("테스트가 종료됩니다.");
});
