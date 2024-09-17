import { afterEach, beforeEach, expect, test } from "bun:test";

let fruits: string[];

beforeEach(() => {
  fruits = ["Apple", "Banana", "Cherry"];
});

afterEach(() => {
  fruits = [];
});

test("push", () => {
  fruits.push("Lemon");
  expect(fruits).toEqual(["Apple", "Banana", "Cherry", "Lemon"]);
});

test("pop", () => {
  fruits.pop();
  expect(fruits).toEqual(["Apple", "Banana"]);
});
