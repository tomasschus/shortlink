import LinkModel from '@/src/models/link.schema';
import { linkRedirect } from '@/src/types/linkRedirect.interface';
import dbConnect from '@/src/utils/db';
import { NextRequest, NextResponse } from 'next/server';

dbConnect();

export async function POST(request: NextRequest) {
  const body: linkRedirect = await request.json()

  if (!body || !body.shortUrl) {
    return NextResponse.json({ message: "You need to send url.", data: null, success: false });
  }

  try {
    const result = await LinkModel.findOne({ shortUrl: body.shortUrl });
    let formatedResult;
    if (result) {
      formatedResult = result.originalUrl;
      if(!result.originalUrl.includes("http")){
        formatedResult = "https://" + formatedResult;
      }
    }
    return NextResponse.json({ message: "OK", data: formatedResult, success: false });
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ message: error.message, data: null, success: false });
  }
}