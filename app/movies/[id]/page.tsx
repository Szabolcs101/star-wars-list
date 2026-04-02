import React from 'react';
import showData from '../../../data/shows.json';
import charactersData from '../../../data/characters.json';
import { notFound } from 'next/navigation';
import styles from './movie.module.css'
import Image from 'next/image';
import CardItemWide from '../../components/card-item/card-item-wide';
import VideoComponent from '../../components/video/video-component';
import Link from 'next/link';
import FavoriteToggle from '@/app/components/toggle/toggle';
import ListMenu from '@/app/components/menu/menu';

interface Movie {
    id: string;
    type: string;
    title: string;
    releaseDate: string;
    status: string;
    genre: string;
    director: string;
    runtime: number | string;
    imageUrl: string;
    trailerUrl: string;
    characters: string[];
    relations: Relation[];
    description: string;
}

interface Relation {
    relatedId: string;
    type: string;
}

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = showData.find((m: Movie) => m.id === id);

    const videoId = movie?.trailerUrl.split('v=')[1]?.split('&')[0] || '';

    if (!movie) {
        notFound();
    }

    const getRelatedEntity = (relatedId: string) => {
        return showData.find((item) => item.id === relatedId) as Movie | undefined;
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <section className={styles.headerRow}>
                    <Image src={movie.imageUrl} alt={movie.title} height={327} width={218} className={styles.image} />
                    <div className={styles.headerCol}>
                        <h2 className={styles.title}>{movie.title}</h2>
                        <p className={styles.description}>{movie.description}</p>
                    </div>
                </section>
            </div>
            <section className={styles.listSection}>
                <ListMenu itemId={id} />
                <FavoriteToggle />
            </section>
            <section className={styles.bodySection}>
                <section className={styles.detailedSection}>
                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Format</h4>
                        <p className={styles.detailText}>{movie.type}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Runtime</h4>
                        <p className={styles.detailText}>{movie.runtime}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Status</h4>
                        <p className={styles.detailText}>{movie.status}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Release</h4>
                        <p className={styles.detailText}>{movie.releaseDate}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Genre</h4>
                        <p className={styles.detailText}>{movie.genre}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Director</h4>
                        <p className={styles.detailText}>{movie.director}</p>
                    </div>
                </section>

                <section className={styles.rightDetailSection}>
                    <section className={styles.relations}>
                        <h4 className={styles.title}>Relations</h4>
                        <div className={styles.relationList}>
                            {movie.relations.map(relation => {
                                const related = getRelatedEntity(relation.relatedId);

                                if (!related) {
                                    return null;
                                }

                                return (
                                    <Link href={relation.relatedId} key={relation.relatedId}>
                                        <CardItemWide
                                            key={relation.relatedId}
                                            id={relation.relatedId}
                                            imageUrl={related.imageUrl}
                                            title={related.title}
                                            status={related.status}
                                            relationType={relation.type}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    </section>

                    <section className={styles.characters}>
                        <h4 className={styles.title}>Characters</h4>
                        <div className={styles.relationList}>
                            {movie.characters.map(characterId => {
                                const character = charactersData.find(c => c.id === characterId);

                                if (!character) return null;

                                return (
                                    <CardItemWide
                                        key={character.id}
                                        id={character.id}
                                        imageUrl={character.imageurl}
                                        name={character.name}
                                    />
                                )
                            })}
                        </div>
                    </section>

                    <section className={styles.trailerSection}>
                        <h4 className={styles.title}>Trailer</h4>

                        {videoId ? (
                            <VideoComponent
                                videoId={videoId}
                                title={movie.title}
                            />
                        ) : <div>No avaliable trailer for this page.</div>}
                    </section>
                </section>
            </section>
        </div>
    )
}
