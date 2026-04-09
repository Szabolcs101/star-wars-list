"use client";
import Link from "next/link";
import Image from "next/image";
import { SvgPlusSolid } from "@/app/components/icons/fontawesome";
import styles from '../lists/mylist.module.css';
import { useAuth } from "../context/auth-context";
import { ItemStatus, useLists } from "../context/list-context";
import UserScore from "../components/rating/user-score";

type MediaItem = {
    id: string;
    title: string;
    imageUrl?: string;
    type?: string;
    pageNumber?: number;
    episodes?: number;
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

function ListTable({ ids, showPlus, renderRow }: {
    ids: string[];
    showPlus: boolean;
    renderRow: (id: string, showPlus: boolean) => React.ReactNode;
}) {
    if (ids.length === 0) return <p className={styles.noEntries}>No entries found</p>;

    return (
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
                {ids.map(id => renderRow(id, showPlus))}
            </tbody>
        </table>
    );
}

export default function MyMediaList({
    data,
    href,
    allowedTypes,
    getTotal = () => 1,
}: Props) {
    const { user, isLoading: authLoading } = useAuth();
    const { getItemsByStatus, getEntry, updateProgress } = useLists();

    if (authLoading) return <div>Loading user...</div>;
    if (!user) return <div className={styles.noList}>Please log in to see your lists.</div>;

    const getItem = (id: string) => data.find(item => item.id === id);

    const getFilteredIds = (status: NonNullable<ItemStatus>) =>
        getItemsByStatus(status).filter(id => {
            const item = getItem(id);
            return item && allowedTypes.includes(item.type ?? '');
        });

    const renderRow = (id: string, showPlus: boolean) => {
        const item = getItem(id);
        if (!item) return null;

        const entry = getEntry(id);
        const progress = entry?.progress ?? 0;
        const total = getTotal(item);

        return (
            <tr key={id} className={styles.row}>
                <td className={styles.itemImg}>
                    <Image
                        src={item.imageUrl || '/placeholder.svg'}
                        alt={item.title}
                        height={200}
                        width={200}
                        className={styles.image}
                    />
                </td>
                <td className={styles.itemTitle}>
                    <Link href={`/${href}/${item.id}`}>{item.title}</Link>
                </td>
                <td className={styles.itemScore}>
                    <UserScore itemId={id} />
                </td>
                <td className={styles.itemProgress}>
                    {showPlus ? (
                        <div className={styles.progressWrapper}>
                            <SvgPlusSolid
                                className={styles.plus}
                                onClick={() => updateProgress(id)}
                                style={{ cursor: 'pointer' }}
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

    return (
        <div className={styles.page}>
            {STATUS_SECTIONS.map(({ label, status, showPlus }) => (
                <section key={status}>
                    <h2 className={styles.listType}>{label}</h2>
                    <ListTable
                        ids={getFilteredIds(status)}
                        showPlus={showPlus}
                        renderRow={renderRow}
                    />
                </section>
            ))}
        </div>
    );
}