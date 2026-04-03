import showData from '../../../data/games.json';
import { notFound } from 'next/navigation';
import styles from '../../css-modules/page-detailed.module.css';
import Image from 'next/image';
import CardItemWide from '../../components/card-item/card-item-wide';
import Link from 'next/link';
import ListMenu from '@/app/components/menu/menu';
import FavoriteToggle from '@/app/components/toggle/toggle';

interface Games {
    id: string;
    type: string;
    title: string;
    releaseDate: string;
    status: string;
    genre: string;
    publisher: string;
    developer: string,
    canonStatus: string;
    imageUrl: string;
    platforms: string[];
    relations: Relation[];
    description: string;
}

interface Relation {
    relatedId: string;
    type: string;
}

export default async function GamesPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const game = showData.find((g: Games) => g.id === id);

    if (!game) {
        notFound();
    }

    const getRelatedEntity = (relatedId: string) => {
        return showData.find((item) => item.id === relatedId) as Games | undefined;
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <section className={styles.headerRow}>
                    <Image src={game.imageUrl} alt={game.title} height={327} width={218} className={styles.image} />
                    <div className={styles.headerCol}>
                        <h2 className={styles.title}>{game.title}</h2>
                        <p className={styles.description}>{game.description}</p>
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
                        <h4 className={styles.detailTitle}>Release end</h4>
                        <p className={styles.detailText}>{game.platforms}</p>
                    </div>

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
                        <p>TODO</p>
                    </section>
                </section>
            </section>
        </div>
    )
}
