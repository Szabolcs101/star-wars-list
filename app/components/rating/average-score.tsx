'use client';
import { useLists } from "@/app/context/list-context";
import styles from '../../css-modules/page-detailed.module.css';

interface Props {
    itemId: string;
}

export default function AverageScore({ itemId }: Props) {
    const { getAverageScore } = useLists();
    const average = getAverageScore(itemId);

    return (
        <div className={styles.detail}>
            <h4 className={styles.detailTitle}>Average Score</h4>
            <p className={styles.detailText}>
                {average > 0 ? average : ""}
            </p>
        </div>
    );
}