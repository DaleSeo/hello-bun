import { $ } from "bun";

$.env({ GREETING: "Hi!" });
await $`echo $GREETING`;
await $`echo $GREETING`.env({ GREETING: "Hello!" });
