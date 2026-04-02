'use client';
import { useTheme } from 'next-themes';
import { SvgLightModeSolid, SvgDarkModeSolid } from '../icons/icons';
import styles from './theme-toggler.module.css'

export default function ThemeToggler() {

    const { theme, setTheme } = useTheme();

    return (
        <div className={styles.themes}>
            <button className={styles.lightModeIcon} onClick={() => setTheme('light')}>
                <SvgLightModeSolid />
            </button>
            <button className={styles.darkModeIcon} onClick={() => setTheme('dark')}>
                <SvgDarkModeSolid />
            </button>
        </div>
    )
}
