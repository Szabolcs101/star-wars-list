import { Select, SelectRootChangeEventDetails } from '@base-ui/react/select';
import { Field } from '@base-ui/react/field';
import styles from './filter-select.module.css';
import { SvgChevronSolid } from '../../../../icons/fontawesome';

interface SelectOptionProps {
    label: string;
    value: string;
}

interface SelectComponentProps {
    label: string;
    placeholder?: string;
    options: SelectOptionProps[];
    value?: string | undefined | null;
    onValueChange?: (value: string | null, details?: SelectRootChangeEventDetails) => void;
    className?: string;
}

export default function FilterSelect({ label, placeholder = 'Any..', options, value, onValueChange, className }: SelectComponentProps) {
    return (
        <Field.Root className={`${styles.field} ${className || ''}`}>
            <Field.Label className={styles.label} nativeLabel={false} render={<div />}>
                {label}
            </Field.Label>

            <Select.Root
                items={options}
                value={value}
                onValueChange={onValueChange}
            >
                <Select.Trigger className={styles.select}>
                    <Select.Value className={styles.value} placeholder={placeholder} />
                    <Select.Icon className={styles.selectIcon}>
                        <SvgChevronSolid />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner sideOffset={8}>
                        <Select.Popup className={styles.popup}>
                            <Select.List className={styles.list}>
                                {options.map((option) => (
                                    <Select.Item key={option.value} value={option.value} className={styles.item}>
                                        <Select.ItemText className={styles.itemText}>{option.label}</Select.ItemText>
                                    </Select.Item>
                                ))}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>

            </Select.Root>
        </Field.Root>
    );
}
