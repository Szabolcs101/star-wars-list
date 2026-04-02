import { SvgRebelSolid } from '@/app/components/icons/icons';
import styles from '../detailed-historypage.module.css';
import Image from 'next/image';

export default function RebellionPage() {
    return (
        <div className={styles.page}>
            <h2 className={styles.title}>Age of Rebellion</h2>
            <SvgRebelSolid className={styles.icon} />

            <div className={styles.tab}>
                <h4 className={styles.tabElement}>CANON</h4>
            </div>

            <div className={styles.contentParagraph}>
                <h4 className={styles.header}>Contents</h4>
                <ol>
                    <li><a href='#h1'>Age of Rebellion</a></li>
                </ol>
            </div>

            <div className={styles.content}>
                <details className={styles.paragraph}>
                    <summary id='h1' className={styles.header}>Age of Rebellion (2 BY - 5 AY)</summary>
                    <div className={styles.paragraphWrapper}>
                        <p>
                            By the early years of the Galactic Empire, opposition to Imperial rule had grown across the galaxy. Numerous small resistance groups had formed on different worlds, but these movements were initially disorganized and lacked the strength to challenge the Empire's massive military. This began to change in 2 BBY, when several of these cells
                            united to form a single coordinated resistance known as the Rebel Alliance.
                            The Alliance was largely organized through the secret efforts of former Republic senators such as Mon Mothma and Bail Organa, who had long opposed Emperor Sheev Palpatine's increasingly
                            authoritarian rule. When the Empire began openly crushing dissent within the Senate, Mothma publicly denounced the Emperor and went into hiding, becoming one of the main
                            political leaders of the rebellion. Under her leadership, the Rebel Alliance began coordinating military operations against Imperial targets across the galaxy.
                            Although the Alliance remained far smaller than the Empire's forces, it relied on mobility, secrecy, and support from sympathetic systems. Rebel cells attacked Imperial supply
                            lines, sabotaged military installations, and attempted to undermine Imperial authority wherever possible.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/rebels.jpg'} alt='rebel alliance' height={300} width={500} />
                            <p className={styles.imageDescription}>The Rebel Alliance</p>
                        </div>
                        <p>
                            In response to growing resistance, the Empire began constructing an enormous superweapon known as the Death Star. This battle station possessed the
                            power to destroy entire planets with a single shot, allowing the Empire to rule through fear. Emperor Palpatine intended the Death Star to eliminate
                            any remaining opposition by demonstrating the consequences of rebellion.
                            The station was commanded by Grand Moff Wilhuff Tarkin, one of the Empire's most ruthless military leaders. To prove the weapon's effectiveness, Tarkin ordered the destruction of the peaceful
                            world of Alderaan, killing billions of civilians and demonstrating the Empire's willingness to use extreme force.
                            However, the Rebel Alliance managed to obtain the station's technical plans through a dangerous mission carried out by a group of rebel operatives. These plans revealed a
                            small structural weakness within the station's design.
                            Soon afterward, the Rebels launched a desperate attack against the Death Star during the Battle of Yavin. A small fleet of Rebel starfighters assaulted the station while
                            it prepared to destroy the Rebel base on Yavin IV. During the battle, a young pilot named Luke Skywalker, the son of Anakin Skywalker, successfully fired a torpedo into the station's vulnerable reactor shaft.
                            The resulting explosion destroyed the Death Star and killed Grand Moff Tarkin. The victory at Yavin was the Rebel Alliance's first major triumph against the Empire
                            and proved that the Imperial military was not invincible.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/death-star.jpg'} alt='the death star' height={300} width={500} />
                            <p className={styles.imageDescription}>The Death Star</p>
                        </div>
                        <p>
                            After the destruction of the Death Star, the conflict between the Empire and the Rebel Alliance expanded into a full-scale galactic war. Imperial forces intensified their efforts to locate and destroy the Rebel leadership, while the Rebels continued launching attacks against key Imperial facilities.
                            One of the most important early confrontations occurred on the icy world of Hoth, where the Rebels had established a hidden base. Imperial forces, led personally by Darth Vader, discovered the base and launched a massive assault during the Battle of Hoth.
                            Although the Rebels were eventually forced to evacuate the planet, most of their fleet and leadership managed to escape. The battle demonstrated the Empire's overwhelming military strength but also showed that the Rebel Alliance was capable of surviving even against such powerful attacks.
                            During this period, Luke Skywalker began training in the ways of the Force under the guidance of the Jedi Master Yoda, one of the last surviving members of the old Jedi Order. As Luke developed his abilities, he also learned the truth about Darth Vader: the Sith Lord was actually his father, Anakin Skywalker,
                            who had fallen to the dark side during the final days of the Republic.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/luke-yoda.jpg'} alt='luke and yoda' height={300} width={500} />
                            <p className={styles.imageDescription}>Luke Skywalker with Yoda</p>
                        </div>
                        <p>
                            In the years following the Battle of Hoth, the Empire began constructing a second Death Star, even larger and more powerful than the first.
                            Emperor Palpatine personally oversaw the project, believing that its completion would allow him to finally crush the Rebel Alliance.
                            The Rebels eventually learned of the new battle station, which was being built in orbit around the forest moon of Endor. The station was protected by a powerful shield generator located on the moon's surface.
                            The Alliance launched a massive operation to destroy the station before it could become fully operational. A Rebel strike team was sent to Endor to disable the shield generator, while the main
                            Rebel fleet prepared to attack the Death Star itself.
                            However, the operation had been anticipated by the Emperor, who had deliberately allowed the Rebels to discover the station in order to trap and destroy their fleet. As the
                            Rebel fleet entered the system, it was ambushed by a large Imperial armada commanded by Darth Vader and the Emperor.
                            Despite the trap, the Rebel ground forces on Endor succeeded in destroying the shield generator with the help of the native Ewoks, allowing the Rebel fleet to attack the station directly.
                            Meanwhile, aboard the Death Star, Luke Skywalker confronted Darth Vader and Emperor Palpatine. The Emperor attempted to turn Luke to the dark side, hoping to
                            replace Vader with a new apprentice. When Luke refused, Palpatine attacked him with powerful Force lightning.
                            In the end, Darth Vader turned against his master to save his son. He killed Emperor Palpatine by throwing him into the Death Star's reactor shaft, but was
                            mortally wounded in the process. Before dying, Anakin Skywalker was briefly redeemed, returning to the light side of the Force.
                            With the Emperor dead and the Rebel fleet attacking its core systems, the second Death Star was destroyed during the Battle of Endor.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/luke-vader.jpg'} alt='luke and vader' height={300} width={500} />
                            <p className={styles.imageDescription}>The final duel between father and son</p>
                        </div>
                        <p>
                            Although the Emperor's death was a devastating blow to the Empire, the war did not end immediately. Imperial forces continued fighting across the galaxy as rival commanders attempted to maintain control over their territories.
                            However, without Palpatine's leadership, the Empire quickly began to fracture. Several major Imperial defeats followed, as more star systems joined the rebellion and Imperial authority weakened.
                            The final major confrontation occurred during the Battle of Jakku in 5 ABY, where the remaining Imperial fleet attempted one last decisive attack against the forces of the newly forming New Republic. 
                            The battle ended in a catastrophic defeat for the Empire, forcing the surviving Imperial leadership to surrender and sign a peace treaty with the New Republic.
                            With the defeat at Jakku, the Galactic Empire officially collapsed, ending more than two decades of Sith rule over the galaxy.
                            The Rebel Alliance had succeeded in restoring freedom to much of the galaxy, though the aftermath of the war would lead to new conflicts and challenges in the years that followed.
                        </p>
                    </div>
                </details>
            </div>

        </div>
    )
}
