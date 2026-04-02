'use client';

import { useState, useEffect } from 'react';
import { SvgChevronLeftSolid, SvgChevronRightSolid } from '../components/icons/fontawesome';
import styles from './carousel.module.css';

const slides = [
    {
        id: 1,
        title: "An easy-to-use app",
        description: "Browse between various Star Wars works like movies, series, books, or games",
        image: "/backgrounds/background1.jpg" 
    },
    {
        id: 2,
        title: "Create your own lists",
        description: "Create lists from all kind of works and keep track of your progress",
        image: "/backgrounds/background2.jpg"
    },
    {
        id: 3,
        title: "Read about the history of the Star Wars universe",
        description: "You can read summaries from both the Legends and Canon timelines of the Star Wars universe",
        image: "/backgrounds/background3.jpg"
    } 
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.slidesWrapper}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div 
                        key={slide.id} 
                        className={styles.slide}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className={styles.gradientOverlay} />

                        <div className={styles.content}>
                            <div className={styles.contentInner}>
                                <h2 className={styles.title}>
                                    {slide.title}
                                </h2>
                                <p className={styles.description}>
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className={`${styles.navButton} ${styles.left}`}
                aria-label="Previous slide"
            >
                <SvgChevronLeftSolid className={styles.chevron} />
            </button>

            <button
                onClick={nextSlide}
                className={`${styles.navButton} ${styles.right}`}
                aria-label="Next slide"
            >
                <SvgChevronRightSolid className={styles.chevron} />
            </button>

            <div className={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className={styles.counter}>
                {currentSlide + 1} / {slides.length}
            </div>
        </div>
    );
}