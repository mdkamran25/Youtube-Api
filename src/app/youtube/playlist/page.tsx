import Playlist from '@/components/playlist';
import { cookies} from 'next/headers'
import { redirect } from 'next/navigation';

export default async function YoutubePlaylist({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  
  const code = searchParams?.code
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/code/`, {
      headers: { code },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return (
      <div className="flex w-[100vw] flex-col md:p-24 sm:p-10 p-5">
        <h1 className='text-2xl font-semibold'>Playlists in your channel</h1>
        {data.data.length !== 0 ? <Playlist data={data.data} token={data.token} /> :<p className='block text-xl pt-4 ps-2'> No Playlist Found 😔</p>}
      </div>
    );
  } catch (error) {
    if(error instanceof Error)
    console.error("Error fetching data:", error.message);
    return (
      <div className="flex h-[100vh] w-[100vw] flex-row items-center justify-center p-24">
        {redirect("/")}
        {/* {error?.message} */}
        
      </div>
    );
  }
}
