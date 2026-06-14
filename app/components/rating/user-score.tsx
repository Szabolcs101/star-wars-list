"use client";
import { useState, useEffect } from "react";
import { useLists } from "@/app/context/list-context";
import styles from "../../css-modules/page-detailed.module.css";
import { SvgStarSolid } from "../icons/fontawesome";

interface Props {
    itemId: string;
    contentTable: string;
}

export default function UserScore({ itemId, contentTable }: Props) {
    const { getEntry, updateScore } = useLists();

    const entry = getEntry(itemId);
    const userScore = entry?.score ?? null;
    const canScore = entry?.status === "finished" || entry?.status === "current";

    const [localScore, setLocalScore] = useState(userScore ?? "");
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        setLocalScore(userScore ?? "");
    }, [userScore]);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        
        if (!isNaN(value) && value >= 1 && value <= 10) {
            setLocalScore(value);
            setIsUpdating(true);
            
            try {
                await updateScore(itemId, value, contentTable);
            } catch (err) {
                console.error("Failed to update score", err);
            } finally {
                setIsUpdating(false);
            }
        }
    };

    return (
        <div className={styles.starContainer}>
            <SvgStarSolid className={styles.ratingStar} />
            <input
                type="number"
                step="0.1"
                min="1"
                max="10"
                value={localScore}
                onChange={handleChange}
                disabled={!canScore || isUpdating}
                className={styles.scoreInput}
                placeholder="Rate"
            />
        </div>
    );
}