import MediaListPage from '../hooks/media-list-page';
import { getAllGames } from '@/lib/db/queries/games';

export default async function GameListPage() {
    const games = await getAllGames();
    const normalized = games.map(g => ({
        ...g,
        imageUrl: g.imageUrl ?? '/placeholder.svg',
    }));
    return <MediaListPage data={normalized} href='games' />
}
