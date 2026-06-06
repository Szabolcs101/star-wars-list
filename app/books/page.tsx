import MediaListPage from '../hooks/media-list-page';
import { getAllBooks } from '@/lib/db/queries/books';

export default async function BookListPage() {
    const books = await getAllBooks();
    const normalized = books.map(b => ({
        ...b,
        imageUrl: b.imageUrl ?? '/placeholder.svg',
    }));
    return <MediaListPage data={normalized} href='books' />
}
