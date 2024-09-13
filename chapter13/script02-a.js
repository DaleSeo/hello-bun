import { $ } from "bun";

const result = await $`echo "Hello, Bun!"`.text();
console.log(result);
