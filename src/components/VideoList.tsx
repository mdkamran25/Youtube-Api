"use client";
import { fetchPlaylistVideo } from "@/utils/actions/fetchPlaylistVideo";
import React, { useEffect, useState } from "react";
import Video from "./Video";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";


interface FetchResult{
  data:{
    items:PlaylistItem[];
    nextPageToken: string|undefined|null;
    prevPageToken: string|undefined|null;
    pageInfo:PageInfo;
  }
}

const VideoList = () => {
  
  const searchParams = useSearchParams()
  const pageToken = searchParams.get('pageToken')
 
  const [fetchResult, setFetchResult ] = useState<FetchResult | null>();

  useEffect(() => {
    const fetching = async () => {
      const data = await fetchPlaylistVideo(pageToken || "");
      setFetchResult(data)
    };
    fetching()
  }, [pageToken]);

  console.log({fetchResult});
  return (
    <>
      {fetchResult?.data?.items
        ? fetchResult?.data?.items?.map((item: PlaylistItem, index: number) => (
            <Video item={item} key={index} />
          ))
        : "Nothing to show"}
      {fetchResult?.data?.items && (
        <Pagination
          nextPageToken={fetchResult?.data?.nextPageToken}
          prevPageToken={fetchResult?.data?.prevPageToken}
          pageInfo={fetchResult?.data?.pageInfo}
        />
      )}
    </>
  );
};

export default VideoList;
