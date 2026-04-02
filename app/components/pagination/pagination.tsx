import { SvgChevronLeftSolid, SvgChevronRightSolid } from '../icons/fontawesome';
import styles from './pagination.module.css'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className={styles.pagination}>
            <button className={styles.button} disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
                <SvgChevronLeftSolid />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    className={styles.button}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button className={styles.button} disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
                <SvgChevronRightSolid />
            </button>
        </div>
    );
}