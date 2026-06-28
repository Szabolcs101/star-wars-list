'use client';
import React, { useEffect, useState } from 'react';
import styles from './toast.module.css';

export type ToastType = 'info' | 'error' | 'success';

export interface ToastItem {
    id: number;
    message: string;
    type: ToastType;
}

interface ToastProps {
    item: ToastItem;
    onRemove: (id: number) => void;
}

export function ToastItem({ item, onRemove }: ToastProps) {
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