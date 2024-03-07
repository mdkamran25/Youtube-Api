"use server";

import { cookies } from "next/headers";
import { fetchPlaylistVideo } from "./fetchPlaylistVideo";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const getPlaylistId = async (formData: FormData) => {
  
    const session = await getServerSession();
  console.log(session);

  const reqType = formData.get("reqType");

  const url = formData.get("url") as string;
  console.log({ url });

  const matchResult = url.match(/list=([^&]+)/);

  if (matchResult) {

    const playlistId = matchResult[1];

    if (playlistId) {
    //   console.log(playlistId);
      cookies().set("id", playlistId)
      await fetchPlaylistVideo("");
    //   revalidateTag("fetchId");
    }
  } else {
    console.log("URL does not contain playlist ID");
  }
};
