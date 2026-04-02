import { SvgGmailIcon } from '../components/icons/icons'
import styles from './contact-card.module.css'

export default function ContactCard() {
  return (
    <div className={styles.card}>
        <SvgGmailIcon className={styles.gmail}/>
        <h4 className={styles.title}>Contact</h4>
        <p className={styles.description}>For information about the app, or improvement suggestions, please contact</p>
        <p className={styles.text}>example@gmail.com</p>
    </div>
  )
}
