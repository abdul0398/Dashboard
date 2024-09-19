import { getPool } from "./createTable";
import { lead } from "@/types/data";
import { format } from "date-fns";
export async function saveLead(lead: lead) {
  const pool = await getPool();

  const formattedDate = format(
    new Date(lead.created_on),
    "yyyy-MM-dd HH:mm:ss"
  );

  await pool.query(
    `
      INSERT INTO leads (name, email, phone, fields, created_on)
      VALUES (?, ?, ?, ?, ?)
    `,
    [
      lead.name,
      lead.email,
      lead.phone,
      JSON.stringify(lead.fields),
      formattedDate,
    ]
  );
}
