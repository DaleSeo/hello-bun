import { describe, expect, it } from "bun:test";
import { calculator } from "./calculator";

describe("calculator", () => {
  it("add()", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it("subtract()", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  it("multiply()", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  it("divide()", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });
});
