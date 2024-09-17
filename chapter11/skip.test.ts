import { expect, test } from "bun:test";

test("this test will be executed", () => {
  expect(1 + 1).toBe(2);
});

test.skip("this test will be skipped", () => {
  expect(1 + 1).toBe(3);
});
