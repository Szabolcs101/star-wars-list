import { notFound } from 'next/navigation';
import { getUserByUsername } from '@/lib/db/queries/users';
import { db } from '@/lib/db';
import { userListEntries, follows, users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { getShowByIds } from '@/lib/db/queries/shows';
import { getSeriesByIds } from '@/lib/db/queries/series';
import { getGamesByIds } from '@/lib/db/queries/games';
import { getBookByIds } from '@/lib/db/queries/books';
import ProfileClient from '../[name]/profile-client';

export default async function ProfilePage({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    const profileUser = await getUserByUsername(name);

    if (!profileUser) notFound();

    const entries = await db
        .select()
        .from(userListEntries)
        .where(eq(userListEntries.userId, profileUser.id))
        .all();

    const favoriteEntries = entries.filter(e => e.isFavorite);

    const byTable: Record<string, string[]> = { shows: [], series: [], games: [], books: [] };
    for (const entry of favoriteEntries) {
        if (byTable[entry.contentTable]) byTable[entry.contentTable].push(entry.contentId);
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

    const favorites = favoriteEntries.map(entry => ({
        contentId: entry.contentId,
        contentTable: entry.contentTable,
        title: contentMap[entry.contentId]?.title ?? '',
        imageUrl: contentMap[entry.contentId]?.imageUrl ?? '/placeholder.svg',
    }));

    const followers = await db
        .select({ id: users.id, name: users.name })
        .from(follows)
        .innerJoin(users, eq(follows.followerId, users.id))
        .where(eq(follows.followingId, profileUser.id))
        .all();

    const following = await db
        .select({ id: users.id, name: users.name })
        .from(follows)
        .innerJoin(users, eq(follows.followingId, users.id))
        .where(eq(follows.followerId, profileUser.id))
        .all();

    return (
        <ProfileClient
            profileUser={{ id: profileUser.id, name: profileUser.name }}
            entries={entries}
            favorites={favorites}
            followers={followers}
            following={following}
        />
    );
}