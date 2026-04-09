import AverageScore from "./average-score";
import Popularity from "./popularity";

interface Props {
    itemId: string;
}

export default function RatingSection({ itemId }: Props) {
    return (
        <>
            <AverageScore itemId={itemId} />
            <Popularity itemId={itemId} />
        </>
    );
}