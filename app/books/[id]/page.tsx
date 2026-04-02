import showData from '../../../data/books.json';
import charactersData from '../../../data/characters.json';
import { notFound } from 'next/navigation';
import styles from './book.module.css'
import Image from 'next/image';
import CardItemWide from '../../components/card-item/card-item-wide';
import Link from 'next/link';
import ListMenu from '@/app/components/menu/menu';
import FavoriteToggle from '@/app/components/toggle/toggle';

interface Book {
    id: string;
    type: string;
    title: string;
    releaseDate: string;
    status: string;
    canonStatus: string;
    genre: string;
    author: string;
    publisher: string;
    pageNumber: number;
    imageUrl: string;
    characters: string[];
    relations: Relation[];
    description: string;
}

interface Relation {
    relatedId: string;
    type: string;
}

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const book = showData.find((m: Book) => m.id === id);

    if (!book) {
        notFound();
    }

    const getRelatedEntity = (relatedId: string) => {
        return showData.find((item) => item.id === relatedId) as Book | undefined;
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <section className={styles.headerRow}>
                    <Image src={book.imageUrl} alt={book.title} height={327} width={218} className={styles.image} />
                    <div className={styles.headerCol}>
                        <h2 className={styles.title}>{book.title}</h2>
                        <p className={styles.description}>{book.description}</p>
                    </div>
                </section>
            </div>
            <section className={styles.listSection}>
                <ListMenu itemId={id}/>
                <FavoriteToggle />
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
                            {book.characters.map(characterId => {
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

                </section>
            </section>
        </div>
    )
}
