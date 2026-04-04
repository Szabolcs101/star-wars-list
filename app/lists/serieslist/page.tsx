import MyMediaList from "@/app/hooks/mymedia-list";
import seriesData from "../../../data/series.json";

export default function MySeriesPage() {
    return (
        <MyMediaList
            data={seriesData}
            href="series"
            allowedTypes={["series", "animation series"]}
            getTotal={(item) => item.episodes ?? 0}
        />
    );
}