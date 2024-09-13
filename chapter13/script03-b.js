import { $ } from "bun";

const search = prompt("검색어를 입력하세요.", "");
await $`cat package.json | grep ${search}`;
