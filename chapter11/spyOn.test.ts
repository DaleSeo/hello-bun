import { test, expect, spyOn } from "bun:test";

test("spy on", () => {
  const calculator = {
    add: (a: number, b: number) => a + b,
  };

  const spyAdd = spyOn(calculator, "add");

  const result = calculator.add(2, 3);

  expect(spyAdd).toHaveBeenCalledTimes(1);
  expect(spyAdd).toHaveBeenCalledWith(2, 3);
  expect(result).toBe(5);
});
