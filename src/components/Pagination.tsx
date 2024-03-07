"use client";
import { fetchPlaylistVideo } from "@/utils/actions/fetchPlaylistVideo";
import { usePathname, useRouter } from "next/navigation";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageInfo: PageInfo;
  prevPageToken: string | null | undefined;
  nextPageToken: string | null | undefined;
}

const Pagination: React.FC<PaginationProps> = ({
  pageInfo,
  nextPageToken,
  prevPageToken,
}) => {
  const totalPages = Math.ceil(pageInfo.totalResults / pageInfo.resultsPerPage);

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }: { selected: number }) => {
    console.log(selected);
    if (selected > currentPage) {
      setCurrentPage(selected);
      router.push(`?pageToken=${nextPageToken}`);
    } else if (selected < currentPage) {
      setCurrentPage(selected);
      router.push(`?pageToken=${prevPageToken}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination flex justify-center items-center my-4"
        activeClassName="bg-blue-500 text-white border-blue-500"
        pageClassName="mx-1"
        previousClassName="mx-1 border rounded-full p-2"
        nextClassName="mx-1 border rounded-full p-2"
        breakClassName="mx-1"
        breakLabel="..."
        disabledClassName="opacity-50"
        previousLabel="Previous"
        nextLabel="Next"
      />
    </div>
  );
};

export default Pagination;
