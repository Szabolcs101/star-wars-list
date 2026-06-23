"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./auth-context";

export type ItemStatus = "finished" | "current" | "planned" | null;

export interface UserItemEntry {
    status: ItemStatus;
    progress: number;
    score?: number;
    addedAt?: string;
    finishedAt?: string;
    contentTable?: string;
}

interface ListsContextType {
    lists: Record<string, UserItemEntry>;
    loading: boolean;
    setStatus: (itemId: string, status: ItemStatus, contentTable: string) => Promise<void>;
    updateProgress: (itemId: string, contentTable: string) => Promise<void>;
    setProgress: (itemId: string, progress: number, total?: number, contentTable?: string) => Promise<void>;
    updateScore: (itemId: string, score: number, contentTable: string) => Promise<void>;
    removeItem: (itemId: string, contentTable: string) => Promise<void>;
    getStatus: (itemId: string) => ItemStatus;
    getEntry: (itemId: string) => UserItemEntry | undefined;
    getAverageScore: (itemId: string) => Promise<number>;
    getPopularity: (itemId: string) => Promise<number>;
    getItemsByStatus: (status: ItemStatus) => string[];
    isInAnyList: (itemId: string) => boolean;
    refreshLists: () => Promise<void>;
}

const ListsContext = createContext<ListsContextType | undefined>(undefined);

export function ListProvider({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const [lists, setLists] = useState<Record<string, UserItemEntry>>({});
    const [loading, setLoading] = useState(true);

    const fetchUserLists = async () => {
        if (!user?.id) {
            setLists({});
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`/api/user-lists?userId=${user.id}`);
            if (res.ok) {
                const data = await res.json();
                const listMap: Record<string, UserItemEntry> = {};

                data.forEach((entry: any) => {
                    listMap[entry.contentId] = {
                        status: entry.listType as ItemStatus || null,
                        progress: entry.progress || 0,
                        score: entry.rating ? Number(entry.rating) : undefined,
                        addedAt: entry.updatedAt,
                        contentTable: entry.contentTable,
                    };
                });

                setLists(listMap);
            }
        } catch (err) {
            console.error("Failed to fetch user lists:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserLists();
    }, [user?.id]);

    const refreshLists = () => fetchUserLists();

    const updateEntry = async (itemId: string, contentTable: string, body: any) => {
        if (!user?.id) return;

        try {
            await fetch('/api/user-lists', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user.id,
                    contentId: itemId,
                    contentTable,
                    ...body,
                }),
            });
            await refreshLists();
        } catch (err) {
            console.error("Failed to update entry:", err);
        }
    };

    const setStatus = async (itemId: string, status: ItemStatus, contentTable: string) => {
        await updateEntry(itemId, contentTable, { listType: status });
    };

    const updateProgress = async (itemId: string, contentTable: string) => {
        const current = lists[itemId];
        const newProgress = (current?.progress ?? 0) + 1;
        await setProgress(itemId, newProgress, undefined, contentTable);
    };

    const setProgress = async (
        itemId: string,
        newProgress: number,
        total?: number,
        contentTable: string = "series"
    ) => {
        if (!user?.id) return;

        const clampedProgress = Math.max(0, newProgress);
        let newStatus: ItemStatus = "planned";

        if (clampedProgress === 0) {
            newStatus = "planned";
        } else if (total !== undefined && clampedProgress >= total) {
            newStatus = "finished";
        } else {
            newStatus = "current";
        }

        await updateEntry(itemId, contentTable, {
            progress: clampedProgress,
            listType: newStatus,
        });
    };

    const updateScore = async (itemId: string, score: number, contentTable: string) => {
        const clampedScore = Math.max(1, Math.min(10, score));
        await updateEntry(itemId, contentTable, { rating: clampedScore });
    };

    const removeItem = async (itemId: string, contentTable: string) => {
        await updateEntry(itemId, contentTable, {
            listType: null,
            progress: 0,
            rating: null
        });
    };

    const getAverageScore = async (itemId: string): Promise<number> => {
        try {
            const res = await fetch(`/api/item-average/${itemId}`);
            const data = await res.json();
            return data.average || 0;
        } catch {
            return 0;
        }
    };

    const getPopularity = async (itemId: string): Promise<number> => {
        try {
            const res = await fetch(`/api/item-popularity/${itemId}`);
            const data = await res.json();
            return data.count || 0;
        } catch {
            return 0;
        }
    };

    const getItemsByStatus = (status: ItemStatus) =>
        Object.entries(lists)
            .filter(([, entry]) => entry.status === status)
            .map(([id]) => id);

    const getStatus = (itemId: string): ItemStatus => lists[itemId]?.status ?? null;
    const getEntry = (itemId: string) => lists[itemId];
    const isInAnyList = (itemId: string) => !!lists[itemId];

    const value: ListsContextType = {
        lists,
        loading,
        setStatus,
        updateProgress,
        setProgress,
        updateScore,
        removeItem,
        getStatus,
        getEntry,
        getAverageScore,
        getPopularity,
        getItemsByStatus,
        isInAnyList,
        refreshLists,
    };

    return <ListsContext.Provider value={value}>{children}</ListsContext.Provider>;
}

export const useLists = () => {
    const ctx = useContext(ListsContext);
    if (!ctx) throw new Error("useLists must be used within ListProvider");
    return ctx;
};