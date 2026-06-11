"use client";
import { useState, useEffect } from "react";
import { useLists } from "@/app/context/list-context";
import styles from "../../css-modules/page-detailed.module.css";

interface Props {
    itemId: string;
}

export default function UserScore({ itemId }: Props) {
    const { getEntry, updateScore } = useLists();

    const entry = getEntry(itemId);
    const canScore = entry?.status === "finished" || "current";
    const userScore = entry?.score ?? null;

    const [localScore, setLocalScore] = useState(userScore ?? "");

    useEffect(() => {
        setLocalScore(userScore ?? "");
    }, [userScore]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value) && value >= 1 && value <= 10) {
            setLocalScore(value);
            updateScore(itemId, value);
        }
    };

    return (
        <div className={styles.detail}>
                <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="10"
                    value={localScore}
                    onChange={handleChange}
                    disabled={!canScore}
                    className={styles.scoreInput}
                    placeholder={'Rate'}
                />
        </div>
    );
}