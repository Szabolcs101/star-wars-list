import { NextResponse } from 'next/server';
import { getAllShows } from '@/lib/db/queries/shows';
import { getAllSeries } from '@/lib/db/queries/series';
import { getAllGames } from '@/lib/db/queries/games';
import { getAllBooks } from '@/lib/db/queries/books';

export async function GET() {
    const [movies, series, games, books] = await Promise.all([
        getAllShows(),
        getAllSeries(),
        getAllGames(),
        getAllBooks(),
    ]);

    const combined = [
        ...movies.map(i => ({ id: i.id, title: i.title, type: 'movie' as const })),
        ...series.map(i => ({ id: i.id, title: i.title, type: 'series' as const })),
        ...games.map(i => ({ id: i.id, title: i.title, type: 'game' as const })),
        ...books.map(i => ({ id: i.id, title: i.title, type: 'book' as const })),
    ];

    return NextResponse.json(combined);
}