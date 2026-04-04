import { useState, useMemo, useEffect } from "react";

export type Filters = {
    search: string;
    canonStatus: string | null;
    status: string | null;
    year: string;
    type: string | null;
};

export const defaultFilters: Filters = {
    search: '',
    canonStatus: null,
    status: null,
    year: '',
    type: null,
};

type ListItem = {
    id: string | number;
    title: string;
    imageUrl: string;
    canonStatus?: string;
    status?: string;
    type?: string;
    releaseDate?: string;
    startDate?: string;
    [key: string]: unknown;
};

const ITEMS_PER_PAGE = 18;

export function useListPage(data: ListItem[], dateField: 'releaseDate' | 'startDate' = 'releaseDate') {
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<Filters>(defaultFilters);

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
            result = result.filter((item) => item[dateField]?.includes(term));
        }
        if (filters.canonStatus) {
            result = result.filter((item) => item.canonStatus === filters.canonStatus);
        }
        if (filters.status) {
            result = result.filter((item) => item.status === filters.status);
        }
        if (filters.type) {
            result = result.filter((item) => item.type === filters.type);
        }

        return result;
    }, [data, filters, dateField]);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    const currentItems = useMemo(
        () => filteredItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE),
        [filteredItems, currentPage]
    );

    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) setCurrentPage(1);
    }, [totalPages, currentPage]);

    const handleFilterChange = (changes: Partial<Filters>) => {
        setFilters((prev) => ({ ...prev, ...changes }));
        setCurrentPage(1);
    };

    const handleReset = () => {
        setFilters(defaultFilters);
        setCurrentPage(1);
    };

    return {
        currentItems,
        currentPage,
        totalPages,
        filters,
        availableOptions,
        handleFilterChange,
        handleReset,
        setCurrentPage,
    };
}
