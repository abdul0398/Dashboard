import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {

    const {rows:leads} = await sql`
        SELECT * FROM leads`
    
        console.log(leads)
        return NextResponse.json({
        leads
    })
}