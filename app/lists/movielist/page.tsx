import MyMediaList from "@/app/hooks/mymedia-list";
import { getAllShows } from "@/lib/db/queries/shows";

export default async function MyMoviesPage() {

    const movies = await getAllShows();

    const processedData = movies.map(item => ({
        ...item,
        imageUrl: item.imageUrl ?? '/placeholder.svg',
    }))

    return (
        <MyMediaList
            data={processedData}
            href="movies"
            allowedTypes={["film"]}
        />
    );
}