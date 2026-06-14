'use client';
import { useState, useEffect } from 'react';
import { useLists } from "@/app/context/list-context";
import styles from '../../css-modules/page-detailed.module.css';

interface Props {
    itemId: string;
}

export default function AverageScore({ itemId }: Props) {
    const { getAverageScore } = useLists();
    const [average, setAverage] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAverage = async () => {
            setLoading(true);
            try {
                const avg = await getAverageScore(itemId);
                setAverage(avg);
            } catch (err) {
                console.error("Failed to fetch average score", err);
                setAverage(0);
            } finally {
                setLoading(false);
            }
        };

        fetchAverage();
    }, [itemId, getAverageScore]);

    return (
        <div className={styles.detail}>
            <h4 className={styles.detailTitle}>Average Score</h4>
            <p className={styles.detailText}>
                {loading ? "..." : average > 0 ? average : "—"}
            </p>
        </div>
    );
}