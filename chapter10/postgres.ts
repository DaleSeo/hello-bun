import postgres from "postgres";

const sql = postgres({
  host: "localhost",
  port: 5432,
  database: "postgres",
  username: "postgres",
  password: "postgres",
});

await sql`CREATE TABLE IF NOT EXISTS countries (id SERIAL PRIMARY KEY, code TEXT, name TEXT)`;

const countries = [
  { code: "KR", name: "Korea" },
  { code: "CA", name: "Canada" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CN", name: "China" },
];

await sql`INSERT INTO countries ${sql(countries, "code", "name")}`;

await sql`UPDATE countries SET name = '미국' WHERE code = 'US'`;

await sql`DELETE FROM countries WHERE code = 'CN'`;

const oneCountry = await sql`SELECT * FROM countries WHERE code = 'KR'`;
console.log({ oneCountry });

const manyCountries = await sql`SELECT * FROM countries`;
console.log({ manyCountries });

await sql`DROP TABLE IF EXISTS countries`;

await sql.end();
