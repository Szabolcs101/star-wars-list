import { Suspense } from 'react';
import MediaListPage from '../hooks/media-list-page';
import { getAllBooks } from '@/lib/db/queries/books';

export default async function BookListPage({ searchParams, }: { searchParams: Promise<{ [key: string]: string | undefined }>; }) {
    const params = await searchParams;
    const books = await getAllBooks();
    const normalized = books.map(b => ({
        ...b,
        imageUrl: b.imageUrl ?? '/placeholder.svg',
    }));
    return (
    <Suspense fallback={<div>Loading...</div>}>
        <MediaListPage data={normalized} href="books" searchParams={params} />
    </Suspense>
    );
}
