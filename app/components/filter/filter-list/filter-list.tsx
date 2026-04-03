'use client';
import styles from './filter-list.module.css'
import { SvgChevronSolid, SvgSearchSolid, SvgXSolid } from '../../icons/fontawesome'
import FilterSelect from '../filter-list/_components/select/filter-select';
import { useState } from 'react';

interface FilterValues {
    search: string;
    canonStatus: string | null | undefined;
    status: string | null;
    year: string;
    type: string | null;
}

interface FilterListProps {
    filters: FilterValues;
    onFilterChange: (newFilters: Partial<FilterValues>) => void;
    onReset: () => void;
    availableOptions: {
        canonStatus: string[];
        status: string[];
        type: string[];
    };
}

export default function FilterList({ filters, onFilterChange, availableOptions, onReset }: FilterListProps) {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleSelectChange = (key: keyof FilterValues) => (value: string | null) => {
        onFilterChange({ [key]: value });
    }

    const toggleFilters = () => setIsExpanded(prev => !prev);

    return (
        <>
            <div className={styles.desktop}>
                <div className={styles.filterListContainer}>
                    <div className={styles.filterType}>
                        <h4 className={styles.title}>Search</h4>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder='Any'
                                className={styles.searchInput}
                                value={filters.search || ''}
                                onChange={(e) => onFilterChange({ search: e.target.value })}></input>
                            <i><SvgSearchSolid className={styles.searchIcon} /></i>
                        </div>
                    </div>

                    <FilterSelect
                        label="Continuity Status"
                        placeholder="Any"
                        options={[
                            { label: 'Canon', value: 'canon' },
                            { label: 'Legends', value: 'legends' },
                        ]}
                        value={filters.canonStatus}
                        onValueChange={handleSelectChange('canonStatus')}
                    />

                    <FilterSelect
                        label="Airing Status"
                        placeholder="Any"
                        options={availableOptions.status.map((s) => ({
                            label: s === 'released' ? 'Released' : s === 'upcoming' ? 'Upcoming' : s,
                            value: s,
                        }))}
                        value={filters.status}
                        onValueChange={handleSelectChange('status')}
                    />

                    <div className={styles.filterType}>
                        <h4 className={styles.title}>Year</h4>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder='Any'
                                className={styles.searchInput}
                                value={filters.year || ''}
                                onChange={(e) => onFilterChange({ year: e.target.value })}
                            ></input>
                            <i><SvgSearchSolid className={styles.searchIcon} /></i>
                        </div>
                    </div>

                    <FilterSelect
                        label="Type"
                        placeholder="Any"
                        options={availableOptions.type.map((t) => ({ label: t, value: t }))}
                        value={filters.type}
                        onValueChange={handleSelectChange('type')}
                    />

                    <div className={styles.filterType}>
                        <h4 className={styles.reset}>Reset</h4>
                        <SvgXSolid className={styles.resetButton} onClick={onReset} />
                    </div>
                </div>
            </div>

            <div className={styles.mobile}>
                <div className={styles.filterRow}>
                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder='Search...'
                            className={styles.searchInput}
                            value={filters.search || ''}
                            onChange={(e) => onFilterChange({ search: e.target.value })}
                        />
                        <i><SvgSearchSolid className={styles.searchIcon} /></i>
                    </div>

                    <button
                        className={styles.filterToggleButton}
                        onClick={toggleFilters}
                        aria-label="Toggle filters"
                    >
                        <SvgChevronSolid className={styles.filterIcon}/>
                    </button>
                </div>

                {isExpanded && (
                    <div className={styles.mobileFilters}>
                        <FilterSelect
                            label="Continuity Status"
                            placeholder="Any"
                            options={[
                                { label: 'Canon', value: 'canon' },
                                { label: 'Legends', value: 'legends' },
                            ]}
                            value={filters.canonStatus}
                            onValueChange={handleSelectChange('canonStatus')}
                        />

                        <FilterSelect
                            label="Airing Status"
                            placeholder="Any"
                            options={availableOptions.status.map((s) => ({
                                label: s === 'released' ? 'Released' : s === 'upcoming' ? 'Upcoming' : s,
                                value: s,
                            }))}
                            value={filters.status}
                            onValueChange={handleSelectChange('status')}
                        />

                        <div className={styles.filterType}>
                            <h4 className={styles.title}>Year</h4>
                            <div className={styles.searchContainer}>
                                <input
                                    type="text"
                                    placeholder='Any'
                                    className={styles.searchInput}
                                    value={filters.year || ''}
                                    onChange={(e) => onFilterChange({ year: e.target.value })}
                                />
                                <i><SvgSearchSolid className={styles.searchIcon} /></i>
                            </div>
                        </div>

                        <FilterSelect
                            label="Type"
                            placeholder="Any"
                            options={availableOptions.type.map((t) => ({ label: t, value: t }))}
                            value={filters.type}
                            onValueChange={handleSelectChange('type')}
                        />

                        <button className={styles.resetCol} onClick={onReset}>
                            <h4 className={styles.title}>Reset</h4>
                            <SvgXSolid className={styles.resetButton}/>
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
