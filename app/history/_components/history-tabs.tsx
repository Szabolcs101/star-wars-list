'use client';
import { useState, ReactNode } from 'react';
import styles from '../detailed-historypage.module.css';

interface HistoryTabsProps {
    children: [ReactNode, ReactNode];
    defaultTab?: 'canon' | 'legends';
}

export default function HistoryTabs({ children, defaultTab = 'canon' }: HistoryTabsProps) {

    const [activeTab, setActiveTab] = useState<'canon' | 'legends'>(defaultTab);

    const [canonContent, legendsContent] = children;

    return (
        <div>
            <div className={styles.tab}>
                <h4
                    className={`${styles.tabElement} ${activeTab === 'canon' ? styles.active : ''}`}
                    onClick={() => setActiveTab('canon')}
                >
                    CANON
                </h4>
                <p>|</p>
                <h4
                    className={`${styles.tabElement} ${activeTab === 'legends' ? styles.active : ''}`}
                    onClick={() => setActiveTab('legends')}
                >
                    LEGENDS
                </h4>
            </div>

            {activeTab === 'canon' ? canonContent : legendsContent}
        </div>
    );
}