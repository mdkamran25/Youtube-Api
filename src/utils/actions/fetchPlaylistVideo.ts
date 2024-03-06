'use server'

import { getPlaylistVideo } from "@/constant/apiurl";
import { cookies } from "next/headers";

export const fetchPlaylistVideo = async () =>{
    const id= cookies().get("id")
    const playlistVideo = await fetch(
        `${getPlaylistVideo}/${id?.value}/EAAajQFQVDpDQVVpRURrME9UVkVSa1EzT0VRek5Ua3dORE1vQVVpSTY3My1uclg5QWxBQldrUWlRMmxLVVZSSFRsbFhhM1JNVDBVNWRWZ3hWbFphYTFreFlUSXhUbE5WZHpOamF6UjRVV3hqTTJWVmVHWmlSRUpFUldkelNYTmphbmh1ZDFsUmQwOU1jRlpuSWc`,
        { next: { tags: ["fetchId"] } }
      );
      const fetchResult = await playlistVideo.json();
      return fetchResult;
}