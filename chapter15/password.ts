const password = "abcd1234!@#$";

const argonHash = await Bun.password.hash(password);
const bcryptHash = await Bun.password.hash(password, {
  algorithm: "bcrypt",
  cost: 4,
});

console.log({ argonHash, bcryptHash });

const argonMatches = await Bun.password.verify(password, argonHash);
const bcryptMatches = await Bun.password.verify(password, bcryptHash);

console.log({ argonMatches, bcryptMatches });
