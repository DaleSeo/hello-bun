import { Database } from "bun:sqlite";

const db = new Database("file.db");
// const db = new Database(":memory:");
db.exec("PRAGMA journal_mode = WAL;");

db.exec(
  "CREATE TABLE countries (id INTEGER PRIMARY KEY, code TEXT, name TEXT)"
);
db.exec("CREATE INDEX idx_code ON countries (code)");

const insert = db.prepare(
  "INSERT INTO countries (code, name) VALUES ($code, $name)"
);
const countries = [
  { $code: "KR", $name: "Korea" },
  { $code: "CA", $name: "Canada" },
  { $code: "US", $name: "United States" },
  { $code: "GB", $name: "United Kingdom" },
  { $code: "CN", $name: "China" },
];
for (const country of countries) insert.run(country);

const update = db.prepare(
  "UPDATE countries SET name = $name WHERE code = $code"
);
update.run({ $code: "US", $name: "미국" });

const remove = db.prepare("DELETE FROM countries WHERE code = ?");
remove.run("CN");

const selectOne = db.query("SELECT * FROM countries WHERE code = ?");
const oneCountry = selectOne.get("KR");
console.log(oneCountry);

const selectMany = db.query("SELECT * FROM countries ORDER BY code");
const manyCountries = selectMany.all();
console.log(manyCountries);

db.close();
