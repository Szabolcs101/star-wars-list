'use client';
import React, { useEffect, useState } from 'react';
import styles from './notification.module.css';

export type NotificationType = 'info' | 'error' | 'success';

export interface NotificationItem {
    id: number;
    message: string;
    type: NotificationType;
}

interface NotificationProps {
    item: NotificationItem;
    onRemove: (id: number) => void;
}

export function NotificationItem({ item, onRemove }: NotificationProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true));

        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => onRemove(item.id), 300);
        }, 4000);

        return () => clearTimeout(timer);
    }, [item.id, onRemove]);

    const containerClass = [
        styles.container,
        styles[item.type],
        visible ? styles.visible : '',
    ].join(' ');

    return (
        <div
            className={containerClass}
            onClick={() => {
                setVisible(false);
                setTimeout(() => onRemove(item.id), 300);
            }}
        >
            <span className={styles.message}>{item.message}</span>
            <span className={styles.close}>X</span>
        </div>
    );
}