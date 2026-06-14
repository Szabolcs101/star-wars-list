import { db } from "@/lib/db";
import { userListEntries } from "@/lib/db/schema";
import { eq, and, avg, count } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id: contentId } = await params;

    if (!contentId) {
        return NextResponse.json({ average: 0, count: 0 }, { status: 400 });
    }

    try {
        const result = await db
            .select({
                average: avg(userListEntries.rating),
                count: count(),
            })
            .from(userListEntries)
            .where(
                and(
                    eq(userListEntries.contentId, contentId),
                    eq(userListEntries.listType, "finished")
                )
            );

        const avgValue = result[0]?.average
            ? Number(Number(result[0].average).toFixed(1))
            : 0;

        return NextResponse.json({
            average: avgValue,
            count: result[0]?.count || 0
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ average: 0, count: 0 });
    }
}