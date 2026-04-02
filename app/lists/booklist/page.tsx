"use client";
import Link from "next/link";
import { useAuth } from "../../context/auth-context";
import { useLists } from "../../context/list-context";
import Image from "next/image";
import styles from '../mylist.module.css';
import bookData from "../../../data/books.json";
import { SvgPlusSolid } from "@/app/components/icons/fontawesome";

export default function MyBooksPage() {
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

    const getBook = (id: string) => bookData.find((b: any) => b.id === id);

    const planningBooks = planningIds.filter(id => {
        const b = getBook(id);
        return b?.type === "book" || b?.type === "comic";
    });

    const currentBooks = currentIds.filter(id => {
        const b = getBook(id);
        return b?.type === "book" || b?.type === "comic";
    });

    const completedBooks = completedIds.filter(id => {
        const b = getBook(id);
        return b?.type === "book" || b?.type === "comic";
    });

    const renderRow = (id: string, showPlus: boolean) => {
        const book = getBook(id);
        if (!book) return null;

        const entry = getEntry(id);
        const progress = entry?.progress ?? 0;
        const total = book.pageNumber ?? 0;

        return (
            <tr key={id} className={styles.row}>
                <td className={styles.itemImg}>
                    <Image 
                        src={book.imageUrl || '/placeholder.svg'} 
                        alt={book.title} 
                        height={200} 
                        width={200} 
                        className={styles.image} 
                    />
                </td>

                <td className={styles.itemTitle}>
                    <Link href={`/books/${book.id}`}>
                        {book.title}
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

                <td className={styles.itemType}>{book.type}</td>
            </tr>
        );
    };

    return (
        <div className={styles.page}>
            <h2 className={styles.listType}>Planning</h2>
            {planningBooks.length === 0 ? (
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
                        {planningBooks.map(id => renderRow(id, true))}
                    </tbody>
                </table>
            )}

            <h2 className={styles.listType}>Current</h2>
            {currentBooks.length === 0 ? (
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
                        {currentBooks.map(id => renderRow(id, true))}
                    </tbody>
                </table>
            )}

            <h2 className={styles.listType}>Completed</h2>
            {completedBooks.length === 0 ? (
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
                        {completedBooks.map(id => renderRow(id, false))}
                    </tbody>
                </table>
            )}
        </div>
    );
}