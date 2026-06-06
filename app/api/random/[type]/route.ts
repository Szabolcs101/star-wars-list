import { NextResponse } from 'next/server';
import { getAllShows } from '@/lib/db/queries/shows';
import { getAllSeries } from '@/lib/db/queries/series';
import { getAllGames } from '@/lib/db/queries/games';
import { getAllBooks } from '@/lib/db/queries/books';

const fetchers = {
    movies: getAllShows,
    series: getAllSeries,
    games: getAllGames,
    books: getAllBooks,
};

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ type: string }> }
) {
    const { type } = await params;
    const fetcher = fetchers[type as keyof typeof fetchers];
    if (!fetcher) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });

    const items = await fetcher();
    const mapped = items.map(i => ({
        id: i.id,
        title: i.title,
        imageUrl: i.imageUrl ?? '/placeholder.svg',
    }));

    return NextResponse.json(mapped);
}