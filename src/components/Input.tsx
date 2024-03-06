import Image from "next/image";
import React from "react";
import searchIcon from "../../assets/search-icon.svg"

const Input = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="w-[100%] justify-self-end xl:w-[50%] px-3 mb-6 md:mb-0">
        <div className="relative">
          <select
            className="block appearance-none w-[100%] border-b-2 border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
            id="grid-state"
          >
            <option>Playlist Video</option>
            <option></option>
            <option></option>
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
      <div className="col-span-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full">
            <input
              className="appearance-none block w-full text-gray-700  border-gray-200 border-b-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Enter palylist link here..."
            />
          </div>
        </div>
      </div>
      <div className="pt-4"><Image src={searchIcon} alt="search Icon" width={20} height={20} priority /></div>
    </div>
  );
};

export default Input;
