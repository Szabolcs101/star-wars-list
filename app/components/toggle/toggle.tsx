'use client';
import { Toggle } from '@base-ui/react/toggle';
import styles from './toggle.module.css';
import { HeartFilledIcon, HeartOutlineIcon } from '../icons/icons';

export default function FavoriteToggle() {
    return (
        <div className={styles.panel}>
            <Toggle
                aria-label="Favorite"
                className={styles.button}
                render={(props, state) => {
                    if (state.pressed) {
                        return (
                            <button type="button" {...props}>
                                <HeartFilledIcon className={styles.icon} />
                            </button>
                        );
                    }

                    return (
                        <button type="button" {...props}>
                            <HeartOutlineIcon className={styles.icon} />
                        </button>
                    );
                }}
            />
        </div>
    );
}