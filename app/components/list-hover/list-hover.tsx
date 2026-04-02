import { Menu } from '@base-ui/react/menu';
import styles from './list-hover.module.css';

export default function ListHoverMenu() {
    return (
        <Menu.Root>
            <Menu.Trigger openOnHover className={styles.trigger}>
                My Lists
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner className={styles.positioner} sideOffset={8}>
                    <Menu.Popup className={styles.popup}>
                        <Menu.LinkItem href='/lists/movielist' className={styles.item}>Movie List</Menu.LinkItem>
                        <Menu.LinkItem href='/lists/serieslist'className={styles.item}>Series List</Menu.LinkItem>
                        <Menu.LinkItem href='/lists/gamelist' className={styles.item}>Game List</Menu.LinkItem>
                        <Menu.LinkItem href='/lists/booklist' className={styles.item}>Book List</Menu.LinkItem>
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    );
}
