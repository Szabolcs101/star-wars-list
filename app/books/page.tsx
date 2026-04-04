import booksData from '../../data/books.json';
import MediaListPage from '../hooks/media-list-page';

export default function BookListPage() {
    return <MediaListPage data={booksData} href='books'/>
}
