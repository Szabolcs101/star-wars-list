"use client";
import Link from "next/link";
import { useAuth } from "../../context/auth-context";
import { useLists } from "../../context/list-context";
import Image from "next/image";
import styles from '../mylist.module.css';
import seriesData from "../../../data/series.json";
import { SvgPlusSolid } from "@/app/components/icons/fontawesome";

export default function MyListsPage() {
    const { user, isLoading: authLoading } = useAuth();
    const { getItemsByStatus, getEntry, updateProgress } = useLists();

    if (authLoading) return <div>Loading user...</div>;
    if (!user) return <div>Please log in to see your lists.</div>;

    const planningIds = getItemsByStatus("planned");
    const currentIds = getItemsByStatus("current");
    const completedIds = getItemsByStatus("finished");

    const handlePlusClick = (id: string) => {
        updateProgress(id);
    };

    const getSeries = (id: string) => seriesData.find((s: any) => s.id === id);

    const planningSeries = planningIds.filter(id => {
        const s = getSeries(id);
        return s?.type === "series" || s?.type === "animation series";
    });

    const currentSeries = currentIds.filter(id => {
        const s = getSeries(id);
        return s?.type === "series" || s?.type === "animation series";
    });

    const completedSeries = completedIds.filter(id => {
        const s = getSeries(id);
        return s?.type === "series" || s?.type === "animation series";
    });

    const renderRow = (id: string, showPlus: boolean) => {
        const series = getSeries(id);
        if (!series) return null;

        const entry = getEntry(id);
        const progress = entry?.progress ?? 0;
        const total = series.episodes ?? 0;

        return (
            <tr key={id} className={styles.row}>
                <td className={styles.itemImg}>
                    <Image 
                        src={series.imageUrl || '/placeholder.svg'} 
                        alt={series.title} 
                        height={200} 
                        width={200} 
                        className={styles.image} 
                    />
                </td>

                <td className={styles.itemTitle}>
                    <Link href={`/series/${series.id}`}>
                        {series.title}
                    </Link>
                </td>

                <td className={styles.itemScore}>TODO</td>

                <td className={styles.itemProgress}>
                    {showPlus ? (
                        <div className={styles.progressWrapper}>
                            <SvgPlusSolid 
                                className={styles.plus} 
                                onClick={() => handlePlusClick(id)}
                                style={{ cursor: "pointer" }}
                            />
                            <span>{progress} / {total}</span>
                        </div>
                    ) : (
                        <span>{progress} / {total}</span>
                    )}
                </td>

                <td className={styles.itemType}>{series.type}</td>
            </tr>
        );
    };

    return (
        <div className={styles.page}>
            <h2 className={styles.listType}>Planning</h2>
            {planningSeries.length === 0 ? (
                <p className={styles.noEntries}>No entries found</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.header}>
                            <th className={styles.cover}></th>
                            <th className={styles.title}>Title</th>
                            <th className={styles.score}>Score</th>
                            <th className={styles.progress}>Progress</th>
                            <th className={styles.type}>Type</th>
                        </tr>
                    </thead>
                    <tbody className={styles.body}>
                        {planningSeries.map(id => renderRow(id, true))}
                    </tbody>
                </table>
            )}

            <h2 className={styles.listType}>Current</h2>
            {currentSeries.length === 0 ? (
                <p className={styles.noEntries}>No entries found</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.header}>
                            <th className={styles.cover}></th>
                            <th className={styles.title}>Title</th>
                            <th className={styles.score}>Score</th>
                            <th className={styles.progress}>Progress</th>
                            <th className={styles.type}>Type</th>
                        </tr>
                    </thead>
                    <tbody className={styles.body}>
                        {currentSeries.map(id => renderRow(id, true))}
                    </tbody>
                </table>
            )}

            <h2 className={styles.listType}>Completed</h2>
            {completedSeries.length === 0 ? (
                <p className={styles.noEntries}>No entries found</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.header}>
                            <th className={styles.cover}></th>
                            <th className={styles.title}>Title</th>
                            <th className={styles.score}>Score</th>
                            <th className={styles.progress}>Progress</th>
                            <th className={styles.type}>Type</th>
                        </tr>
                    </thead>
                    <tbody className={styles.body}>
                        {completedSeries.map(id => renderRow(id, false))}
                    </tbody>
                </table>
            )}
        </div>
    );
}