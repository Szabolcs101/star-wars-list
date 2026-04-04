import MyMediaList from "@/app/hooks/mymedia-list";
import gameData from "../../../data/games.json";

export default function MyGamesPage() {
    return (
        <MyMediaList
            data={gameData}
            href="games"
            allowedTypes={["video game"]}
        />
    );
}