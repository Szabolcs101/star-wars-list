'use client';
import { Menu } from '@base-ui/react/menu';
import styles from './menu.module.css';
import { SvgChevronSolid } from '../icons/fontawesome';
import { useLists } from '../../../app/context/list-context';
import { useToast } from '@/app/context/toast-context';

interface ListMenuProps {
    itemId: string;
    contentTable: string;
    currentStatus?: "finished" | "current" | "planned" | null;
}

export default function ListMenu({ itemId, contentTable }: ListMenuProps) {
    const { setStatus, getStatus } = useLists();
    const toast = useToast();

    const status = getStatus(itemId);

    const handleSelect = (newStatus: "planned" | "current" | "finished") => {
        if (status === newStatus) {
            setStatus(itemId, null, contentTable);
        } else {
            setStatus(itemId, newStatus, contentTable);
            toast.success(`Item added to ${status} list.`)
        }
    };

    const getLabel = (s: typeof status) => {
        switch (s) {
            case "planned": return "Planning";
            case "current": return "Current";
            case "finished": return "Completed";
            default: return "Add To List";
        }
    };

    return (
        <Menu.Root>
            <Menu.Trigger className={styles.button}>
                {getLabel(status)} <SvgChevronSolid className={styles.buttonIcon} />
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner sideOffset={8}>
                    <Menu.Popup className={styles.popup}>
                        {(["planned", "current", "finished"] as const).map((s) => (
                            <Menu.Item
                                key={s}
                                className={styles.item}
                                onClick={() => handleSelect(s)}
                            >
                                {getLabel(s)}
                            </Menu.Item>
                        ))}
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    );
}
