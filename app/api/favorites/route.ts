import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { userListEntries } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { ContentTable } from '@/lib/db/queries/user-list-entries';
import { getBookByIds } from '@/lib/db/queries/books';
import { getGamesByIds } from '@/lib/db/queries/games';
import { getSeriesByIds } from '@/lib/db/queries/series';
import { getShowByIds } from '@/lib/db/queries/shows';

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get('userId');
    if (!userId) return NextResponse.json({ error: 'Missing userId' }, { status: 400 });

    const favoriteEntries = await db
        .select()
        .from(userListEntries)
        .where(
            and(
                eq(userListEntries.userId, userId),
                eq(userListEntries.isFavorite, true)
            )
        )
        .all();

    const byTable: Record<string, string[]> = {
        shows: [],
        series: [],
        games: [],
        books: [],
    };

    for (const entry of favoriteEntries) {
        if (byTable[entry.contentTable]) {
            byTable[entry.contentTable].push(entry.contentId);
        }
    }

    const [showItems, seriesItems, gameItems, bookItems] = await Promise.all([
        getShowByIds(byTable.shows),
        getSeriesByIds(byTable.series),
        getGamesByIds(byTable.games),
        getBookByIds(byTable.books),
    ]);

    const contentMap: Record<string, { title: string; imageUrl: string | null }> = {};
    for (const item of [...showItems, ...seriesItems, ...gameItems, ...bookItems]) {
        contentMap[item.id] = { title: item.title, imageUrl: item.imageUrl ?? null };
    }

    const result = favoriteEntries.map(entry => ({
        contentId: entry.contentId,
        contentTable: entry.contentTable,
        title: contentMap[entry.contentId]?.title ?? '',
        imageUrl: contentMap[entry.contentId]?.imageUrl ?? '/placeholder.svg',
    }));

    return NextResponse.json(result);
}


export async function POST(req: NextRequest) {
    const { userId, contentId, contentTable, isFavorite } = await req.json();
    if (!userId || !contentId || !contentTable) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const existing = await db
        .select()
        .from(userListEntries)
        .where(
            and(
                eq(userListEntries.userId, userId),
                eq(userListEntries.contentId, contentId),
                eq(userListEntries.contentTable, contentTable)
            )
        )
        .get();

    const now = new Date().toISOString();

    if (existing) {
        await db
            .update(userListEntries)
            .set({ isFavorite, updatedAt: now })
            .where(eq(userListEntries.id, existing.id))
            .run();
    } else {
        await db
            .insert(userListEntries)
            .values({
                userId,
                contentId,
                contentTable: contentTable as ContentTable,
                listType: 'planning',
                isFavorite,
                updatedAt: now,
            })
            .run();
    }

    return NextResponse.json({ success: true });
}