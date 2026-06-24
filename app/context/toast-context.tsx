'use client';
import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import { ToastItem, ToastType, type ToastItem as ToastItemType } from '../components/toast/toast';
import styles from './toast-provider.module.css';

export interface ToastAPI {
    info: (message: string) => void;
    error: (message: string) => void;
    success: (message: string) => void;
}

const ToastContext = createContext<ToastAPI | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<ToastItemType[]>([]);
    const counterRef = useRef(0);

    const add = useCallback((message: string, type: ToastType) => {
        const id = ++counterRef.current;
        setToasts((prev) => [...prev, { id, message, type }]);
    }, []);

    const remove = useCallback((id: number) => {
        setToasts((prev) => prev.filter((n) => n.id !== id));
    }, []);

    const api: ToastAPI = {
        info: (msg) => add(msg, 'info'),
        error: (msg) => add(msg, 'error'),
        success: (msg) => add(msg, 'success'),
    };

    return (
        <ToastContext.Provider value={api}>
            {children}

            <div className={styles.wrapper}>
                {toasts.map((n) => (
                    <ToastItem key={n.id} item={n} onRemove={remove} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast(): ToastAPI {
    const ctx = useContext(ToastContext);
    if (!ctx) {
        throw new Error('useToast must be used inside <ToastProvider>');
    }
    return ctx;
}