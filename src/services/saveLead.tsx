import { sql } from "@vercel/postgres";
import { createTable } from "./createTable";
import { lead } from "@/types/data";
export async function saveLead(lead: lead) {
  await createTable();
  const { rows } = await sql`
            INSERT INTO leads (name, email, phone, fields, created_on)
            VALUES (${lead.name}, ${lead.email}, ${
    lead.phone
  }, ${JSON.stringify(lead.fields)}, ${lead.created_on})
        `;
}
