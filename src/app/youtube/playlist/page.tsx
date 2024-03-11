import Playlist from '@/components/playlist';
import { headers } from 'next/headers'
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
    console.log(data);

    return (
      <main className="flex h-[100vh] w-[100vw] flex-col p-24">
        <h1 className='h-1 text-2xl font-semibold'>Playlist in your channel</h1> <br/>
        {data.data.length !== 0 ? <Playlist data={data.data} /> :<p className='block text-xl pt-4 ps-2'>No Playlist Found</p>}
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return (
      <main className="flex h-[100vh] w-[100vw] flex-row items-center justify-center p-24">
        {redirect("/")}
      </main>
    );
  }
}
