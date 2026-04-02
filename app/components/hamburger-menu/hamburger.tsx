import { Menu } from '@base-ui/react/menu';
import styles from './hamburger.module.css';
import { SvgBarsSolid } from '../icons/fontawesome';
import LoginMenu from '../menu/login-menu/login-menu';

export default function HamburgerMenu() {
    return (
        <Menu.Root>
            <Menu.Trigger className={styles.button}>
                <SvgBarsSolid className={styles.hamburgerIcon} />
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner className={styles.positioner} sideOffset={8}>
                    <Menu.Popup className={styles.popup}>
                        <Menu.LinkItem href='/movies' className={styles.item}>Movies</Menu.LinkItem>
                        <Menu.LinkItem href='/series' className={styles.item}>Series</Menu.LinkItem>
                        <Menu.LinkItem href='/games' className={styles.item}>Games</Menu.LinkItem>
                        <Menu.LinkItem href='/books' className={styles.item}>Books</Menu.LinkItem>
                        <Menu.Separator className={styles.separator} />
                        <Menu.LinkItem href='/history' className={styles.item}>History</Menu.LinkItem>
                        <Menu.Separator className={styles.separator} />
                        <Menu.LinkItem href='/lists/movielist' className={styles.item}>My Lists</Menu.LinkItem>
                        <Menu.Separator className={styles.separator} />
                        <Menu.LinkItem className={styles.item}><LoginMenu />Login</Menu.LinkItem>
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    );
}
