import { Link } from "@/src/models/link.schema";
import { createUniqueLink } from "@/src/utils/createUniqueLink";
import dbConnect from "@/src/utils/db";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request: Request) {
    const body: Partial<Link> = await request.json()

    if (!body || !body.originalUrl) 
        return NextResponse.json({ message: "You need to send url.", data: null, success: false });

    try {
        const registry = await createUniqueLink(body.originalUrl);
        return NextResponse.json({ message: "OK.", data: registry, success: true });
    } catch (error: any) {
        return NextResponse.json({ message: error.message, data: null, success: false });
    }
}

