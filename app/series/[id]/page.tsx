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
import { getSeriesById, getSeriesByIds } from '@/lib/db/queries/series';

export default async function SeriesPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const series = await getSeriesById(id);

    if (!series) {
        notFound();
    }

    const videoId = series.trailerUrl?.split('v=')[1]?.split('&')[0] || '';

    const relatedItems = await getSeriesByIds(series.relations.map(r => r.relatedId));

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <section className={styles.headerRow}>
                    <Image src={series.imageUrl ?? '/placeholder.svg'} alt={series.title} height={327} width={218} className={styles.image} />
                    <div className={styles.headerCol}>
                        <h2 className={styles.title}>{series.title}</h2>
                        <p className={styles.description}>{series.description}</p>
                        <div className={styles.rateRow}>
                            <p>Rate: </p>
                            <UserScore itemId={id} contentTable="series"/>
                        </div>
                    </div>
                </section>
            </div>
            <section className={styles.listSection}>
                <ListMenu itemId={id} contentTable='series'/>
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
                                const related = relatedItems.find(item => item.id === relation.relatedId);

                                if (!related) return null;

                                return (
                                    <Link href={relation.relatedId} key={relation.relatedId}>
                                        <CardItemWide
                                            key={relation.relatedId}
                                            id={relation.relatedId}
                                            imageUrl={related.imageUrl ?? '/placeholder.svg'}
                                            title={related.title}
                                            status={related.status ?? ''}
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
                            {series.characters.map(character => (
                                <CardItemWide
                                    key={character.id}
                                    id={character.id}
                                    imageUrl={character.imageUrl ?? '/placeholder.svg'}
                                    name={character.name}
                                />
                            ))}
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
