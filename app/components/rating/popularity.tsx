"use client";
import { useLists } from "@/app/context/list-context";
import styles from "../../css-modules/page-detailed.module.css";

interface Props {
    itemId: string;
}

export default function Popularity({ itemId }: Props) {
    const { getPopularity } = useLists();
    const popularity = getPopularity(itemId);

    return (
        <div className={styles.detail}>
            <h4 className={styles.detailTitle}>Popularity</h4>
            <p className={styles.detailText}>
                {popularity}
            </p>
        </div>
    );
}