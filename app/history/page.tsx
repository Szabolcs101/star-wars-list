import Link from 'next/link';
import { SvgEmpireSolid, SvgFirstOrderSolid, SvgHighRepublicSolid, SvgNewRepublicSolid, SvgOldRepublicSolid, SvgRebelSolid, SvgRepublicSolid } from '../components/icons/icons';
import styles from './historypage.module.css';

export default function HistoryPage() {
    return (
        <div className={styles.historyPage}>
            <div className={styles.eraWrapper}>
                <section className={styles.eraSection}>
                    <div className={styles.era}>
                        <h4 className={styles.title}>Old Republic</h4>
                        <Link href='/history/the-old-republic'>
                            <SvgOldRepublicSolid className={styles.icon} />
                        </ Link>
                    </div>
                    <div className={styles.era}>
                        <h4 className={styles.title}>High Republic</h4>
                        <Link href='/history/high-republic'>
                            <SvgHighRepublicSolid className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.era}>
                        <h4 className={styles.title}>Fall Of The Republic</h4>
                        <Link href='/history/fall-of-the-republic'>
                            <SvgRepublicSolid className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.era}>
                        <h4 className={styles.title}>Reign Of The Empire</h4>
                        <Link href='/history/reign-of-the-empire'>
                            <SvgEmpireSolid className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.era}>
                        <h4 className={styles.title}>Age of Rebellion</h4>
                        <Link href='/history/age-of-the-rebellion'>
                            <SvgRebelSolid className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.era}>
                        <h4 className={styles.title}>The New Republic</h4>
                        <Link href='/history/the-new-republic'>
                            <SvgNewRepublicSolid className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.era}>
                        <h4 className={styles.title}>First Order</h4>
                        <Link href='/history/first-order'>
                            <SvgFirstOrderSolid className={styles.icon} />
                        </Link>
                    </div>
                </section>
            </div>
            <section className={styles.detailedSection}>
                <div>
                    <h3 className={styles.eraTitle}>The Old Republic Era</h3>
                    <p className={styles.description}>A legendary era starting approximately 25,000 years before the battle of Yavin (in Canon), with the foundation of the Old Republic. In Canon, it officially
                        ended in 1032 BBY when the New Republic was formed. In Legends, it ended in 1000 BBY with the Seventh Battle of Ruusan, where Skere Kaan's Sith were
                        destroyed, and the new Sith Order was formed and went into hiding under Darth Bane's rule.
                    </p>
                </div>

                <div>
                    <h3 className={styles.eraTitle}>The High Republic</h3>
                    <p className={styles.description}>
                        In Canon, the High Republic Era lasts around 400 years from 500 BBY to around 100 BBY. In Legends, this era is known as The Golden Age Of The Old
                        Republic (1032-22 BBY). In both versions, it is the era where the Galactic Republic was at it's peak, and the galaxy was a peaceful place. The only
                        notable conflict of the era was the Nihil conflict (232-228 BBY), where a terrorist group called the 'Nihil' aimed to destroy the stability of the
                        Republic and the Jedi Order.
                    </p>
                </div>

                <div>
                    <h3 className={styles.eraTitle}>The Fall Of The Republic</h3>
                    <p className={styles.description}>
                        The Fall Of The Republic era refers to the timeline of the prequel trilogy, where the chancellor of the Galactic Republic, later known as the Emperor,
                        orchestrated a war between the Republic and the Separatists that were led by his Sith apprentice, former Jedi Count Dooku. In the end, the Republic
                        offically 'won' the war, but Sidious successfully took over the Republic, declared himself as the Emperor and reorganized it as the First Galactic
                        Empire.
                    </p>
                </div>

                <div>
                    <h3 className={styles.eraTitle}>Reign Of The Empire</h3>
                    <p className={styles.description}>
                        The reign of the Empire lasts from 19 BBY to 5 ABY, but this era refers to before the Rebel Alliance was officially founded (2 BBY). Under the reign of
                        Darth Sidious, the Empire became a total dictatorship that kept their citizens under full control and fear. Most of the Jedi has been wiped out, with
                        the remaining went into hiding all over the galaxy. To hunt them down, Darth Sidious organized a new group called the 'Inquisitors' directly led by
                        the Sith Darth Vader himself.
                    </p>
                </div>

                <div>
                    <h3 className={styles.eraTitle}>Age Of Rebellion</h3>
                    <p className={styles.description}>
                        The Rebel Alliance was founded in 2 BBY with the goal to oppose the rule of the Galactic Empire and restore the democracy in the galaxy. Officially
                        it was founded by Senator Mon Mothma, but in practice, the Rebellion was the unification of many smaller rebel units all over the galaxy led by
                        numerous people. In 4 ABY, the rebels successfully defeated the Empire and declared the New Galactic Empire.
                    </p>
                </div>

                <div>
                    <h3 className={styles.eraTitle}>The New Republic</h3>
                    <p className={styles.description}>
                        The New Republic was officially founded in 5 ABY, after the Rebel Alliance defeated the Galactic Empire. While the Emperor was supposedly dead,
                        and the Imperial Army was defeated, the rebels didn't manage to completely destroy them. Their remnants went hiding into the Outer Rims, and
                        eventually they returned as the First Order.
                    </p>
                </div>

                <div>
                    <h3 className={styles.eraTitle}>First Order</h3>
                    <p className={styles.description}>
                        The First Order was originally founded from the remnants of the defeated Imperial Army that escaped into the Outer Rims. Officially lead by
                        Supreme Leader Snoke, the real mastermind behind the Order was Darth Sidious himself, who survived the Battle Of Endor. Under his rule, the
                        Order quickly took over the still regrouping New Republic. Eventually the Order was defeated though, and the Republic managed to took over the galaxy
                        once again.
                    </p>
                </div>
            </section>
        </div>
    )
}
