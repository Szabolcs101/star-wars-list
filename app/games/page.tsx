'use client';
import React, { useEffect, useMemo, useState } from 'react';
import styles from '../css-modules/listpage.module.css';
import gamesData from '../../data/games.json';
import CardItem from '../components/card-item/card-item';
import FilterList from '../components/filter/filter-list/filter-list';
import Pagination from '../components/pagination/pagination';

const ITEMS_PER_PAGE = 18;

export default function GameListPage() {

    const defaultFilters = {
        search: '',
        canonStatus: null as string | null,
        status: null as string | null,
        year: '',
        type: null as string | null,
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState(defaultFilters);

    const availableOptions = useMemo(() => {
        const canon = new Set<string>();
        const statusSet = new Set<string>();
        const types = new Set<string>();

        gamesData.forEach((game) => {
            if (game.canonStatus) canon.add(game.canonStatus);
            if (game.status) statusSet.add(game.status);
            if (game.type) types.add(game.type);
        });

        return {
            canonStatus: Array.from(canon),
            status: Array.from(statusSet),
            type: Array.from(types),
        };
    }, []);

    const filteredGames = useMemo(() => {
        let result = [...gamesData];

        if (filters.search.trim()) {
            const term = filters.search.toLowerCase().trim();
            result = result.filter(
                (b) =>
                    b.title.toLowerCase().includes(term) ||
                    b.description?.toLowerCase().includes(term)
            );
        }

        if (filters.year.trim()) {
            const term = filters.year.substring(0, 4).trim();
            result = result.filter(
                (b) =>
                    b.releaseDate.includes(term)
            )
        }

        if (filters.canonStatus) {
            result = result.filter((b) => b.canonStatus === filters.canonStatus);
        }
        if (filters.status) {
            result = result.filter((b) => b.status === filters.status);
        }
        if (filters.type) {
            result = result.filter((b) => b.type === filters.type);
        }
        if (filters.year.trim()) {
            result = result.filter((b) => b.releaseDate?.startsWith(filters.year.trim()));
        }

        return result;
    }, [filters]);

    const totalItems = filteredGames.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const currentItems = useMemo(
        () =>
            filteredGames.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
            ),
        [filteredGames, currentPage]
    );

    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(1);
        }
    }, [totalPages, currentPage]);

    return (
        <>
            <FilterList
                filters={filters}
                onFilterChange={(changes) => {
                    setFilters((prev) => ({ ...prev, ...changes }));
                    setCurrentPage(1);
                }}
                onReset={() => {
                    setFilters(defaultFilters);
                    setCurrentPage(1);
                }}
                availableOptions={availableOptions}
            />
            <div className={styles.container}>
                <div className={styles.list}>
                    {currentItems.map(game => <CardItem key={game.id} id={game.id} title={game.title} imageUrl={game.imageUrl} href='games' />)}
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    )
}
