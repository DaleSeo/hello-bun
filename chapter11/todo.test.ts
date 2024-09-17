import { expect, describe, it, test } from "bun:test";

describe("Example Test Suite", () => {
  it("one plus two is three", () => {
    expect(1 + 2).toBe(3);
  });

  it.todo("this test won't run", () => {
    expect(1 - 2).toBe(-100);
  });
});

test.todo("write test code later");
