import Image from 'next/image';
import Link from 'next/link';
import { Popover } from '@base-ui/react/popover';
import styles from './card-item-favorites.module.css';

interface CardItemFavoritesProps {
    id: string | number;
    imageUrl: string;
    title: string;
    href: string;
}

export default function CardItemFavorites({ id, imageUrl, title, href }: CardItemFavoritesProps) {
    return (
        <Popover.Root>
            <Popover.Trigger openOnHover className={styles.trigger}>
                <Link href={`/${href}/${id}`}>
                    <div className={styles.card}>
                        <Image
                            className={styles.cardImg}
                            src={imageUrl}
                            alt={title}
                            width={218}
                            height={327}
                        />
                    </div>
                </Link>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Positioner sideOffset={8}>
                    <Popover.Popup className={styles.popup}>
                        <Popover.Arrow className={styles.arrow} />
                        <Popover.Title className={styles.title}>{title}</Popover.Title>
                    </Popover.Popup>
                </Popover.Positioner>
            </Popover.Portal>
        </Popover.Root>
    );
}