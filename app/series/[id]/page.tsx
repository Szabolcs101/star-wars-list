import showData from '../../../data/series.json';
import charactersData from '../../../data/characters.json';
import { notFound } from 'next/navigation';
import styles from '../../css-modules/page-detailed.module.css';
import Image from 'next/image';
import CardItemWide from '../../components/card-item/card-item-wide';
import VideoComponent from '../../components/video/video-component';
import Link from 'next/link';
import ListMenu from '@/app/components/menu/menu';
import FavoriteToggle from '@/app/components/toggle/toggle';
import RatingSection from '@/app/components/rating/rating-section';
import UserScore from '@/app/components/rating/user-score';

interface Series {
    id: string;
    type: string;
    title: string;
    startDate: string;
    endDate: string;
    status: string;
    genre: string;
    director: string;
    runtime: number | string;
    episodes: number;
    canonStatus: string;
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

export default async function SeriesPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const series = showData.find((s: Series) => s.id === id);

    const videoId = series?.trailerUrl.split('v=')[1]?.split('&')[0] || '';

    if (!series) {
        notFound();
    }

    const getRelatedEntity = (relatedId: string) => {
        return showData.find((item) => item.id === relatedId) as Series | undefined;
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <section className={styles.headerRow}>
                    <Image src={series.imageUrl} alt={series.title} height={327} width={218} className={styles.image} />
                    <div className={styles.headerCol}>
                        <h2 className={styles.title}>{series.title}</h2>
                        <p className={styles.description}>{series.description}</p>
                        <div className={styles.rateRow}>
                            <p>Rate: </p>
                            <UserScore itemId={id} />
                        </div>
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
                        <p className={styles.detailText}>{series.type}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Episodes</h4>
                        <p className={styles.detailText}>{series.episodes}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Runtime</h4>
                        <p className={styles.detailText}>{series.runtime}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Status</h4>
                        <p className={styles.detailText}>{series.status}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Release start</h4>
                        <p className={styles.detailText}>{series.startDate}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Release end</h4>
                        <p className={styles.detailText}>{series.endDate}</p>
                    </div>

                    <RatingSection itemId={id} />

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Genre</h4>
                        <p className={styles.detailText}>{series.genre}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Director</h4>
                        <p className={styles.detailText}>{series.director}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Canon status</h4>
                        <p className={styles.detailText}>{series.canonStatus}</p>
                    </div>
                </section>

                <section className={styles.rightDetailSection}>
                    <section className={styles.relations}>
                        <h4 className={styles.title}>Relations</h4>
                        <div className={styles.relationList}>
                            {series.relations.map(relation => {
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
                            {series.characters.map(characterId => {
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
                                title={series.title}
                            />
                        ) : <div>No avaliable trailer for this page.</div>}
                    </section>
                </section>
            </section>
        </div>
    )
}
