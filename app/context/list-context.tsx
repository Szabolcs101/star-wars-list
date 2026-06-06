"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./auth-context";

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
    updateScore: (itemId: string, score: number) => void;
    removeItem: (itemId: string) => void;
    getStatus: (itemId: string) => ItemStatus;
    getEntry: (itemId: string) => UserItemEntry | undefined;
    getItemsByStatus: (status: ItemStatus) => string[];
    isInAnyList: (itemId: string) => boolean;
    clearAll: () => void;
    updateProgress: (itemId: string) => void;
    getAverageScore: (itemId: string) => number;
    getPopularity: (itemId: string) => number;
}

const ListsContext = createContext<ListsContextType | undefined>(undefined);

export function ListProvider({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const [lists, setLists] = useState<UserLists>(DEFAULT_LISTS);
    const [allUserLists, setAllUserLists] = useState<Record<string, UserLists>>({});

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


    const getTotalForItem = async (itemId: string): Promise<number> => {
        const res = await fetch(`/api/item-total/${itemId}`);
        const data = await res.json();
        return data.total;
    };

    useEffect(() => {
        if (typeof window === "undefined") return;

        const loadAllLists = () => {
            const listsObj: Record<string, UserLists> = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key?.startsWith('starwars_user_items_')) {
                    try {
                        const data = JSON.parse(localStorage.getItem(key)!);
                        listsObj[key] = data;
                    } catch (e) {
                        console.error(`Failed to parse ${key}`);
                    }
                }
            }
            setAllUserLists(listsObj);
        };

        loadAllLists();

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key?.startsWith('starwars_user_items_')) {
                loadAllLists();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const getAverageScore = (itemId: string): number => {
        let total = 0;
        let count = 0;

        Object.values(allUserLists).forEach(userEntries => {
            const entry = userEntries[itemId];
            if (entry?.score !== undefined && entry?.status === 'finished') {
                total += entry.score;
                count++;
            }
        });

        return count > 0 ? Number((total / count).toFixed(1)) : 0;
    };

    const getPopularity = (itemId: string): number => {
        let count = 0;

        Object.values(allUserLists).forEach(userEntries => {
            const entry = userEntries[itemId];
            if (entry?.status === 'finished') count++;
        });

        return count;
    };

    const updateScore = (itemId: string, score: number) => {
        const clampedScore = Math.max(1, Math.min(10, score));
        updateEntry(itemId, { score: clampedScore });
    };

    const setStatus = async (itemId: string, status: ItemStatus) => {
        const total = await getTotalForItem(itemId);
        setLists((prev) => {
            if (status === null) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }

            const currentEntry = prev[itemId] || {};

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

    const updateProgress = async (itemId: string) => {
        const total = await getTotalForItem(itemId);
        setLists((prev) => {
            const currentEntry = prev[itemId];
            if (!currentEntry) return prev;

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
        updateScore,
        removeItem,
        getStatus,
        getEntry,
        getItemsByStatus,
        isInAnyList,
        clearAll,
        updateProgress,
        getAverageScore,
        getPopularity
    };

    return <ListsContext.Provider value={value}>{children}</ListsContext.Provider>;
}

export const useLists = () => {
    const ctx = useContext(ListsContext);
    if (!ctx) throw new Error("useLists must be used within ListsProvider");
    return ctx;
};