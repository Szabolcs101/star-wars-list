'use client';
import { useMemo, useEffect, useState } from 'react';
import CardItem from '../components/card-item/card-item';
import Link from 'next/link';
import styles from './random-card-row.module.css';

type ProductType = 'movies' | 'series' | 'games' | 'books';

interface Item {
    id: string;
    title: string;
    imageUrl: string;
}

interface RandomCardRowProps {
    type: ProductType;
    count?: number;
    title: string;
    link: string;
}

export default function RandomCardRow({ type, count = 6, title, link }: RandomCardRowProps) {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch(`/api/random/${type}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setItems(data);
            });
    }, [type]);
    
    const randomCards = useMemo(() => {
        return [...items].sort(() => Math.random() - 0.5).slice(0, count);
    }, [items, count]);

    return (
        <div>
            <div className={styles.titleRow}>
                {title && <h2 className={styles.title}>{title}</h2>}
                <Link href={link} className={styles.link}>View All</Link>
            </div>
            <div className={styles.gridContainer}>
                {randomCards.map(item => (
                    <CardItem
                        key={item.id}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        href={type}
                    />
                ))}
            </div>
        </div>
    );
}