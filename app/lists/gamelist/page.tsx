"use client";
import Link from "next/link";
import { useAuth } from "../../context/auth-context";
import { useLists } from "../../context/list-context";
import Image from "next/image";
import styles from '../mylist.module.css';
import gameData from "../../../data/games.json";
import { SvgPlusSolid } from "@/app/components/icons/fontawesome";

export default function MyGamesPage() {
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

    const getGame = (id: string) => gameData.find((g: any) => g.id === id);

    const planningGames = planningIds.filter(id => {
        const g = getGame(id);
        return g?.type === "video game";
    });

    const currentGames = currentIds.filter(id => {
        const g = getGame(id);
        return g?.type === "video game";
    });

    const completedGames = completedIds.filter(id => {
        const g = getGame(id);
        return g?.type === "video game";
    });

    const renderRow = (id: string, showPlus: boolean) => {
        const game = getGame(id);
        if (!game) return null;

        const entry = getEntry(id);
        const progress = entry?.progress ?? 0;
        const total = 1;

        return (
            <tr key={id} className={styles.row}>
                <td className={styles.itemImg}>
                    <Image
                        src={game.imageUrl || '/placeholder.svg'}
                        alt={game.title}
                        height={200}
                        width={200}
                        className={styles.image}
                    />
                </td>

                <td className={styles.itemTitle}>
                    <Link href={`/games/${game.id}`}>
                        {game.title}
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

                <td className={styles.itemType}>{game.type}</td>
            </tr>
        );
    };

    return (
        <div className={styles.page}>
            <h2 className={styles.listType}>Planning</h2>
            {planningGames.length === 0 ? (
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
                        {planningGames.map(id => renderRow(id, true))}
                    </tbody>
                </table>
            )}

            <h2 className={styles.listType}>Current</h2>
            {currentGames.length === 0 ? (
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
                        {currentGames.map(id => renderRow(id, true))}
                    </tbody>
                </table>
            )}

            <h2 className={styles.listType}>Completed</h2>
            {completedGames.length === 0 ? (
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
                        {completedGames.map(id => renderRow(id, false))}
                    </tbody>
                </table>
            )}
        </div>
    );
}