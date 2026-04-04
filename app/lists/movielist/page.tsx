import MyMediaList from "@/app/hooks/mymedia-list";
import showsData from "../../../data/shows.json";

export default function MyMoviesPage() {
    return (
        <MyMediaList
            data={showsData}
            href="movies"
            allowedTypes={["film"]}
        />
    );
}