import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { series, books } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const seriesItem = db.select({ episodes: series.episodes }).from(series).where(eq(series.id, id)).get();
    if (seriesItem?.episodes) {
        return NextResponse.json({ total: seriesItem.episodes });
    }

    const book = db.select({ pageNumber: books.pageNumber }).from(books).where(eq(books.id, id)).get();
    if (book?.pageNumber) {
        return NextResponse.json({ total: book.pageNumber });
    }

    return NextResponse.json({ total: 1 });
}