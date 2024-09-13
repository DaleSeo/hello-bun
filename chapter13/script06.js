import { $ } from "bun";

await $`pwd`;
$.cwd("/tmp");
await $`pwd`;
await $`pwd`.cwd("/etc");
