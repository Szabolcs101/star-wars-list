import { notFound } from 'next/navigation';
import styles from '../../css-modules/page-detailed.module.css';
import Image from 'next/image';
import CardItemWide from '../../components/card-item/card-item-wide';
import Link from 'next/link';
import ListMenu from '@/app/components/menu/menu';
import FavoriteToggle from '@/app/components/toggle/toggle';
import RatingSection from '@/app/components/rating/rating-section';
import UserScore from '@/app/components/rating/user-score';
import { getGameById, getGamesByIds } from '@/lib/db/queries/games';

export default async function GamesPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const game = await getGameById(id);

    if (!game) {
        notFound();
    }

    const relatedItems = await getGamesByIds(game.relations.map(r => r.relatedId));

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <section className={styles.headerRow}>
                    <Image src={game.imageUrl ?? '/placeholder.svg'} alt={game.title} height={327} width={218} className={styles.image} />
                    <div className={styles.headerCol}>
                        <h2 className={styles.title}>{game.title}</h2>
                        <p className={styles.description}>{game.description}</p>
                        <div className={styles.rateRow}>
                            <p>Rate: </p>
                            <UserScore itemId={id} contentTable='games'/>
                        </div>
                    </div>
                </section>
            </div>
            <section className={styles.listSection}>
                <ListMenu itemId={id} contentTable='games'/>
                <FavoriteToggle />
            </section>
            <section className={styles.bodySection}>
                <section className={styles.detailedSection}>
                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Format</h4>
                        <p className={styles.detailText}>{game.type}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Status</h4>
                        <p className={styles.detailText}>{game.status}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Release start</h4>
                        <p className={styles.detailText}>{game.releaseDate}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Platforms</h4>
                        <p className={styles.detailText}>{game.platforms}</p>
                    </div>

                    <RatingSection itemId={id} />

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Genre</h4>
                        <p className={styles.detailText}>{game.genre}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Publisher</h4>
                        <p className={styles.detailText}>{game.publisher}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Developer</h4>
                        <p className={styles.detailText}>{game.developer}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Canon status</h4>
                        <p className={styles.detailText}>{game.canonStatus}</p>
                    </div>
                </section>

                <section className={styles.rightDetailSection}>
                    <section className={styles.relations}>
                        <h4 className={styles.title}>Relations</h4>
                        <div className={styles.relationList}>
                            {game.relations.map(relation => {
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
                </section>
            </section>
        </div>
    )
}
