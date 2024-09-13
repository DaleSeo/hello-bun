import { $ } from "bun";

try {
  const output = await $`curl http://abcdefgh.comcom`.text();
  console.log("정상 결과:", output);
} catch (err) {
  console.log("오류 코드:", err.exitCode);
  console.log("오류 결과:", err.stderr.toString());
}
