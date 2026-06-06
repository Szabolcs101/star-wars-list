import MyMediaList from "@/app/hooks/mymedia-list";
import { getAllSeries } from "@/lib/db/queries/series";

export default async function MySeriesPage() {

    const series = await getAllSeries();

    const processedData = series.map(item => ({
    ...item,
    imageUrl: item.imageUrl ?? '/placeholder.svg',
    episodes: item.episodes ?? undefined,
    total: item.episodes ?? 0,
  }));

    return (
        <MyMediaList
            data={processedData}
            href="series"
            allowedTypes={["series", "animation series"]}
        />
    );
}