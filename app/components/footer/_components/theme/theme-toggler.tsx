'use client';
import { useTheme } from 'next-themes';
import { SvgLightModeSolid, SvgDarkModeSolid } from '../../../icons/icons';
import styles from './theme-toggler.module.css'
import { useNotification } from '@/app/context/notification-provider';

export default function ThemeToggler() {

    const { theme, setTheme } = useTheme();
    const notif = useNotification();

    const handleTheme = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme);
        notif.info(`${newTheme === 'light' ? 'Light' : 'Dark'} mode enabled.`);
    };

    return (
        <div className={styles.themes}>
            <button className={styles.lightModeIcon} onClick={() => handleTheme('light')}>
                <SvgLightModeSolid />
            </button>
            <button className={styles.darkModeIcon} onClick={() => handleTheme('dark')}>
                <SvgDarkModeSolid />
            </button>
        </div>
    )
}
