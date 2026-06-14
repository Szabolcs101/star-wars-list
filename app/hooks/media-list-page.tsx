'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import CardItem from "../components/card-item/card-item";
import FilterList from "../components/filter/filter-list/filter-list";
import Pagination from "../components/pagination/pagination";
import styles from '../css-modules/listpage.module.css';

type ListItem = {
    id: string | number;
    title: string;
    imageUrl: string;
    canonStatus?: string | null;
    status?: string | null;
    type?: string | null;
    releaseDate?: string | null;
    startDate?: string | null;
    [key: string]: unknown;
};

type Props = {
    data: ListItem[];
    href: string;
    searchParams: { [key: string]: string | undefined };
};

const ITEMS_PER_PAGE = 18;

export default function MediaListPage({ data, href, searchParams }: Props) {
    const router = useRouter();
    const params = useSearchParams();

    const filters = {
        search: searchParams.search ?? '',
        canonStatus: searchParams.canonStatus ?? null,
        status: searchParams.status ?? null,
        year: searchParams.year ?? '',
        type: searchParams.type ?? null,
    };

    const currentPage = Number(searchParams.page ?? 1);

    const handleFilterChange = (changes: Partial<typeof filters>) => {
        const next = new URLSearchParams(params.toString());
        Object.entries(changes).forEach(([key, value]) => {
            if (value) {
                next.set(key, value);
            } else {
                next.delete(key);
            }
        });
        next.delete('page');
        router.push(`?${next.toString()}`);
    };

    const handleReset = () => {
        router.push('?');
    };

    const availableOptions = useMemo(() => {
        const canon = new Set<string>();
        const statusSet = new Set<string>();
        const types = new Set<string>();

        data.forEach((item) => {
            if (item.canonStatus) canon.add(item.canonStatus);
            if (item.status) statusSet.add(item.status);
            if (item.type) types.add(item.type);
        });

        return {
            canonStatus: Array.from(canon),
            status: Array.from(statusSet),
            type: Array.from(types),
        };
    }, [data]);

    const filteredItems = useMemo(() => {
        let result = [...data];

        if (filters.search.trim()) {
            const term = filters.search.toLowerCase().trim();
            result = result.filter((item) => item.title.toLowerCase().includes(term));
        }
        if (filters.year.trim()) {
            const term = filters.year.substring(0, 4).trim();
            result = result.filter((item) => {
                const date = item.releaseDate ?? item.startDate;
                return date?.includes(term);
            });
        }
        if (filters.canonStatus) {
            result = result.filter((item) =>
                item.canonStatus?.toLowerCase() === filters.canonStatus!.toLowerCase()
            );
        }
        if (filters.status) {
            result = result.filter((item) => item.status === filters.status);
        }
        if (filters.type) {
            result = result.filter((item) => item.type === filters.type);
        }

        return result;
    }, [data, filters]);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const currentItems = filteredItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        const next = new URLSearchParams(params.toString());
        next.set('page', String(page));
        router.push(`?${next.toString()}`);
    };

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
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
}