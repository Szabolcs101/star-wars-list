'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import usersData from '../../data/users.json';

interface User {
    id: string;
    email: string;
    name: string
};

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => boolean;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem('currentUser');
        if (saved) {
            try {
                setUser(JSON.parse(saved));
            } catch {
                localStorage.removeItem('currentUser');
            }
        }
        setIsLoading(false)
    }, []);

    const login = (email: string, password: string): boolean => {
        const found = (usersData as typeof usersData[0][]).find(
            (u) => u.email === email && u.password === password
        );
        if (found) {
            const userObj = { id: found.id, email: found.email, name: found.name };
            setUser(userObj);
            localStorage.setItem('currentUser', JSON.stringify(userObj));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('currentUser');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
};
