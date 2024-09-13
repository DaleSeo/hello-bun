import { $ } from "bun";

const pkg = await $`cat package.json`.json();
console.log(pkg.devDependencies);
