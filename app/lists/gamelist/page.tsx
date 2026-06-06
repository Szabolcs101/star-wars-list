import MyMediaList from "@/app/hooks/mymedia-list";
import { getAllGames } from "@/lib/db/queries/games";

export default async function MyGamesPage() {

    const games = await getAllGames();

    const processedData = games.map(item => ({
        ...item,
        imageUrl: item.imageUrl ?? '/placeholder.svg',
    }))

    return (
        <MyMediaList
            data={processedData}
            href="games"
            allowedTypes={["video game"]}
        />
    );
}