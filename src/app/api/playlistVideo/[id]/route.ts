import { google, youtube_v3 } from "googleapis";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const OAuth2 = google.auth.OAuth2;

export async function GET( _req:NextResponse ,{ params }: { params:{id:string}}) {
  
  console.log({params})
  const {id} = params;
  console.log({id})

  try {
   
    return NextResponse.json({ data: "got Id" }, { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { error: error.message, reason: error.cause },
      { status: 500 }
    );
  }
}
