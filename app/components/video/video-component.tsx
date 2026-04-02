'use client';
import { useState } from 'react';
import styles from './video-component.module.css'
import { SvgYoutubeSolid } from '../icons/fontawesome';

export default function VideoComponent({ videoId, title }: { videoId: string; title: string }) {
    const [play, setPlay] = useState(false);
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div className={styles.wrapper}>
            {!play ? (
                <button
                    className={styles.thumbnailButton}
                    onClick={() => setPlay(true)}
                    aria-label={`Play ${title}`}
                >
                    <img
                        src={thumbnail}
                        alt={title}
                        className={styles.thumbnailImage}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.playIconContainer}>
                            <SvgYoutubeSolid className={styles.playIcon} />
                        </div>
                    </div>
                </button>
            ) : (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`}
                    className={styles.iframe}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
}