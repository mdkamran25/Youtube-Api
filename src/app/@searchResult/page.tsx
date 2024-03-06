import Pagination from "@/components/Pagination";
import VideoList from "@/components/VideoList";
import { fetchPlaylistVideo } from "@/utils/actions/fetchPlaylistVideo";

import React from "react";

const SearchResultPage = async () => {  
  const fetchResult = await fetchPlaylistVideo();
  console.log(fetchResult)
  return (
    <div className="flex flex-col text-center justify-center w-[100%] h-[100%]">
      {fetchResult?.data?.items
        ? fetchResult?.data?.items?.map((item: PlaylistItem, index: number) => (
            <VideoList item={item} key={index} />
          ))
        : "Nothing to show"}
        {fetchResult?.data?.items && <Pagination  pageInfo={fetchResult?.data?.pageInfo} />}
    </div>
  );
};

export default SearchResultPage;
