"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@base-ui/react";
import Image from "next/image";
import { useLists, ItemStatus } from "@/app/context/list-context";
import styles from "./list-item-dialog.module.css";

type MediaItem = {
    id: string;
    title: string;
    imageUrl?: string;
    type?: string;
    total?: number;
};

type Props = {
    item: MediaItem;
    open: boolean;
    onClose: () => void;
};

const STATUS_OPTIONS: { label: string; value: NonNullable<ItemStatus> }[] = [
    { label: "Planning", value: "planned" },
    { label: "Current", value: "current" },
    { label: "Completed", value: "finished" },
];

export default function MediaEditDialog({ item, open, onClose }: Props) {
    const { getEntry, setStatus, updateScore, updateEntry, removeItem } = useLists();

    const entry = getEntry(item.id);

    const [localStatus, setLocalStatus] = useState<NonNullable<ItemStatus>>(
        entry?.status ?? "planned"
    );
    const [localScore, setLocalScore] = useState<number | "">(entry?.score ?? "");
    const [localProgress, setLocalProgress] = useState<number>(entry?.progress ?? 0);

    useEffect(() => {
        if (open) {
            setLocalStatus(entry?.status ?? "planned");
            setLocalScore(entry?.score ?? "");
            setLocalProgress(entry?.progress ?? 0);
        }
    }, [open, entry]);

    const total = item.total ?? 0;
    const scoreEnabled = localStatus === "current" || localStatus === "finished";

    const handleStatusChange = (newStatus: NonNullable<ItemStatus>) => {
        setLocalStatus(newStatus);
        if (newStatus === "finished" && total > 0) {
            setLocalProgress(total);
        } else if (newStatus === "planned") {
            setLocalProgress(0);
        }
    };

    const handleProgressChange = (value: number) => {
        const clamped = Math.max(0, total > 0 ? Math.min(value, total) : value);
        setLocalProgress(clamped);

        if (clamped === 0) {
            setLocalStatus("planned");
        } else if (total > 0 && clamped >= total) {
            setLocalStatus("finished");
        } else if (clamped > 0) {
            setLocalStatus("current");
        }
    };

    const handleSave = async () => {
        await setStatus(item.id, localStatus);

        if (localScore !== "" && scoreEnabled) {
            updateScore(item.id, localScore as number);
        }

        updateEntry(item.id, { progress: localProgress });
        onClose();
    };

    const handleDelete = () => {
        removeItem(item.id);
        onClose();
    };

    return (
        <Dialog.Root open={open} onOpenChange={(isOpen) => { if (!isOpen) onClose(); }}>
            <Dialog.Portal>
                <Dialog.Backdrop className={styles.backdrop} />
                <Dialog.Popup className={styles.popup}>

                    <div className={styles.header}>
                        <div>
                            <Image
                                src={item.imageUrl || "/placeholder.svg"}
                                alt={item.title}
                                width={80}
                                height={110}
                            />
                        </div>
                        <div className={styles.titleBlock}>
                            <Dialog.Title className={styles.title}>{item.title}</Dialog.Title>
                            {item.type && <span className={styles.typeBadge}>{item.type}</span>}
                        </div>
                    </div>

                    <div className={styles.fields}>
                        <div className={styles.field}>
                            <label className={styles.label}>Status</label>
                            <select
                                className={styles.select}
                                value={localStatus}
                                onChange={(e) => handleStatusChange(e.target.value as NonNullable<ItemStatus>)}
                            >
                                {STATUS_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Score</label>
                            <input
                                type="number"
                                step="0.1"
                                min="1"
                                max="10"
                                placeholder="—"
                                disabled={!scoreEnabled}
                                value={localScore}
                                onChange={(e) => {
                                    const val = parseFloat(e.target.value);
                                    if (!isNaN(val) && val >= 1 && val <= 10) {
                                        setLocalScore(val);
                                    } else if (e.target.value === "") {
                                        setLocalScore("");
                                    }
                                }}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Progress</label>
                            <div>
                                <input
                                    type="number"
                                    min="0"
                                    max={total > 0 ? total : undefined}
                                    value={localProgress}
                                    onChange={(e) => handleProgressChange(parseInt(e.target.value) || 0)}
                                    className={styles.input}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.btnDelete} onClick={handleDelete}>
                            Delete
                        </button>
                        <div className={styles.actionsRight}>
                            <Dialog.Close className={styles.btnCancel}>
                                Cancel
                            </Dialog.Close>
                            <button className={styles.btnSave} onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    </div>

                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
}