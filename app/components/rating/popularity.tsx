"use client";
import { useState, useEffect } from "react";
import { useLists } from "@/app/context/list-context";
import styles from "../../css-modules/page-detailed.module.css";

interface Props {
    itemId: string;
}

export default function Popularity({ itemId }: Props) {
    const { getPopularity } = useLists();
    const [popularity, setPopularity] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularity = async () => {
            setLoading(true);
            try {
                const count = await getPopularity(itemId);
                setPopularity(count);
            } catch (err) {
                console.error("Failed to fetch popularity", err);
                setPopularity(0);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularity();
    }, [itemId, getPopularity]);

    return (
        <div className={styles.detail}>
            <h4 className={styles.detailTitle}>Popularity</h4>
            <p className={styles.detailText}>
                {loading ? "..." : popularity}
            </p>
        </div>
    );
}