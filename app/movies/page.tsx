import showData from '../../data/shows.json';
import MediaListPage from '../hooks/media-list-page';

export default function MovieListPage() {
    return <MediaListPage data={showData} href='movies'/>
}
