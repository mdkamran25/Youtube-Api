'use server'

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getPlaylistVideo = (formData: FormData) => {
    const reqType = formData.get('reqType');
    const url = formData.get('url') as string;

    const matchResult = url.match(/list=([^&]+)/);
    if (matchResult) {
        const playlistId = matchResult[1];
        if(playlistId){
            cookies().set("id",playlistId)
            
            revalidateTag("fetchId");
        }
    } else {
        console.log('URL does not contain playlist ID');
    }


}
