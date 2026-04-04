import gamesData from '../../data/games.json';
import MediaListPage from '../hooks/media-list-page';

export default function GameListPage() {
    return <MediaListPage data={gamesData} href='games'/>
}
