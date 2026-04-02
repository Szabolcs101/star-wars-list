import { SvgEmpireSolid } from '@/app/components/icons/icons';
import styles from '../detailed-historypage.module.css';
import Image from 'next/image';

export default function EmpirePage() {
    return (
        <div className={styles.page}>
            <h2 className={styles.title}>The Reign Of The Empire</h2>
            <SvgEmpireSolid className={styles.icon} />

            <div className={styles.tab}>
                <h4 className={styles.tabElement}>CANON</h4>
            </div>

            <div className={styles.contentParagraph}>
                <h4 className={styles.header}>Contents</h4>
                <ol>
                    <li><a href='#h1'>The reign of the Empire</a></li>
                </ol>
            </div>

            <div className={styles.content}>
                <details className={styles.paragraph}>
                    <summary id='h1' className={styles.header}>Reign of the Empire (19 BY - 2 BY)</summary>
                    <div className={styles.paragraphWrapper}>
                        <p>
                            With the end of the Clone Wars in 19 BBY, the Galactic Republic was officially transformed into the Galactic Empire under
                            the rule of Emperor Sheev Palpatine, secretly the Sith Lord Darth Sidious. After manipulating the war for years, Sidious had finally achieved
                            the goal the Sith had pursued since the time of Darth Bane: the destruction of the Jedi Order and the complete domination of the galaxy.
                            In the early days of the Empire, Palpatine publicly justified the new regime as a necessary reform designed to ensure peace and stability after the chaos of the Clone Wars.
                            Many citizens of the galaxy, exhausted by years of war, initially supported the new government. The Senate continued to exist, but its power was gradually weakened
                            as authority became increasingly centralized under the Emperor and his military commanders.
                            Behind this appearance of stability, however, the Empire immediately began consolidating absolute control over the galaxy.
                        </p>
                        <p>
                            One of the Empire's first priorities was the complete destruction of the Jedi Order, which Palpatine had declared enemies of the state after accusing them of attempting to overthrow the Republic.
                            Although Order 66 had already killed the majority of Jedi during the final days of the Clone Wars, a number of survivors remained scattered throughout the galaxy. To hunt them down, the Empire created a group of dark side agents known as the Inquisitorius.
                            These Inquisitors, many of whom were former Jedi who had turned to the dark side, were tasked with tracking down surviving Jedi and eliminating any Force-sensitive individuals who might one day threaten the Empire.
                            At the head of the Empire's military forces stood Darth Vader, the Emperor's Sith apprentice and the former Jedi Anakin Skywalker. Vader served as the Emperor's most feared enforcer, personally leading many of the campaigns
                            against surviving Jedi and rebellious systems. During these years, Vader hunted down numerous Jedi who had escaped the initial purge, ensuring that the Order would never recover its former strength.
                            As the Jedi were hunted to extinction, the Empire also worked to erase them from history. Jedi teachings were outlawed, temples were destroyed or abandoned, and knowledge of the Force gradually faded from public awareness.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/inquisitors.jpg'} alt='the inquisitors' height={300} width={700} />
                            <p className={styles.imageDescription}>The Inquisitorius</p>
                        </div>
                        <p>
                            With the Jedi gone, the Empire began reorganizing the structure of galactic governance. The Republic's former democratic institutions were slowly
                            replaced by a more authoritarian system. Large regions of the galaxy were placed under the control of powerful Imperial governors, known as Moffs,
                            who were responsible for maintaining order and loyalty to the Emperor.
                            The Imperial military expanded rapidly during this period. The clone army that had fought in the Clone Wars was gradually replaced by a new force composed of ordinary
                            recruits from across the galaxy.
                            These soldiers became known as stormtroopers, the primary military force used to enforce Imperial rule.
                            At the same time, the Empire began investing enormous resources into massive military construction projects. New fleets of Star Destroyers were built to patrol hyperspace lanes
                            and intimidate rebellious systems. Imperial shipyards and factories expanded across the galaxy, transforming the Empire into the most powerful military force in galactic history.
                            Despite these efforts to maintain control, the Empire's rule quickly became increasingly oppressive. Worlds that resisted Imperial authority were subjected to harsh punishments,
                            heavy taxation, and military occupation. Many planetary governments were replaced entirely by Imperial administrators loyal to the Emperor.
                        </p>
                        <p>
                            Although the Empire appeared powerful, opposition began forming almost immediately after its creation. Many former Republic loyalists and senators secretly opposed the new authoritarian regime. However, open resistance was
                            extremely dangerous, as the Empire's military and intelligence networks were vast and ruthless.
                            Several individuals quietly began organizing small resistance movements against the Empire. One of the most important figures during this time was Bail Organa, the senator from Alderaan,
                            who secretly worked to preserve the ideals of the old Republic. Organa began building connections between various groups that opposed Imperial rule, though these movements initially remained small and poorly organized.
                            Other early opponents included Mon Mothma, another senator who had grown increasingly concerned about the Empire's growing authoritarianism. Although she remained
                            publicly loyal to the Senate for many years, Mothma secretly worked with other leaders to oppose the Emperor's policies.
                            Across the galaxy, smaller rebellions also began to emerge. On several worlds, local populations resisted Imperial occupation, forming militias and insurgent groups.
                            These early rebellions were usually crushed quickly by the Empire, but they demonstrated that opposition to Imperial rule was growing.
                        </p>
                        <p>
                            During this time, Darth Vader became one of the most feared figures in the galaxy. Acting directly under the Emperor's command, Vader carried out missions designed to eliminate threats to the Empire. His presence
                            alone was often enough to terrify both enemies and Imperial officers alike.
                            Vader was frequently sent to investigate rumors of surviving Jedi or secret resistance movements. In many cases, entire rebel cells were destroyed after attracting his attention.
                            Through these brutal actions, Vader helped ensure that the Empire maintained control during its early years.
                            At the same time, Palpatine continued to strengthen the dark side of the Force, consolidating his power as the undisputed ruler of the galaxy.
                        </p>
                         <div className={styles.imageWrapper}>
                            <Image src={'/history/vader-sidious.jpg'} alt='vader and sidious' height={300} width={200} />
                            <p className={styles.imageDescription}>Vader and Sidious</p>
                        </div>
                        <p>
                            Over time, however, opposition to the Empire continued to grow. Imperial oppression, economic exploitation, and the loss of political freedom caused increasing
                            resentment among many systems that had once supported the Republic.
                            Several isolated rebel groups began appearing across the galaxy. These groups operated independently at first, carrying out sabotage missions against Imperial
                            installations or assisting worlds suffering under Imperial occupation.
                            Although these early rebel movements were small and disorganized, they gradually began to communicate and cooperate with one another.
                            Senators such as Bail Organa and Mon Mothma secretly supported these resistance networks while continuing to operate within the Imperial Senate.
                            Their goal was to unite the scattered rebel groups into a single alliance capable of challenging the Empire's power.
                            By the early years of the Empire's reign, it had become clear that the Emperor's promise of peace had come at the cost of freedom across the galaxy.
                            These growing resistance movements would eventually come together to form the Rebel Alliance, marking the beginning of the next major chapter in the struggle against
                            the Galactic Empire.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    )
}
