import { Suspense } from 'react';
import MediaListPage from '../hooks/media-list-page';
import { getAllGames } from '@/lib/db/queries/games';

export default async function GameListPage({ searchParams, }: { searchParams: Promise<{ [key: string]: string | undefined }>; }) {
    const params = await searchParams;
    const games = await getAllGames();
    const normalized = games.map(g => ({
        ...g,
        imageUrl: g.imageUrl ?? '/placeholder.svg',
    }));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MediaListPage data={normalized} href='games' searchParams={params} />
        </Suspense>
    )
}
