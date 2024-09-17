import { expect, test } from "bun:test";

function areAnagrams(first: string, second: string) {
  const counter: Record<string, number> = {};
  for (const ch of first) {
    counter[ch] = (counter[ch] || 0) + 1;
  }
  for (const ch of second) {
    counter[ch] = (counter[ch] || 0) - 1;
  }
  return Object.values(counter).every((cnt) => cnt == 0);
}

test.each([
  ["cat", "bike", false],
  ["car", "arc", true],
  ["cat", "dog", false],
  ["cat", "act", true],
])("areAnagrams(%p, %p) returns %p", (first, second, expected) => {
  expect(areAnagrams(first, second)).toBe(expected);
});
