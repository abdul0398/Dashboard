import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    if (req.method === "POST") {
        const body = await req.json();
        console.log(body);


    }

    return NextResponse.json({

    })
}