"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./auth-context";
import seriesData from '../../data/series.json';
import booksData from '../../data/books.json';

export type ItemStatus = "finished" | "current" | "planned" | null;

export interface UserItemEntry {
    status: ItemStatus;
    addedAt?: string;
    finishedAt?: string;
    score?: number;
    progress: number;
}

export type UserLists = Record<string, UserItemEntry>;

const DEFAULT_LISTS: UserLists = {};

interface ListsContextType {
    lists: UserLists;
    setStatus: (itemId: string, status: ItemStatus) => void;
    updateEntry: (itemId: string, updates: Partial<UserItemEntry>) => void;
    removeItem: (itemId: string) => void;
    getStatus: (itemId: string) => ItemStatus;
    getEntry: (itemId: string) => UserItemEntry | undefined;
    getItemsByStatus: (status: ItemStatus) => string[];
    isInAnyList: (itemId: string) => boolean;
    clearAll: () => void;
    updateProgress: (itemId: string) => void;
}

const ListsContext = createContext<ListsContextType | undefined>(undefined);

export function ListProvider({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const [lists, setLists] = useState<UserLists>(DEFAULT_LISTS);

    const storageKey = user ? `starwars_user_items_${user.id}` : null;

    useEffect(() => {
        if (!storageKey) {
            setLists(DEFAULT_LISTS);
            return;
        }
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) setLists(JSON.parse(saved));
        } catch (err) {
            console.error("User lists load error", err);
        }
    }, [storageKey]);

    useEffect(() => {
        if (!storageKey) return;
        try {
            localStorage.setItem(storageKey, JSON.stringify(lists));
        } catch (err) {
            console.error("User lists save error", err);
        }
    }, [lists, storageKey]);

    const getTotalForItem = (itemId: string): number => {
        const series = seriesData.find((s: any) => s.id === itemId);
        if (series && typeof series.episodes === 'number') {
            return series.episodes;
        }

        const book = booksData.find((b: any) => b.id === itemId);
        if (book && typeof book.pageNumber === 'number') {
            return book.pageNumber;
        }

        return 1;
    };

    const setStatus = (itemId: string, status: ItemStatus) => {
        setLists((prev) => {
            if (status === null) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }

            const currentEntry = prev[itemId] || {};
            const total = getTotalForItem(itemId);

            let newProgress = currentEntry.progress ?? 0;

            if (status === "finished") {
                newProgress = total;
            }

            if (status === "planned") {
                newProgress = 0;
            }

            return {
                ...prev,
                [itemId]: {
                    ...currentEntry,
                    status,
                    progress: newProgress,
                    addedAt: currentEntry.addedAt ?? new Date().toISOString(),
                    ...(status === "finished" && !currentEntry.finishedAt
                        ? { finishedAt: new Date().toISOString().split("T")[0] }
                        : {}),
                },
            };
        });
    };

    const updateEntry = (itemId: string, updates: Partial<UserItemEntry>) => {
        setLists((prev) => ({
            ...prev,
            [itemId]: {
                ...prev[itemId],
                ...updates,
            },
        }));
    };

    const removeItem = (itemId: string) => {
        setLists((prev) => {
            const { [itemId]: _, ...rest } = prev;
            return rest;
        });
    };

    const updateProgress = (itemId: string) => {
        setLists((prev) => {
            const currentEntry = prev[itemId];
            if (!currentEntry) return prev;

            const total = getTotalForItem(itemId);
            const currentProgress = currentEntry.progress ?? 0;
            let newProgress = currentProgress + 1;

            if (total > 0) {
                newProgress = Math.min(newProgress, total);
            } else {
                newProgress = 1;
            }

            let newStatus: ItemStatus = currentEntry.status;

            if (newProgress > 0 && newStatus === "planned") {
                newStatus = "current";
            }

            if (newProgress >= total) {
                newStatus = "finished";
                newProgress = total;
            }

            return {
                ...prev,
                [itemId]: {
                    ...currentEntry,
                    progress: newProgress,
                    status: newStatus,
                    ...(newStatus === "finished" && !currentEntry.finishedAt
                        ? { finishedAt: new Date().toISOString().split("T")[0] }
                        : {}),
                },
            };
        });
    };

    const getStatus = (itemId: string): ItemStatus => lists[itemId]?.status ?? null;
    const getEntry = (itemId: string) => lists[itemId];
    const isInAnyList = (itemId: string) => !!lists[itemId];

    const getItemsByStatus = (status: ItemStatus) =>
        Object.entries(lists)
            .filter(([, entry]) => entry.status === status)
            .map(([id]) => id);

    const clearAll = () => setLists(DEFAULT_LISTS);

    const value: ListsContextType = {
        lists,
        setStatus,
        updateEntry,
        removeItem,
        getStatus,
        getEntry,
        getItemsByStatus,
        isInAnyList,
        clearAll,
        updateProgress,
    };

    return <ListsContext.Provider value={value}>{children}</ListsContext.Provider>;
}

export const useLists = () => {
    const ctx = useContext(ListsContext);
    if (!ctx) throw new Error("useLists must be used within ListsProvider");
    return ctx;
};