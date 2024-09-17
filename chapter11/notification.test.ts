import { expect, mock, test } from "bun:test";
import { sendEmail, sendSMS } from "./notification";

mock.module("./notification", () => ({
  sendEmail: mock(),
  sendSMS: mock(),
}));

test("sendEmail", () => {
  sendEmail("test@email.com", "테스트 이메일");

  expect(sendEmail).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledWith("test@email.com", "테스트 이메일");
});

test("sendSMS", () => {
  sendSMS("123-456-7890", "테스트 문자");

  expect(sendSMS).toHaveBeenCalledTimes(1);
  expect(sendSMS).toHaveBeenCalledWith("123-456-7890", "테스트 문자");
});
