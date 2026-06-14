import { db } from "@/lib/db";
import { userListEntries } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get("userId");

    if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    try {
        const entries = await db
            .select()
            .from(userListEntries)
            .where(eq(userListEntries.userId, userId));

        return NextResponse.json(entries);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch user lists" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { userId, contentId, contentTable, listType, progress, rating, isFavorite } = body;

        if (!userId || !contentId || !contentTable) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const now = new Date().toISOString();

        await db
            .insert(userListEntries)
            .values({
                userId,
                contentId,
                contentTable,
                listType: listType || "none",
                progress: progress ?? 0,
                rating: rating ?? null,
                isFavorite: isFavorite ?? false,
                updatedAt: now,
            })
            .onConflictDoUpdate({
                target: [userListEntries.userId, userListEntries.contentId, userListEntries.contentTable],
                set: {
                    listType: listType ?? undefined,
                    progress: progress ?? undefined,
                    rating: rating ?? undefined,
                    isFavorite: isFavorite ?? undefined,
                    updatedAt: now,
                },
            });


        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to update entry" }, { status: 500 });
    }
}