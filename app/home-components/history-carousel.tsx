'use client';

import { useState, useEffect } from 'react';
import { SvgChevronLeftSolid, SvgChevronRightSolid } from '../components/icons/fontawesome';
import styles from './history-carousel.module.css';

type Card = {
    id: number;
    title: string;
    summary: string;
    image: string;
    link: string;
};

const cards: Card[] = [
    {
        id: 1,
        title: "The Old Republic",
        summary: "A multi-thousand year era full of epic conflicts and great stories.",
        image: "/history/duel-of-tython.jpg",
        link: "/history/the-old-republic"
    },
    {
        id: 2,
        title: "Fall Of The Republic",
        summary: "The ascension of Palpatine, the fall of the Republic, and the reign of the Empire.",
        image: "/history/duel-of-the-fates.jpg",
        link: "/history/fall-of-the-republic"
    },
    {
        id: 3,
        title: "High Republic",
        summary: "An era of prosperity and flourishing, with the nomadic Nihil disturbing the peace of the galaxy.",
        image: "/history/republic-fair.jpg",
        link: "/history/high-republic"
    },
];

export default function HistoryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const total = cards.length;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % total);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, total]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % total);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
        setIsAutoPlaying(false);
    };

    const getVisibleCards = () => {
        const prev = (currentIndex - 1 + total) % total;
        const next = (currentIndex + 1) % total;
        return [
            cards[prev],
            cards[currentIndex],
            cards[next]
        ];
    };

    const visibleCards = getVisibleCards();

    return (
        <div className={styles.container}>
            <div className={styles.carouselWrapper}>
                <div className={styles.slidesTrack}>
                    {visibleCards.map((card, idx) => {
                        const isCenter = idx === 1;

                        return (
                            <div 
                                key={`${card.id}-${currentIndex}`} 
                                className={`${styles.card} ${isCenter ? styles.centerCard : ''}`}
                            >
                                <div 
                                    className={styles.cardImage}
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className={styles.overlay} />
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.title}>{card.title}</h3>
                                    <p className={styles.summary}>{card.summary}</p>
                                    
                                    <a 
                                        href={card.link} 
                                        className={styles.seeMore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See more
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <button onClick={prevSlide} className={`${styles.navButton} ${styles.left}`} aria-label="Previous">
                <SvgChevronLeftSolid className={styles.chevron} />
            </button>

            <button onClick={nextSlide} className={`${styles.navButton} ${styles.right}`} aria-label="Next">
                <SvgChevronRightSolid className={styles.chevron} />
            </button>
        </div>
    );
}