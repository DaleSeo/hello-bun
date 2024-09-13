import { $ } from "bun";

const search = "bun";
await $`cat package.json | grep ${search}`;
