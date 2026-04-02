import Image from 'next/image';
import styles from './card-item-wide.module.css';

interface CardItemWideProps {
    id: string;
    imageUrl: string;
    title?: string;
    name?: string;
    type?: string;
    status?: string;
    relationType?: string;
}

export default function CardItemWide({ id, imageUrl, title, name, type, status, relationType }: CardItemWideProps) {
    return (
        <div className={styles.card}>
            <Image key={id} src={imageUrl} alt={id} width={128} height={271} className={styles.image} />
            <div className={styles.detailsRow}>
                <p className={styles.relationType}>{relationType}</p>
                <h5 className={styles.title}>{title}</h5>
                <h5 className={styles.name}>{name}</h5>
                <p>{type}</p>
                <p className={styles.status}>{status}</p>
            </div>
        </div>
    )
}
