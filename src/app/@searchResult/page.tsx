import VideoList from "@/components/VideoList";
import { revalidateTag } from "next/cache";
import React from "react";

const SearchResultPage = async () => {  
  revalidateTag("fetchId")
  return (
    <div className="flex flex-col text-center justify-center w-[100%] h-[100%]">
      <VideoList />
    </div>
  );
};

export default SearchResultPage;
