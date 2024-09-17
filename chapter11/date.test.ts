import { beforeEach, expect, setSystemTime, test } from "bun:test";

function formatCurrentDate(locale = "en") {
  const koDtf = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeStyle: "short",
  });
  return koDtf.format(new Date());
}

beforeEach(() => setSystemTime());

test("formats current date for English", () => {
  setSystemTime(new Date(2023, 9, 21, 16, 57));
  expect(formatCurrentDate()).toEqual("October 21, 2023 at 4:57 PM");
});

test("formats current date for Korean", () => {
  setSystemTime(new Date(2023, 9, 21, 16, 57));
  expect(formatCurrentDate("ko")).toEqual("2023년 10월 21일 오후 4:57");
});
