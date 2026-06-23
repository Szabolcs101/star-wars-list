import { notFound } from 'next/navigation';
import styles from '../../css-modules/page-detailed.module.css';
import Image from 'next/image';
import CardItemWide from '../../components/card-item/card-item-wide';
import Link from 'next/link';
import ListMenu from '@/app/components/menu/menu';
import FavoriteToggle from '@/app/components/toggle/toggle';
import RatingSection from '@/app/components/rating/rating-section';
import UserScore from '@/app/components/rating/user-score';
import { getBookById, getBookByIds } from '@/lib/db/queries/books';

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const book = await getBookById(id);

    if (!book) {
        notFound();
    }

    const relatedItems = await getBookByIds(book.relations.map(r => r.relatedId))

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <section className={styles.headerRow}>
                    <Image src={book.imageUrl || '/placeholder.svg'} alt={book.title} height={327} width={218} className={styles.image} />
                    <div className={styles.headerCol}>
                        <h2 className={styles.title}>{book.title}</h2>
                        <p className={styles.description}>{book.description}</p>
                        <div className={styles.rateRow}>
                            <p>Rate: </p>
                            <UserScore itemId={id} contentTable='books' />
                        </div>
                    </div>
                </section>
            </div>
            <section className={styles.listSection}>
                <ListMenu itemId={id} contentTable='books'/>
                <FavoriteToggle itemId={id} contentTable = 'books'/>
            </section>
            <section className={styles.bodySection}>
                <section className={styles.detailedSection}>
                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Format</h4>
                        <p className={styles.detailText}>{book.type}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Status</h4>
                        <p className={styles.detailText}>{book.status}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Release</h4>
                        <p className={styles.detailText}>{book.releaseDate}</p>
                    </div>

                    <RatingSection itemId={id} />

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Genre</h4>
                        <p className={styles.detailText}>{book.genre}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Canon status</h4>
                        <p className={styles.detailText}>{book.canonStatus}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Publisher</h4>
                        <p className={styles.detailText}>{book.publisher}</p>
                    </div>

                    <div className={styles.detail}>
                        <h4 className={styles.detailTitle}>Pages</h4>
                        <p className={styles.detailText}>{book.pageNumber}</p>
                    </div>
                </section>

                <section className={styles.rightDetailSection}>
                    <section className={styles.relations}>
                        <h4 className={styles.title}>Relations</h4>
                        <div className={styles.relationList}>
                            {book.relations.map(relation => {
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
                            {book.characters.map(character => (
                                <CardItemWide
                                    key={character.id}
                                    id={character.id}
                                    imageUrl={character.imageUrl ?? '/placeholder.svg'}
                                    name={character.name}
                                />
                            ))}
                        </div>
                    </section>

                </section>
            </section>
        </div>
    )
}
