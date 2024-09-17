const b64 = btoa("I like Bun!");
console.log("BASE 64: ", b64);

const str = atob(b64);
console.log("STRING: ", str);
