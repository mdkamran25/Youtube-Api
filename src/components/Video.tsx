import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    item: PlaylistItem;
    key: number;
  }
const Video = ({ item, key }: Props) => {
   
  return (
    <div
      className="flex flex-row w-[100%] py-2  px-3 gap-4 my-1 box-sh rounded-lg border border-gray-500"
      key={key}
    >
      <div className="img ">
        <Image
          src={item?.snippet?.thumbnails?.standard?.url}
          alt="thumbanil image"
          width={150}
          height={200}
        />
      </div>
      <div className="Title md:pt-2 text-start text-black hover:cursor-pointer hover:text-blue-600">
        <Link href={`https://www.youtube.com/watch?v=${item?.contentDetails?.videoId}`}>
          <span className="font-bold text-sm">{item?.snippet?.title}</span>
          <br />
          <span className="font-light text-xs">
            {item?.contentDetails?.videoPublishedAt}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Video
