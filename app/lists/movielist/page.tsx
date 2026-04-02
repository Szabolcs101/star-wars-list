"use client";
import Link from "next/link";
import { useAuth } from "../../context/auth-context";
import { useLists } from "../../context/list-context";
import Image from "next/image";
import styles from '../mylist.module.css';
import showsData from "../../../data/shows.json";
import { SvgPlusSolid } from "@/app/components/icons/fontawesome";

export default function MyMoviesPage() {
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

    const getMovie = (id: string) => showsData.find((m: any) => m.id === id);

    const planningMovies = planningIds.filter(id => {
        const m = getMovie(id);
        return m?.type === "film";
    });

    const currentMovies = currentIds.filter(id => {
        const m = getMovie(id);
        return m?.type === "film";
    });

    const completedMovies = completedIds.filter(id => {
        const m = getMovie(id);
        return m?.type === "film";
    });

    const renderRow = (id: string, showPlus: boolean) => {
        const movie = getMovie(id);
        if (!movie) return null;

        const entry = getEntry(id);
        const progress = entry?.progress ?? 0;
        const total = 1;

        return (
            <tr key={id} className={styles.row}>
                <td className={styles.itemImg}>
                    <Image 
                        src={movie.imageUrl || '/placeholder.svg'} 
                        alt={movie.title} 
                        height={200} 
                        width={200} 
                        className={styles.image} 
                    />
                </td>

                <td className={styles.itemTitle}>
                    <Link href={`/movies/${movie.id}`}>
                        {movie.title}
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

                <td className={styles.itemType}>{movie.type}</td>
            </tr>
        );
    };

    return (
        <div className={styles.page}>
            <h2 className={styles.listType}>Planning</h2>
            {planningMovies.length === 0 ? (
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
                        {planningMovies.map(id => renderRow(id, true))}
                    </tbody>
                </table>
            )}

            <h2 className={styles.listType}>Current</h2>
            {currentMovies.length === 0 ? (
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
                        {currentMovies.map(id => renderRow(id, true))}
                    </tbody>
                </table>
            )}

            <h2 className={styles.listType}>Completed</h2>
            {completedMovies.length === 0 ? (
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
                        {completedMovies.map(id => renderRow(id, false))}
                    </tbody>
                </table>
            )}
        </div>
    );
}