import mysql, { Pool } from "mysql2/promise";

export async function getPool() {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Neet@2019",
    database: "dashboard",
  });

  await createTable(pool);
  return pool;
}

export async function createTable(pool: Pool) {
  const query = `CREATE TABLE IF NOT EXISTS leads (
    id serial PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    fields JSON,
    created_on TIMESTAMP NOT NULL
);`;

  await pool.query(query);
}
