import { describe, expect, it } from "bun:test";

describe("Example Test Suite", () => {
  it("this test will not be executed", () => {
    expect(1 + 1).toBe(2);
  });

  it.only("this test will be executed only", () => {
    expect(1 + 1).toBe(2);
  });
});
