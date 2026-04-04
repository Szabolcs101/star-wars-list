'use client';
import CardItem from "../components/card-item/card-item";
import FilterList from "../components/filter/filter-list/filter-list";
import Pagination from "../components/pagination/pagination";
import { useListPage } from "./use-list-page";
import styles from '../css-modules/listpage.module.css';

type ListItem = {
    id: string | number;
    title: string;
    imageUrl: string;
    [key: string]: unknown;
};

type Props = {
    data: ListItem[];
    href: string;
    dateField?: 'releaseDate' | 'startDate';
};

export default function MediaListPage({ data, href, dateField = 'releaseDate' }: Props) {
    const {
        currentItems,
        currentPage,
        totalPages,
        filters,
        availableOptions,
        handleFilterChange,
        handleReset,
        setCurrentPage,
    } = useListPage(data, dateField);

    return (
        <>
            <FilterList
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleReset}
                availableOptions={availableOptions}
            />
            <div className={styles.container}>
                <div className={styles.list}>
                    {currentItems.map((item) => (
                        <CardItem key={item.id} id={item.id} title={item.title} imageUrl={item.imageUrl} href={href} />
                    ))}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </>
    );
}
