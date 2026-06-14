import { getAllShows } from '@/lib/db/queries/shows';
import MediaListPage from '../hooks/media-list-page';
import { Suspense } from 'react';

export default async function MovieListPage({ searchParams, }: { searchParams: Promise<{ [key: string]: string | undefined }>; }) {
    const params = await searchParams;
    const movies = await getAllShows();
    const normalized = movies.map(m => ({
        ...m,
        imageUrl: m.imageUrl ?? '/placeholder.svg',
    }));
    return (
    <Suspense fallback={<div>Loading...</div>}>
        <MediaListPage data={normalized} href='movies' searchParams={params}/>
    </Suspense>
    )
}
