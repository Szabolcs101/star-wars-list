import ThemeToggler from './_components/theme/theme-toggler'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.themeRow}>
                <h3>Theme</h3>
                <ThemeToggler />
            </div>

            <div className={styles.siteRow}>
                <h4 className={styles.siteItem}>
                    Star Wars Site
                </h4>
                <h4 className={styles.siteItem}>
                    Disney+
                </h4>
                <h4 className={styles.siteItem}>
                    Facebook
                </h4>
                <h4 className={styles.siteItem}>
                    X
                </h4>
                <h4 className={styles.siteItem}>
                    YouTube
                </h4>
                <h4 className={styles.siteItem}>
                    Instagram
                </h4>
            </div>
        </footer>
    )
}
