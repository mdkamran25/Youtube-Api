import Image from "next/image";
import React from "react";
import searchIcon from "../../assets/search-icon.svg";
import { getPlaylistId } from "@/utils/actions/getPlaylistId";

const Input = () => {
  return (
    <form action={getPlaylistId}>
      <div className="flex flex-row justify-center">
        <div className="w-[20%] xl:w-[15%] justify-self-end  mb-6 md:mb-0">
          <div className="relative">
            <select
            name="reqType"
              className="block appearance-none w-[100%] border-b-2 border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
              id="grid-state"
            >
              <option value="playlist_Video" >Playlist Video</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <input
            name="url"
            className="appearance-none block w-full text-gray-700  border-gray-200 border-b-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            required
            placeholder="Enter palylist link here..."
          />
        </div>
        <div>
          <Image
            className="pt-4"
            src={searchIcon}
            alt="search Icon"
            width={20}
            height={20}
            priority
          />
        </div>
      </div>
    </form>
  );
};

export default Input;
