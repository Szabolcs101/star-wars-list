'use client';
import { Toggle } from '@base-ui/react/toggle';
import styles from './toggle.module.css';
import { HeartFilledIcon, HeartOutlineIcon } from '../icons/icons';
import { useAuth } from '@/app/context/auth-context';
import { useState, useEffect } from 'react';

interface FavoriteToggleProps {
    itemId: string;
    contentTable: string;
}

export default function FavoriteToggle({ itemId, contentTable }: FavoriteToggleProps) {
    const { user } = useAuth();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (!user?.id) return;
        fetch(`/api/favorites?userId=${user.id}`)
            .then(r => r.json())
            .then((data: { contentId: string }[]) => {
                setIsFavorite(data.some(e => e.contentId === itemId));
            });
    }, [user?.id, itemId]);

    const toggle = async () => {
        if (!user?.id) return;
        const next = !isFavorite;
        setIsFavorite(next);
        await fetch('/api/favorites', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, contentId: itemId, contentTable, isFavorite: next }),
        });
    };

    return (
        <div className={styles.panel}>
            <Toggle
                aria-label="Favorite"
                className={styles.button}
                pressed={isFavorite}
                onPressedChange={toggle}
                render={(props, state) => (
                    <button type="button" {...props}>
                        {state.pressed
                            ? <HeartFilledIcon className={styles.icon} />
                            : <HeartOutlineIcon className={styles.icon} />
                        }
                    </button>
                )}
            />
        </div>
    );
}