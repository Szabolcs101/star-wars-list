'use client';
import { useCallback, useEffect, useState } from 'react';
import { Combobox } from '@base-ui/react/combobox';
import { useRouter } from 'next/navigation';
import styles from './combobox.module.css';
import { SvgSearchSolid } from '../../../icons/fontawesome';

interface SearchItem {
    id: string;
    title: string;
    type: 'movie' | 'series' | 'game' | 'book';
}

export default function SearchCombobox() {
    const router = useRouter();
    const [allItems, setAllItems] = useState<SearchItem[]>([]);
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch('/api/search')
            .then(res => res.json())
            .then(data => setAllItems(data));
    }, []);

    const handleValueChange = (value: SearchItem | null) => {
        if (!value) return;

        const routeMap: Record<SearchItem['type'], string> = {
            movie: `/movies/${value.id}`,
            series: `/series/${value.id}`,
            game: `/games/${value.id}`,
            book: `/books/${value.id}`,
        };

        router.push(routeMap[value.type]);
        setQuery('');
        setOpen(false);
    };

    const filteredItems = useCallback(() => {
        if (query.length < 3) return [];

        const lowerQuery = query.toLowerCase();

        return allItems.filter(item =>
            item.title.toLowerCase().includes(lowerQuery)
        );
    }, [allItems, query]);

    const itemsToShow = filteredItems();

    return (
        <Combobox.Root items={itemsToShow} onValueChange={handleValueChange} open={open} onOpenChange={setOpen}>
            <div className={styles.searchWrapper}>
                <Combobox.InputGroup className={styles.searchInputGroup}>
                    <Combobox.Input
                        placeholder="Search..."
                        className={styles.searchInput}
                        value={query}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setQuery(newValue);
                            setOpen(newValue.length >= 3);
                        }}
                    />
                    <div>
                        <Combobox.Trigger aria-label="Show suggestions">
                            <SvgSearchSolid className={styles.searchIcon} />
                        </Combobox.Trigger>
                    </div>
                </Combobox.InputGroup>

                <Combobox.Portal>
                    <Combobox.Positioner className={styles.positioner} sideOffset={6}>
                        <Combobox.Popup className={styles.popup}>
                            <Combobox.Empty className={styles.empty}>No results found.</Combobox.Empty>

                            <Combobox.List className={styles.list}>
                                {(item: SearchItem) => (
                                    <Combobox.Item
                                        key={item.id}
                                        value={item}
                                        className={styles.item}
                                    >
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>{item.title}</span>
                                            <span className={styles.itemType}>{item.type}</span>
                                        </div>
                                    </Combobox.Item>
                                )}
                            </Combobox.List>
                        </Combobox.Popup>
                    </Combobox.Positioner>
                </Combobox.Portal>
            </div>
        </Combobox.Root>
    );
}