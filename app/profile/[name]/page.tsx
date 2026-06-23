'use client';
import { useAuth } from '@/app/context/auth-context';
import React from 'react';
import styles from './profile.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useLists } from '@/app/context/list-context';
import { useFavorites } from '@/app/context/favorites-context';
import CardItemFavorites from '@/app/components/card-item/card-item-favorites';

export default function ProfilePage() {

    const { user } = useAuth();
    const { lists } = useLists();
    const { favorites } = useFavorites();

    const favMovies = favorites.filter(f => f.contentTable === 'shows');
    const favSeries = favorites.filter(f => f.contentTable === 'series');
    const favGames = favorites.filter(f => f.contentTable === 'games');
    const favBooks = favorites.filter(f => f.contentTable === 'books');


    const counts = {
        movies: Object.values(lists).filter(e => e.contentTable === 'shows').length,
        series: Object.values(lists).filter(e => e.contentTable === 'series').length,
        games: Object.values(lists).filter(e => e.contentTable === 'games').length,
        books: Object.values(lists).filter(e => e.contentTable === 'books').length,
    };

    return (
        <div>
            <div className={styles.banner}>
                <Image className={styles.bannerImage} src={'/profile/banner_ph.png'} alt='banner' height={300} width={1000} />
                <div className={styles.profileWrapper}>
                    <Image src={'/profile/profile_placeholder.png'} alt='profile' height={200} width={125} />
                    <p className={styles.userName}>{user?.name}</p>
                </div>
            </div>

            <div className={styles.menuRow}>
                <nav className={styles.navBar}>
                    <Link href='../../' className={styles.navBarItem}>Overview</Link>
                    <Link href='../../movies' className={styles.navBarItem}>Movie List</Link>
                    <Link href='../../series' className={styles.navBarItem}>Series List</Link>
                    <Link href='../../games' className={styles.navBarItem}>Game List</Link>
                    <Link href='../../books' className={styles.navBarItem}>Book List</Link>
                    <Link href='../../favorites' className={styles.navBarItem}>Favorites</Link>
                    <Link href='../../social' className={styles.navBarItem}>Social</Link>
                </nav>
            </div>

            <div className={styles.content}>
                <section className={styles.leftCol}>
                    <div className={styles.itemTypeOverview}>
                        <h4 className={styles.title}>Entries by type</h4>
                        <section className={styles.typeOverviewWrapper}>
                            <div>
                                <h5 className={styles.typeOverviewMovies}>Movies</h5>
                                <div className={styles.entry}>
                                    <p className={styles.moviesEntry}>{counts.movies}</p>
                                    <p>Entries</p>
                                </div>
                            </div>
                            <div>
                                <h5 className={styles.typeOverviewSeries}>Series</h5>
                                <div className={styles.entry}>
                                    <p className={styles.seriesEntry}>{counts.series}</p>
                                    <p>Entries</p>
                                </div>
                            </div>
                            <div>
                                <h5 className={styles.typeOverviewGames}>Games</h5>
                                <div className={styles.entry}>
                                    <p className={styles.gamesEntry}>{counts.games}</p>
                                    <p>Entries</p>
                                </div>
                            </div>
                            <div>
                                <h5 className={styles.typeOverviewBooks}>Books</h5>
                                <div className={styles.entry}>
                                    <p className={styles.booksEntry}>{counts.books}</p>
                                    <p>Entries</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.favoritesSection}>
                        <section className={styles.favMovies}>
                            <h4 className={styles.title}>Favorite movies</h4>
                            <div className={styles.favoriteList}>
                                {favMovies.map(f => (
                                    <CardItemFavorites
                                        key={f.contentId}
                                        id={f.contentId}
                                        imageUrl={f.imageUrl ?? '/placeholder.svg'}
                                        title={f.title}
                                        href="movies"
                                    />
                                ))}
                            </div>
                        </section>
                        <section className={styles.favSeries}>
                            <h4 className={styles.title}>Favorite series</h4>
                            <div className={styles.favoriteList}>
                                {favSeries.map(f => (
                                    <CardItemFavorites
                                        key={f.contentId}
                                        id={f.contentId}
                                        imageUrl={f.imageUrl ?? '/placeholder.svg'}
                                        title={f.title}
                                        href="series"
                                    />
                                ))}
                            </div>
                        </section>
                        <section className={styles.favGames}>
                            <h4 className={styles.title}>Favorite games</h4>
                            <div className={styles.favoriteList}>
                                {favGames.map(f => (
                                    <CardItemFavorites
                                        key={f.contentId}
                                        id={f.contentId}
                                        imageUrl={f.imageUrl ?? '/placeholder.svg'}
                                        title={f.title}
                                        href="games"
                                    />
                                ))}
                            </div>
                        </section>
                        <section className={styles.favBooks}>
                            <h4 className={styles.title}>Favorite books</h4>
                            <div className={styles.favoriteList}>
                                {favBooks.map(f => (
                                    <CardItemFavorites
                                        key={f.contentId}
                                        id={f.contentId}
                                        imageUrl={f.imageUrl ?? '/placeholder.svg'}
                                        title={f.title}
                                        href="books"
                                    />
                                ))}
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}
