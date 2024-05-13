import { saveLead } from "@/services/saveLead";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    if (req.method === "POST") {
        const body = await req.json();
        const { name, email, phone, ...fields } = body;
        const lead = {
            name: name,
            email: email,
            phone: phone,
            fields: fields,
            created_on: new Date().toISOString()
        }
        await saveLead(lead);
    }

    return NextResponse.json({

    })
}