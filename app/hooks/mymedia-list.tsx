"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SvgPlusSolid } from "@/app/components/icons/fontawesome";
import styles from '../lists/mylist.module.css';
import { useAuth } from "../context/auth-context";
import { ItemStatus, useLists } from "../context/list-context";
import UserScore from "../components/rating/user-score";
import ListItemDialog from "../components/menu/list-item-menu/dialog/list-item-dialog";
import { getContentTable } from "@/lib/utils/content-table";

type MediaItem = {
    id: string;
    title: string;
    imageUrl?: string;
    type?: string;
    pageNumber?: number;
    episodes?: number;
    total?: number;
};

type Props = {
    data: MediaItem[];
    href: string;
    allowedTypes: string[];
    getTotal?: (item: MediaItem) => number;
};

const STATUS_SECTIONS: { label: string; status: NonNullable<ItemStatus>; showPlus: boolean }[] = [
    { label: 'Planning', status: 'planned', showPlus: true },
    { label: 'Current', status: 'current', showPlus: true },
    { label: 'Completed', status: 'finished', showPlus: false },
];

export default function MyMediaList({
    data,
    href,
    allowedTypes,
    getTotal = () => 1,
}: Props) {
    const { user, isLoading: authLoading } = useAuth();
    const { getItemsByStatus, getEntry, updateProgress, loading: listsLoading } = useLists();

    const [dialogItem, setDialogItem] = useState<MediaItem | null>(null);
    const [updatingIds, setUpdatingIds] = useState<Set<string>>(new Set());

    if (authLoading || listsLoading) return <div>Loading...</div>;
    if (!user) return <div className={styles.noList}>Please log in to see your lists.</div>;

    const getItem = (id: string) => data.find(item => item.id === id);

    const getFilteredIds = (status: NonNullable<ItemStatus>) =>
        getItemsByStatus(status).filter(id => {
            const item = getItem(id);
            return item && allowedTypes.includes(item.type ?? '');
        });

    const handleUpdateProgress = async (id: string) => {
        if (updatingIds.has(id)) return;
        const item = getItem(id);
        if (!item) return;

        setUpdatingIds(prev => new Set(prev).add(id));

        try {
            await updateProgress(id, getContentTable(item.type));
        } catch (err) {
            console.error("Failed to update progress", err);
        } finally {
            setUpdatingIds(prev => {
                const newSet = new Set(prev);
                newSet.delete(id);
                return newSet;
            });
        }
    };

    const renderDesktopRow = (id: string, showPlus: boolean) => {
        const item = getItem(id);
        if (!item) return null;

        const entry = getEntry(id);
        const progress = entry?.progress ?? 0;
        const total = item.total ?? getTotal(item);
        const isUpdating = updatingIds.has(id);

        return (
            <tr key={id} className={styles.desktopRow}>
                <td className={styles.itemImg}>
                    <Image
                        src={item.imageUrl || '/placeholder.svg'}
                        alt={item.title}
                        height={200}
                        width={200}
                        className={styles.image}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setDialogItem(item)}
                    />
                </td>
                <td className={styles.itemTitle}>
                    <Link href={`/${href}/${item.id}`}>{item.title}</Link>
                </td>
                <td className={styles.itemScore}>
                    <UserScore itemId={id} contentTable={getContentTable(item.type)} />
                </td>
                <td className={styles.itemProgress}>
                    {showPlus ? (
                        <div className={styles.progressWrapper}>
                            <SvgPlusSolid
                                className={styles.plus}
                                onClick={() => handleUpdateProgress(id)}
                                style={{
                                    cursor: isUpdating ? 'not-allowed' : 'pointer',
                                    opacity: isUpdating ? 0.6 : 1
                                }}
                            />
                            <span>{progress} / {total}</span>
                        </div>
                    ) : (
                        <span>{progress} / {total}</span>
                    )}
                </td>
                <td className={styles.itemType}>{item.type}</td>
            </tr>
        );
    };

    const renderMobileRow = (id: string, showPlus: boolean) => {
        const item = getItem(id);
        if (!item) return null;
        const entry = getEntry(id);
        const progress = entry?.progress ?? 0;
        const total = item.total ?? getTotal(item);
        const isUpdating = updatingIds.has(id);

        return (
            <li key={id} className={styles.mobileRow}>
                <Image
                    src={item.imageUrl || '/placeholder.svg'}
                    alt={item.title}
                    height={200}
                    width={200}
                    className={styles.mobileImage}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setDialogItem(item)}
                />
                <div className={styles.mobileContent}>
                    <Link href={`/${href}/${item.id}`} className={styles.mobileTitle}>
                        {item.title}
                    </Link>
                    <div className={styles.mobileMeta}>
                        <UserScore itemId={id} contentTable={getContentTable(item.type)} />
                        <div className={styles.progressWrapper}>
                            {showPlus && (
                                <SvgPlusSolid
                                    className={styles.plus}
                                    onClick={() => handleUpdateProgress(id)}
                                    style={{
                                        cursor: isUpdating ? 'not-allowed' : 'pointer',
                                        opacity: isUpdating ? 0.6 : 1
                                    }}
                                />
                            )}
                            <span>{progress} / {total}</span>
                        </div>
                    </div>
                </div>
            </li>
        );
    };

    return (
        <div className={styles.page}>
            {STATUS_SECTIONS.map(({ label, status, showPlus }) => {
                const ids = getFilteredIds(status);
                return (
                    <section key={status}>
                        <h2 className={styles.listType}>{label}</h2>

                        {ids.length === 0 ? (
                            <p className={styles.noEntries}>No entries found</p>
                        ) : (
                            <>
                                <table className={`${styles.table} ${styles.desktopTable}`}>
                                    <thead>
                                        <tr className={styles.header}>
                                            <th className={styles.cover}></th>
                                            <th className={styles.title}>Title</th>
                                            <th className={styles.score}>Score</th>
                                            <th className={styles.progress}>Progress</th>
                                            <th className={styles.type}>Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ids.map(id => renderDesktopRow(id, showPlus))}
                                    </tbody>
                                </table>

                                <ul className={styles.mobileList}>
                                    {ids.map(id => renderMobileRow(id, showPlus))}
                                </ul>
                            </>
                        )}
                    </section>
                );
            })}

            {dialogItem && (
                <ListItemDialog
                    item={dialogItem}
                    open={!!dialogItem}
                    onClose={() => setDialogItem(null)}
                />
            )}
        </div>
    );
}