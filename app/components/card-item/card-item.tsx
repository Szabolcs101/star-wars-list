import React from 'react'
import Image from 'next/image';
import styles from './card-item.module.css'
import Link from 'next/link';

interface CardItemProps {
    id: string;
    imageUrl: string;
    title: string;
    href: string;
}

export default function CardItem({ id, imageUrl, title, href }: CardItemProps) {
    return (
        <Link href={`/${href}/${id}`}>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.cardImg}
                        src={imageUrl}
                        alt={title}
                        width={218}
                        height={327}
                    />
                </div>
                <h4 className={styles.title}>
                    {title}
                </h4>
            </div>
        </Link>
    )
}
