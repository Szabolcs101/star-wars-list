'use client';
import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import { NotificationItem, NotificationType, type NotificationItem as NotificationItemType } from '../components/notification/notification';
import styles from './notification-provider.module.css';

export interface NotificationAPI {
    info: (message: string) => void;
    error: (message: string) => void;
    success: (message: string) => void;
}

const NotificationContext = createContext<NotificationAPI | null>(null);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
    const [notifications, setNotifications] = useState<NotificationItemType[]>([]);
    const counterRef = useRef(0);

    const add = useCallback((message: string, type: NotificationType) => {
        const id = ++counterRef.current;
        setNotifications((prev) => [...prev, { id, message, type }]);
    }, []);

    const remove = useCallback((id: number) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, []);

    const api: NotificationAPI = {
        info: (msg) => add(msg, 'info'),
        error: (msg) => add(msg, 'error'),
        success: (msg) => add(msg, 'success'),
    };

    return (
        <NotificationContext.Provider value={api}>
            {children}

            <div className={styles.wrapper}>
                {notifications.map((n) => (
                    <NotificationItem key={n.id} item={n} onRemove={remove} />
                ))}
            </div>
        </NotificationContext.Provider>
    );
}

export function useNotification(): NotificationAPI {
    const ctx = useContext(NotificationContext);
    if (!ctx) {
        throw new Error('useNotification must be used inside <NotificationProvider>');
    }
    return ctx;
}