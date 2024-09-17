const md5hasher = new Bun.CryptoHasher("md5");
const sha256hasher = new Bun.CryptoHasher("sha256");
const sha512hasher = new Bun.CryptoHasher("sha512");

const input = "헬로, Bun!";
md5hasher.update(input);
sha256hasher.update(input);
sha512hasher.update(input);

console.log("[BASE64 인코딩 결과]");
console.log("MD5:", md5hasher.digest("base64"));
console.log("SHA256:", sha256hasher.digest("base64"));
console.log("SHA512:", sha512hasher.digest("base64"));

console.log("[HEX 인코딩 결과]");
console.log("MD5:", md5hasher.digest("hex"));
console.log("SHA256:", sha256hasher.digest("hex"));
console.log("SHA512:", sha512hasher.digest("hex"));
