'use client';
import { useMemo } from 'react';
import CardItem from '../components/card-item/card-item';
import movies from '../../data/shows.json';
import series from '../../data/series.json';
import games from '../../data/games.json';
import books from '../../data/books.json';
import Link from 'next/link';
import styles from './random-card-row.module.css'

const dataSources = {
    movies,
    series,
    games,
    books,
} as const;

type ProductType = keyof typeof dataSources;

interface RandomCardRowProps {
    type: ProductType;
    count?: number;
    title: string;
    link: string
}

export default function RandomCardRow({
    type,
    count = 6,
    title,
    link
}: RandomCardRowProps) {

    const randomCards = useMemo(() => {
        const items = dataSources[type];

        const shuffled = [...items]
            .sort(() => Math.random() - 0.5)
            .slice(0, count);

        return shuffled;
    }, [type, count]);

    return (
        <div>
            <div className={styles.titleRow}>
                {title && <h2 className={styles.title}>{title}</h2>}
                <Link href={link} className={styles.link}>View All</Link>
            </div>

            <div className={styles.gridContainer}>
                {randomCards.map((item: any) => (
                    <CardItem
                        key={item.id}
                        id={item.id}
                        imageUrl={item.imageUrl || item.poster || item.cover || ''}
                        title={item.title || item.name}
                        href={type}
                    />
                ))}
            </div>
        </div>
    );
}