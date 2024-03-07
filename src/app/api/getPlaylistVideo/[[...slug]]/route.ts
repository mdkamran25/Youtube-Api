import { NextResponse } from "next/server";
// export const dynamic = "force-dynamic"
export async function GET(
  _req: Request,
  { params }: { params: { slug: string[] } }
) {

  try {
    if (params.slug.length === 1) {
      const playlist = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=5&playlistId=${params.slug[0]}&key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const list = await playlist.json();

      if (list) {
        // console.log(list)
        return NextResponse.json({ data: list }, { status: 200 });
      }
    } else if (params.slug.length === 2) {
      const playlist = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=5&pageToken=${params.slug[1]}&playlistId=${params.slug[0]}&key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const list = await playlist.json();
      // console.log(list)
      if (list) {
        return NextResponse.json({ data: list }, { status: 200 });
      }
    }

    return NextResponse.json({ data: "No Playlist Found" }, { status: 500 });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
