"use client";
import React from "react";

const Playlist = (data: any) => {
  //   console.log(data);

  const handleClick = async (id: string) => {
    console.log("id at client side: ", id);
    console.log("Base URL", process.env.NEXT_PUBLIC_BASE_URL);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/playlistVideo/${id}`
    );
    const datas = await res.json();
    console.log({ datas });
  };
  return (
    <div className="flex flex-row ps-2 pt-3">
      <div className="">
        <ul className="list-disc divide-y-2">
          {data?.data?.map((item: any, index: any) => {
            return (
              <li
                onClick={() => handleClick(item.id)}
                className="py-2 cursor-pointer hover:text-blue-700"
                key={index}
              >
                {item.snippet.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Playlist;
