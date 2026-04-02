import { SvgFirstOrderSolid } from '@/app/components/icons/icons';
import styles from '../detailed-historypage.module.css';
import Image from 'next/image';

export default function FirstOrderPage() {
    return (
        <div className={styles.page}>
            <h2 className={styles.title}>First Order</h2>
            <SvgFirstOrderSolid className={styles.icon} />

            <div className={styles.tab}>
                <h4 className={styles.tabElement}>CANON</h4>
            </div>

            <div className={styles.contentParagraph}>
                <h4 className={styles.header}>Contents</h4>
                <ol>
                    <li><a href='#h1'>First Order</a></li>
                </ol>
            </div>

            <div className={styles.content}>
                <details className={styles.paragraph}>
                    <summary id='h1' className={styles.header}>First Order (5 AY - 35 AY)</summary>
                    <div className={styles.paragraphWrapper}>
                        <p>
                            After the defeat of the Galactic Empire at the Battle of Jakku in 5 ABY, the surviving Imperial leadership signed a peace treaty with the newly formed New Republic.
                            Officially, the Empire had surrendered and the long Galactic Civil War had ended. However, not all Imperial forces accepted defeat. A number of loyal officers and fleets
                            fled into the Unknown Regions, a vast and
                            poorly charted area of the galaxy where the Republic had little presence.
                            Over the following decades, these remnants gradually reorganized themselves into a new military power known as the First Order. Though smaller than the former Empire,
                            the First Order secretly rebuilt its strength in isolation, preparing to eventually return and reclaim control of the galaxy
                            Unknown to most of its leaders, the organization was heavily influenced by the dark side of the Force. The mysterious figure Snoke rose to become the Supreme Leader of
                            the First Order, guiding its expansion and training a new generation of dark side warriors known as the Knights of Ren. In reality, Snoke himself was merely a
                            creation and puppet of the long-hidden Sith Lord Darth Sidious, who had survived his apparent death at the Battle of Endor and secretly manipulated events from the
                            hidden world of Exegol.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/first-order.jpg'} alt='first order' height={300} width={500} />
                            <p className={styles.imageDescription}>The First Order</p>
                        </div>
                        <p>
                            During the years following the Galactic Civil War, Luke Skywalker attempted to rebuild the Jedi Order, training a new group of Force-sensitive
                            students. Among them was his nephew Ben Solo, the son of Leia Organa and Han Solo.
                            However, Ben was secretly manipulated by Snoke, who slowly corrupted the young Jedi and turned him toward the dark side. Eventually Ben destroyed
                            Luke's new Jedi temple and joined the First Order, taking the name Kylo Ren. Most of Luke's students were killed during the destruction of the
                            academy, while a few survivors were hunted down by Kylo Ren and the Knights of Ren.
                            The destruction of the temple deeply traumatized Luke Skywalker. Believing that the Jedi had ultimately brought more harm than good to the galaxy,
                            he went into exile, cutting himself off from the Force and disappearing to the remote world of Ahch-To.
                            Meanwhile, Kylo Ren became one of the First Order's most powerful commanders and the apprentice of Supreme Leader Snoke.
                        </p>
                        <p>
                            Although the New Republic officially controlled most of the galaxy, many of its leaders underestimated the threat posed by the First Order. Because the
                            Republic Senate feared creating another large military like the one that had existed during the Clone Wars, the New Republic maintained only a limited defense force.
                            Recognizing the danger, Leia Organa secretly formed a private military organization known as the Resistance, dedicated to monitoring and opposing the
                            growing power of the First Order. The Resistance operated independently from the Republic government and relied on volunteers, sympathizers, and former
                            Rebel veterans.
                            For years, the Resistance attempted to warn the Republic about the danger posed by the First Order, but most senators dismissed the threat as exaggerated.
                        </p>
                        <p>
                            By 34 ABY, the First Order had secretly constructed a new superweapon called Starkiller Base, built inside a converted planet. This weapon was
                            capable of draining energy from a star and firing it across hyperspace to destroy entire star systems at once.
                            When the First Order finally revealed itself to the galaxy, it did so by launching a devastating attack against the Hosnian system, where
                            the New Republic Senate and its central fleet were located.
                            The Starkiller Base weapon destroyed the system completely, instantly wiping out the leadership and military command of the New Republic.
                            With the Republic's government destroyed in a single attack, the First Order rapidly began occupying large portions of the galaxy.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/starkiller-base.jpg'} alt='Starkiller base' height={300} width={500} />
                            <p className={styles.imageDescription}>The Starkiller Base</p>
                        </div>
                        <p>
                            Despite this devastating blow, the Resistance quickly launched a counterattack against Starkiller Base. During the assault, Resistance pilots
                            successfully destroyed the weapon's central reactor, causing the entire installation to collapse and explode.
                            During these events, Kylo Ren confronted his father Han Solo on the surface of the base. Attempting to prove his loyalty to the dark side,
                            Kylo Ren killed Han Solo, further strengthening his connection to the dark side of the Force.
                            Although the destruction of Starkiller Base was a major victory for the Resistance, the First Order remained a powerful military force
                            and soon launched a campaign to
                            eliminate the Resistance entirely.
                        </p>
                        <p>
                            Soon after the destruction of Starkiller Base, the First Order located the Resistance fleet and pursued it across space in an attempt to wipe it out completely.
                            During this conflict, Rey, a young Force-sensitive scavenger who had begun training in the Force, confronted Supreme Leader Snoke aboard his flagship.
                            During the confrontation, Kylo Ren unexpectedly betrayed his master. Using the Force, he killed Snoke and seized control of the First Order for himself, declaring
                            himself the new Supreme Leader.
                            Although Kylo Ren had eliminated Snoke, the First Order continued its campaign against the Resistance, reducing the once powerful rebellion to only a handful of survivors.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/poe-dameron.jpg'} alt='poe dameron' height={300} width={500} />
                            <p className={styles.imageDescription}>Poe Dameron</p>
                        </div>
                        <p>
                            In 35 ABY, a mysterious broadcast spread across the galaxy announcing the return of Emperor Palpatine. Hidden on the Sith world of Exegol, the resurrected
                            Darth Sidious had secretly built a massive fleet known as the Final Order. These warships were equipped with planet-destroying weapons,
                            capable of enforcing Sith rule across the galaxy once again.
                            Palpatine revealed himself to Kylo Ren and attempted to manipulate him into killing Rey, who had become one of the last remaining Jedi. At the same time,
                            the Resistance discovered the existence of Exegol and began preparing a final assault to prevent the Sith fleet from launching.
                        </p>
                        <p>
                            The final battle took place above the planet Exegol, where the Resistance launched a desperate attack against the Sith fleet before it could leave the planet. 
                            Although the Resistance was heavily outnumbered, fleets from across the galaxy eventually arrived to support them, inspired by the rebellion's determination to 
                            resist tyranny.
                            During the battle, Rey confronted Emperor Palpatine directly. Kylo Ren, who had begun turning back toward the light side of the Force, abandoned the identity of 
                            Kylo Ren and returned to being Ben Solo, aiding Rey in the final confrontation.
                            Palpatine attempted to destroy the Jedi once and for all, but Rey ultimately defeated him by channeling the strength of the Jedi who had come before her.
                            The Emperor was destroyed, and the Sith fleet on Exegol was annihilated.
                            At the same time, the destruction of Palpatine's forces triggered uprisings across the galaxy. Without the leadership of the Sith and facing 
                            widespread rebellion, the First Order rapidly collapsed as systems rose up against its rule.
                            With the defeat of the Final Order and the death of Darth Sidious, the long struggle against Sith domination that had begun generations earlier 
                            finally came to an end, marking the fall of the First Order and the collapse of the last major remnant of the old Empire.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/battle-of-exegol.jpg'} alt='exegol' height={300} width={500} />
                            <p className={styles.imageDescription}>The Battle of Exegol</p>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    )
}
