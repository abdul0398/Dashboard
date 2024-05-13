import { sql } from "@vercel/postgres";

export async function createTable() {
  await sql`
        CREATE TABLE IF NOT EXISTS leads (
            id serial PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            fields JSON,
            created_on TIMESTAMP NOT NULL
        );
    `;
}
