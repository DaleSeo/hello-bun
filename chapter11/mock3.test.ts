import { test, expect, mock } from "bun:test";

test("mock function remembers", () => {
  const mockFunction = mock((arg: number | string) => {});

  mockFunction(123);
  mockFunction("ABC");

  expect(mockFunction).toHaveBeenCalledTimes(2);
  expect(mockFunction).toHaveBeenCalledWith(123);
  expect(mockFunction).toHaveBeenCalledWith("ABC");
});
