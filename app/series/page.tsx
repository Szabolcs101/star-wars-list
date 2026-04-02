'use client';
import React, { useEffect, useMemo, useState } from 'react'
import CardItem from '../components/card-item/card-item'
import showData from '../../data/series.json'
import styles from '../listpage.module.css';
import FilterList from '../components/filter/filter-list/filter-list'
import Pagination from '../components/pagination/pagination';

const ITEMS_PER_PAGE = 18

export default function SeriesListPage() {

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

        showData.forEach((show) => {
            if (show.status) statusSet.add(show.status);
            if (show.type) types.add(show.type);
        });

        return {
            canonStatus: Array.from(canon),
            status: Array.from(statusSet),
            type: Array.from(types),
        };
    }, []);

    const filteredShows = useMemo(() => {
        let result = [...showData];

        if (filters.search.trim()) {
            const term = filters.search.toLowerCase().trim();
            result = result.filter(
                (b) =>
                    b.title.toLowerCase().includes(term)
            );
        }

        if (filters.year.trim()) {
            const term = filters.year.substring(0, 4).trim();
            result = result.filter(
                (b) =>
                    b.startDate.includes(term)
            )
        }

        if (filters.status) {
            result = result.filter((b) => b.status === filters.status);
        }
        if (filters.type) {
            result = result.filter((b) => b.type === filters.type);
        }

        return result;
    }, [filters]);

    const totalItems = filteredShows.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const currentItems = useMemo(
        () =>
            filteredShows.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
            ),
        [filteredShows, currentPage]
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
                    {currentItems.map(series => (
                        <CardItem key={series.id} id={series.id} title={series.title} imageUrl={series.imageUrl} href='series' />
                    ))}
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
