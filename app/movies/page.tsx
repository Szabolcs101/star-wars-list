import { getAllShows } from '@/lib/db/queries/shows';
import MediaListPage from '../hooks/media-list-page';

export default async function MovieListPage() {
    const movies = await getAllShows();
    const normalized = movies.map(m => ({
        ...m,
        imageUrl: m.imageUrl ?? '/placeholder.svg',
    }));
    return <MediaListPage data={normalized} href='movies' />
}
