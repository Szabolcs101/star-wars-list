import MyMediaList from "@/app/hooks/mymedia-list";
import seriesData from "../../../data/series.json";

export default function MySeriesPage() {

    const processedData = seriesData.map(item => ({
    ...item,
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