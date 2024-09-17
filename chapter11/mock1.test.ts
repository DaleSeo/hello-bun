import { test, expect, mock } from "bun:test";

test("mock function mocks", async () => {
  const fakeData = "I'm a mock.";

  const mockFunction = mock(() => fakeData);

  expect(mockFunction()).toEqual(fakeData);
});
