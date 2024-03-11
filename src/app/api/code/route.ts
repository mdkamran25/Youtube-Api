import { google, youtube_v3 } from "googleapis";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const OAuth2 = google.auth.OAuth2;

export async function GET({ headers }: { headers: Headers }) {
  console.log("Token API is called");

  try {
    const code = headers.get("code");
    console.log({ code });

    if (!code) {
      return NextResponse.redirect("http://localhost:3000/");
    }

    const oauth2client = new OAuth2(
      process.env.NEXT_PUBLIC_CLIENT_ID!,
      process.env.NEXT_PUBLIC_CLIENT_SECRET!,
      process.env.NEXT_PUBLIC_REDIRECT_URI!
    );

    const token = await new Promise<object>((resolve, reject) => {
      oauth2client.getToken(code!, (err, token) => {
        if (err) {
          console.error("Error while getting token:", err);
          reject(err);
        } else {
          resolve(token);
        }
      });
    });

    console.log("Token received:", token);

    // Check if the token is valid
    if (!token) {
      return NextResponse.json(
        { error: "Token is invalid or empty" },
        { status: 500 }
      );
    }

    const jwtToken = jwt.sign(token as object, process.env.NEXT_PUBLIC_JWT_SECRET!);
    console.log("JWT Token:", jwtToken);

    cookies().set("jwtToken", jwtToken);

    const cookie = cookies().get("jwtToken");
    console.log({ cookie });

    oauth2client.credentials = jwt.verify(
      cookie?.value as string,
      process.env.NEXT_PUBLIC_JWT_SECRET!
    );

    const service = google.youtube({
      version: "v3",
      auth: oauth2client,
    });

    const response = await service.playlists.list({
      part: ["snippet,contentDetails"],
      mine: true,
    });

    console.log("response", response.data.items);

    return NextResponse.json({ data: response.data.items }, { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { error: error.message, reason: error.cause },
      { status: 500 }
    );
  }
}
