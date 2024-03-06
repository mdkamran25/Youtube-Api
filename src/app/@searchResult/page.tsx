import { getPlaylistVideo } from '@/constant/apiurl'
import React from 'react'

const SearchResultPage = async () => {
    const fetchPlaylistVideo = await fetch(`${getPlaylistVideo}/PLSP9jerXVX1b04EU202DNTPi7GMN8eQl4`)
    const fetchResult = await fetchPlaylistVideo.json();
    console.log({fetchResult})
    return (
    <div className='flex flex-row justify-center w-[100%] h-[100%]'>
      Nothing to show
    </div>
  )
}

export default SearchResultPage
