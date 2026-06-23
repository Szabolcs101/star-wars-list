'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './auth-context';

export interface FavoriteEntry {
    contentId: string;
    contentTable: string;
    title: string;
    imageUrl: string;
}

interface FavoritesContextType {
    favorites: FavoriteEntry[];
    loading: boolean;
    refresh: () => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState<FavoriteEntry[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchFavorites = async () => {
        if (!user?.id) { setFavorites([]); setLoading(false); return; }
        const res = await fetch(`/api/favorites?userId=${user.id}`);
        const data = await res.json();
        setFavorites(data);
        setLoading(false);
    };

    useEffect(() => { fetchFavorites(); }, [user?.id]);

    return (
        <FavoritesContext.Provider value={{ favorites, loading, refresh: fetchFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => {
    const ctx = useContext(FavoritesContext);
    if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
    return ctx;
};