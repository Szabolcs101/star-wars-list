import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { follows, users } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get('userId');
    if (!userId) return NextResponse.json({ error: 'Missing userId' }, { status: 400 });

    const followers = await db
        .select({ id: users.id, name: users.name })
        .from(follows)
        .innerJoin(users, eq(follows.followerId, users.id))
        .where(eq(follows.followingId, userId))
        .all();

    const following = await db
        .select({ id: users.id, name: users.name })
        .from(follows)
        .innerJoin(users, eq(follows.followingId, users.id))
        .where(eq(follows.followerId, userId))
        .all();

    return NextResponse.json({ followers, following });
}

export async function POST(req: NextRequest) {
    const { followerId, followingId } = await req.json();
    if (!followerId || !followingId) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    if (followerId === followingId) {
        return NextResponse.json({ error: 'Cannot follow yourself' }, { status: 400 });
    }

    const existing = await db
        .select()
        .from(follows)
        .where(and(eq(follows.followerId, followerId), eq(follows.followingId, followingId)))
        .get();

    if (existing) {
        await db
            .delete(follows)
            .where(eq(follows.id, existing.id))
            .run();
        return NextResponse.json({ following: false });
    }

    await db.insert(follows).values({
        followerId,
        followingId,
        createdAt: new Date().toISOString(),
    }).run();

    return NextResponse.json({ following: true });
}