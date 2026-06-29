'use client';
import React, { useState } from 'react';
import styles from './profile.module.css';
import Image from 'next/image';
import Link from 'next/link';
import CardItemFavorites from '@/app/components/card-item/card-item-favorites';
import { useAuth } from '@/app/context/auth-context';
import { SvgFollowSolid } from '@/app/components/icons/icons';

interface Entry {
    contentId: string;
    contentTable: string;
    listType: string | null;
    progress: number | null;
    rating: number | null;
    isFavorite: boolean | null;
}

interface FavoriteEntry {
    contentId: string;
    contentTable: string;
    title: string;
    imageUrl: string;
}

interface UserRef {
    id: string;
    name: string;
    imageUrl?: string;
}

interface Props {
    profileUser: { id: string; name: string };
    entries: Entry[];
    favorites: FavoriteEntry[];
    followers: UserRef[];
    following: UserRef[];
}

function calcAvg(entries: Entry[]) {
    const scored = entries.filter(e => e.rating != null);
    if (scored.length === 0) return null;
    const sum = scored.reduce((acc, e) => acc + e.rating!, 0);
    return (sum / scored.length).toFixed(1);
}

export default function ProfileClient({ profileUser, entries, favorites, followers, following }: Props) {
    const { user } = useAuth();
    const isOwnProfile = user?.id === profileUser.id;
    const [isFollowing, setIsFollowing] = useState(
        followers.some(f => f.id === user?.id)
    );

    const counts = {
        movies: entries.filter(e => e.contentTable === 'shows').length,
        series: entries.filter(e => e.contentTable === 'series').length,
        games: entries.filter(e => e.contentTable === 'games').length,
        books: entries.filter(e => e.contentTable === 'books').length,
    };

    const avgScores = {
        movies: calcAvg(entries.filter(e => e.contentTable === 'shows')),
        series: calcAvg(entries.filter(e => e.contentTable === 'series')),
        games: calcAvg(entries.filter(e => e.contentTable === 'games')),
        books: calcAvg(entries.filter(e => e.contentTable === 'books')),
    };

    const favMovies = favorites.filter(f => f.contentTable === 'shows');
    const favSeries = favorites.filter(f => f.contentTable === 'series');
    const favGames = favorites.filter(f => f.contentTable === 'games');
    const favBooks = favorites.filter(f => f.contentTable === 'books');

    const handleFollow = async () => {
        if (!user) return;
        const res = await fetch('/api/follows', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ followerId: user.id, followingId: profileUser.id }),
        });
        const data = await res.json();
        setIsFollowing(data.following);
    };

    return (
        <div>
            <div className={styles.banner}>
                <Image className={styles.bannerImage} src={'/profile/banner_ph.jpg'} alt='banner' height={300} width={1000} />
                <div className={styles.profileWrapper}>
                    <Image src={'/profile/profile_placeholder.jpg'} alt='profile' height={200} width={125} />
                    <div>
                        <div>
                            <p className={styles.userName}>{profileUser.name}</p>
                            {!isOwnProfile && (
                                <SvgFollowSolid
                                    className={`${styles.followIcon} ${isFollowing ? styles.following : ''}`}
                                    onClick={handleFollow}
                                />
                            )}
                        </div>
                    </div>
                    {isOwnProfile && <span className={styles.ownProfileBadge}></span>}
                </div>
            </div>

            <div className={styles.menuRow}>
                <nav className={styles.navBar}>
                    <Link href='/' className={styles.navBarItem}>Overview</Link>
                    <Link href='/movies' className={styles.navBarItem}>Movie List</Link>
                    <Link href='/series' className={styles.navBarItem}>Series List</Link>
                    <Link href='/games' className={styles.navBarItem}>Game List</Link>
                    <Link href='/books' className={styles.navBarItem}>Book List</Link>
                    <Link href='/favorites' className={styles.navBarItem}>Favorites</Link>
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
                                    <CardItemFavorites key={f.contentId} id={f.contentId} imageUrl={f.imageUrl} title={f.title} href="movies" />
                                ))}
                            </div>
                        </section>
                        <section className={styles.favSeries}>
                            <h4 className={styles.title}>Favorite series</h4>
                            <div className={styles.favoriteList}>
                                {favSeries.map(f => (
                                    <CardItemFavorites key={f.contentId} id={f.contentId} imageUrl={f.imageUrl} title={f.title} href="series" />
                                ))}
                            </div>
                        </section>
                        <section className={styles.favGames}>
                            <h4 className={styles.title}>Favorite games</h4>
                            <div className={styles.favoriteList}>
                                {favGames.map(f => (
                                    <CardItemFavorites key={f.contentId} id={f.contentId} imageUrl={f.imageUrl} title={f.title} href="games" />
                                ))}
                            </div>
                        </section>
                        <section className={styles.favBooks}>
                            <h4 className={styles.title}>Favorite books</h4>
                            <div className={styles.favoriteList}>
                                {favBooks.map(f => (
                                    <CardItemFavorites key={f.contentId} id={f.contentId} imageUrl={f.imageUrl} title={f.title} href="books" />
                                ))}
                            </div>
                        </section>
                    </div>
                </section>

                <section className={styles.rightCol}>
                    <section className={styles.avgScores}>
                        <h4 className={styles.title}>Average scores</h4>
                        <div className={styles.scores}>
                            <h5 className={styles.avgMovies}>Movies: <p className={styles.movieScores}>{avgScores.movies ?? '—'}</p></h5>
                            <h5 className={styles.avgSeries}>Series: <p className={styles.seriesScores}>{avgScores.series ?? '—'}</p></h5>
                            <h5 className={styles.avgGames}>Games: <p className={styles.gamesScores}>{avgScores.games ?? '—'}</p></h5>
                            <h5 className={styles.avgBooks}>Books: <p className={styles.booksScores}>{avgScores.books ?? '—'}</p></h5>
                        </div>
                    </section>
                    <section className={styles.followerSection}>
                        <h4 className={styles.title}>Followers</h4>
                        <div className={styles.followList}>
                            {followers.map(f => (
                                <Link key={f.id} href={`/profile/${f.name}`} className={styles.followItem}>
                                    <Image
                                        src={f.imageUrl ?? '/profile/profile_placeholder.jpg'}
                                        alt={f.name}
                                        width={100}
                                        height={100}
                                    />
                                    <span>{f.name}</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                    <section className={styles.followerSection}>
                        <h4 className={styles.title}>Following</h4>
                        <div className={styles.followList}>
                            {following.map(f => (
                                <Link key={f.id} href={`/profile/${f.name}`} className={styles.followItem}>
                                    {f.name}
                                </Link>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}