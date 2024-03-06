import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { playListId: string } }
) {
  const { playListId } = params;
  
  try {
    const playlist = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playListId}&key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const list = await playlist.json();
    if (list) {
      return NextResponse.json({ data: list.items }, { status: 200 });
    }
    return NextResponse.json({ data: "No Playlist Found" }, { status: 500 });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
