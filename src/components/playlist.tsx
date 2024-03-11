/* eslint-disable react/no-unescaped-entities */

"use client";
import { useState } from "react";
import Image from "next/image";

const Playlist = ({ data, token }:{data:PlaylistItems, token:string}) => {
  const [videoList, setVideoList] = useState<PlaylistItems | null>(null);
  const [currentPlaylist, setCurrentPlaylist] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string|null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const handleClick = async (id:string, title:string) => {
    setLoader(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/playlistVideo/${id}`,
      {
        headers: { token },
      }
    );
    const data = await res.json();
    setVideoList(data.data);
    setCurrentPlaylist(title);
    setLoader(false);
  };

  const openModal = (video:string) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-row ps-2 mt-3">
      <div className="">
        <ul className="list-disc divide-y-2">
          {data?.map((item:PlaylistItem, index:number) => (
            <li
              key={index}
              onClick={() => handleClick(item.id, item?.snippet?.localized?.title as string)}
              className={`py-2 cursor-pointer hover:text-blue-700 ${
                currentPlaylist === item?.snippet?.localized?.title as string &&
                "text-blue-700 font-semibold"
              }`}
            >
              {item?.snippet?.localized?.title }
            </li>
          ))}
        </ul>
      </div>
      <hr />
      {loader ? (
        <div className="w-[100%]">
          <p className="text-center font-bold pt-5">Loading...</p>
        </div>
      ) : (
        <div className="mt-3 w-[100%] ps-5">
          {videoList ? (
            videoList.length !== 0 ? (
              videoList.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row w-[100%] py-2 px-3 gap-4 my-1 box-sh rounded-lg border border-gray-500"
                >
                  <div className="img">
                    <Image
                      src={item?.snippet?.thumbnails?.standard?.url}
                      alt="thumbnail image"
                      width={150}
                      height={200}
                    />
                  </div>
                  <div className="Title md:pt-2 text-start text-black hover:cursor-pointer hover:text-blue-600">
                    <span
                      onClick={() => openModal(item?.contentDetails?.videoId)}
                      className="font-bold text-sm"
                    >
                      {item?.snippet?.title}
                    </span>
                    <br />
                    <span className="font-light text-xs">
                      {item?.contentDetails?.videoPublishedAt}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center font-bold">
                You don't have any video in your playlist 😞
              </p>
            )
          ) : (
            ""
          )}
        </div>
      )}

      {modalOpen && (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4">
            <button
              className="absolute top-10 right-10 p-2 text-white font-bold text-3xl"
              onClick={closeModal}
            >
              X
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              width="560"
              height="315"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlist;
