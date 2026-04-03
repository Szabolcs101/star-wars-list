import Link from 'next/link';
import { SvgLogoSolid } from '../icons/fontawesome';
import styles from './header.module.css';
import HamburgerMenu from './_components/hamburger-menu/hamburger';
import LoginMenu from '../menu/login-menu/login-menu';
import ListHoverMenu from './_components/list-hover/list-hover';
import SearchCombobox from './_components/combobox/combobox';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.desktop}>
                <div className={styles.headerRow}>
                    <Link href='/'>
                        <button className={styles.fullLogo}>
                            <SvgLogoSolid className={styles.logo} />
                            <p className={styles.logoText}>STAR WARS DATABASE</p>
                        </button>
                    </Link>
                </div>

                <div className={styles.menuRow}>
                    <nav className={styles.navBar}>
                        <Link href='../../movies' className={styles.navBarItem}>Movies</Link>
                        <Link href='../../series' className={styles.navBarItem}>Series</Link>
                        <Link href='../../games' className={styles.navBarItem}>Games</Link>
                        <Link href='../../books' className={styles.navBarItem}>Books</Link>
                        <Link href='../../history' className={styles.navBarItem}>History</Link>
                        <ListHoverMenu />
                    </nav>
                </div>

                <div className={styles.rightRow}>
                    <div className={styles.searchBar}>
                        <SearchCombobox />
                    </div>

                    <div className={styles.loginButton}>
                        <LoginMenu />
                    </div>
                </div>
            </div>

            <div className={styles.mobile}>
                <button className={styles.fullLogo}>
                    <SvgLogoSolid className={styles.logo} />
                    <p className={styles.logoText}>STAR WARS DATABASE</p>
                </button>
                <HamburgerMenu />
            </div>
        </header>
    )
}
