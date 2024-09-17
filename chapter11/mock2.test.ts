import { test, expect, mock } from "bun:test";
test("async mock function mocks", async () => {
  const fakeData = "I'm a mock.";
  const mockFunction = mock(() => Promise.resolve(fakeData));
  expect(await mockFunction()).toEqual(fakeData);
});
