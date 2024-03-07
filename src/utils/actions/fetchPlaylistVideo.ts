'use server'

import { getPlaylistVideo } from "@/constant/apiurl";
import { cookies } from "next/headers";

export const fetchPlaylistVideo = async ( pageToken:string|undefined|null) =>{
    const id= cookies().get("id")
    console.log({id})
    const playlistVideo = await fetch(
        `${getPlaylistVideo}/${id?.value}/${pageToken||""}`,
        { next: { tags: ["fetchId"] } }
      );
      const fetchResult = await playlistVideo.json();
      return fetchResult;
}