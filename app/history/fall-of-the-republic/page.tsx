import { SvgRepublicSolid } from '@/app/components/icons/icons';
import styles from '../detailed-historypage.module.css';
import Image from 'next/image';

export default function FallOfTheRepublicPage() {
    return (
        <div>
            <div className={styles.page}>
                <h2 className={styles.title}>The Fall Of The Republic</h2>
                <SvgRepublicSolid className={styles.icon} />

                <div className={styles.tab}>
                    <h4 className={styles.tabElement}>CANON</h4>
                </div>

                <div className={styles.contentParagraph}>
                    <h4 className={styles.header}>Contents</h4>
                    <ol>
                        <li><a href='#h1'>The rise of Darth Sidious</a></li>
                        <li><a href='#h2'>The Separatists and the Clone Wars</a></li>
                        <li><a href='#h3'>Order 66 and the fall of the Jedi</a></li>
                    </ol>
                </div>

                <div className={styles.content}>
                    <details className={styles.paragraph}>
                        <summary id='h1' className={styles.header}>The Rise of Darth Sidious</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                After Darth Bane created his new Sith Order and the rule of two, the Sith stayed in the shadows for 1000 years, growing in power, while the jedi falsely believed
                                that the Sith has been eliminated. For generations, Sith Masters trained apprentices in secret, patiently preparing for the moment when they would destroy the Republic from within.
                                Darth Sidious was a Sith master under the rule of two. Sidious, under the mask of Palpatine, was getting more and more famous and important as a politic figure in the galaxy. First,
                                he became the senator of Naboo.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/palpatine.jpg'} alt='palpatine' height={300} width={200} />
                                <p className={styles.imageDescription}>Sidious, under the mask of Palpatine Chancellor</p>
                            </div>
                            <p>
                                Then he orchestrated an event later known as the Naboo Crisis in 32 BY. At the time, the Trade Federation was one of the most powerful commercial organizations in the galaxy.
                                Like several other megacorporations, it possessed its own fleet and army of battle droids. In response to new taxation policies imposed by the Galactic Senate on trade routes
                                in the Outer Rim, the Trade Federation protested by placing a blockade around the peaceful world of Naboo, preventing supplies and ships from entering or leaving the system.
                                Publicly, the Federation claimed the blockade was a legal protest against unfair taxation. In reality, its leaders—Viceroy Nute Gunray and his advisors—were secretly following orders from Darth Sidious,
                                who manipulated the situation in order to create political chaos within the Republic.
                                Naboo was ruled by Queen Padmé Amidala, a young but determined leader who attempted to resolve the crisis through diplomacy. When the blockade began threatening the planet's population, the Republic Senate sent two
                                Jedi—Qui-Gon Jinn and his apprentice Obi-Wan Kenobi—to negotiate with the Trade Federation. Meanwhile, the Federation invaded the planet with their droid army.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/separatists.jpg'} alt='amidala captured' height={300} width={500} />
                                <p className={styles.imageDescription}>Padmé Amidala, captured by the Separatist leaders</p>
                            </div>
                            <p>
                                Amidala was captured but rescued by the two Jedi, and after that, they escaped to Coruscant. While there, Qui-Gon discovered a young slave boy named Anakin Skywalker, whose extraordinarily strong connection to the Force convinced
                                Qui-Gon that the boy might be the Chosen One foretold in Jedi prophecy. After repairing their ship, the group continued to Coruscant, where Queen Amidala appealed to the Galactic Senate for help in liberating Naboo. However, the Senate was
                                deeply divided and heavily influenced by political corruption and corporate interests. As a result, the Senate failed to take immediate action.
                                Frustrated by the Senate's inaction, Amidala called for a vote of no confidence against the current Supreme Chancellor, Finis Valorum, accusing him of being unable to control the growing corruption within the government. The vote succeeded,
                                forcing Valorum from office and creating an opportunity for a new Chancellor to be elected. Sidious, who used this conflict to get more power, was voted as the new Chancellor.
                                Amidala, along with the Gungangs defeated the droid army of the Federation, and liberated Naboo. Meanwhile Qui-Gon and Obi-Wan confronted Darth Maul, the Sith apprentice of Sidious. In the duel,
                                Maul killed Qui-Gon, but Obi-Wan avenged his master, although the Sith didn't die.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/duel-of-the-fates.jpg'} alt='duel of the fates' height={300} width={500} />
                                <p className={styles.imageDescription}>The legendary duel between Darth Maul, Qui-Gon Jinn and Obi-Wan Kenobi</p>
                            </div>
                        </div>
                    </details>

                    <details className={styles.paragraph}>
                        <summary id='h2' className={styles.header}>The Separatists and the Clone Wars (22 BY - 19 BY)</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                Over the next decade, the Republic became increasingly unstable. Many star systems grew frustrated with the Senate's corruption and inefficiency.
                                This dissatisfaction eventually led to the creation of a massive separatist movement led by Count Dooku, a former Jedi Master who had secretly become Sidious's Sith apprentice, Darth Tyranus.
                                Dooku united numerous corporations—including the Trade Federation, the Techno Union, and the Banking Clan—into a political alliance known as the Confederacy of
                                Independent Systems, commonly called the Separatists. Thousands of star systems announced their intention to leave the Republic, pushing the galaxy toward civil war.
                                Unbeknownst to the Republic, both sides of the conflict were secretly controlled by Darth Sidious.
                                Years earlier, Sidious had ordered the creation of a massive clone army on the planet Kamino, using the bounty hunter Jango Fett as the genetic template.
                                The army had been secretly prepared for the Republic without the knowledge of the Senate or the Jedi Order.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/clones.jpg'} alt='clone army' height={300} width={500} />
                                <p className={styles.imageDescription}>The clone army on Kamino</p>
                            </div>
                            <p>
                                The Clone Wars between the Republic and the Separatists officially broke out in 22 BY in the planet Geonosis.
                                After discovering that the Separatists were secretly building a massive droid army on the desert world of Geonosis, the Jedi Order attempted to capture Count Dooku. A large group of Jedi traveled to the planet but were quickly surrounded by Separatist forces inside a Geonosian arena.
                                Hundreds of Jedi were nearly killed before reinforcements arrived. At the last moment, the Republic deployed a newly discovered clone army that had been secretly created on the planet Kamino. Led by Jedi generals such as Yoda, Mace Windu, and Obi-Wan Kenobi, the clone troopers launched a massive assault on the planet.
                                Although the Republic managed to rescue the surviving Jedi, Count Dooku escaped the battle. The conflict on Geonosis marked the first major engagement of the Clone Wars and the first time the Republic had fielded a large military force in centuries.
                                In the battle of Geonosis, Mace Windu beheaded Jango Fett, while Dooku successfully incapacitated Obi-Wan and Anakin, but was forced to retreat when Yoda arrived.
                                From this point forward, the galaxy descended into full-scale war.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/geonosis.jpg'} alt='battle of geonosis' height={300} width={500} />
                                <p className={styles.imageDescription}>The battle of Geonosis</p>
                            </div>
                            <p>
                                In the early years of the conflict, the Republic relied heavily on its clone army, which was composed of genetically identical soldiers trained for combat since birth. The Jedi Order took command of the Republic military, serving as generals and battlefield commanders across thousands of systems.
                                One of the most successful Jedi commanders during the war was Anakin Skywalker, the former slave from Tatooine who had been trained by Obi-Wan Kenobi. Anakin became famous for his aggressive tactics and exceptional piloting skills. During the war he also trained a Padawan learner named Ahsoka Tano, who served beside him in many major campaigns.
                                Several important battles took place during this phase of the war, including conflicts on worlds such as Christophsis, Umbara, Ryloth, and Kashyyyk. Republic and Separatist fleets clashed across the galaxy while armies fought brutal ground wars on countless planets.
                                Despite the Republic's victories, the war gradually expanded and became increasingly destructive. Entire systems were devastated as both sides deployed massive armies and advanced weaponry.
                            </p>
                            <p>
                                The Separatist military was commanded by General Grievous, a cybernetic warlord who became infamous for his ruthless tactics and his habit of collecting the lightsabers of defeated Jedi. Grievous led many of the Separatist offensives throughout the war, launching devastating attacks against Republic worlds and military installations.
                                Under his leadership, the Separatists were able to prolong the conflict and inflict enormous losses on the Republic.
                                Meanwhile, Count Dooku continued directing the political and military strategy of the Confederacy while secretly reporting to Darth Sidious, who manipulated both sides of the war from the shadows.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/dooku.jpeg'} alt='dooku' height={300} width={500} />
                                <p className={styles.imageDescription}>Count Dooku</p>
                            </div>
                            <p>
                                Late in the war, the planet Mandalore became the center of another major conflict. The criminal leader Maul, who had survived his earlier defeat on Naboo, had seized control of Mandalore through a powerful criminal alliance known as the Shadow Collective.
                                Republic forces eventually launched a campaign to capture Maul during the Siege of Mandalore. The operation was led by Ahsoka Tano and clone commander Rex, who managed to defeat and capture Maul after a fierce battle.
                                At the same time, however, the final phase of Darth Sidious's plan was already underway.
                            </p>
                            <p>
                                Near the end of the war, the Separatists launched a massive assault on Coruscant, the capital of the Republic. During the battle, General Grievous kidnapped Supreme Chancellor Palpatine, forcing the Republic to mount a rescue mission.
                                Anakin Skywalker and Obi-Wan Kenobi infiltrated the Separatist flagship and confronted Count Dooku. During the duel that followed, Anakin defeated and killed Dooku at Palpatine's command. With the death of Sidious's apprentice, the Sith Lord began preparing his next apprentice: Anakin himself.
                                Although the Republic rescued Palpatine, the war continued for a short time longer as Sidious prepared to execute the final stage of his plan.
                            </p>
                        </div>
                    </details>

                    <details className={styles.paragraph}>
                        <summary id='h2' className={styles.header}>Order 66 and the fall of the Jedi</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                Soon after Dooku was defeated by Anakin, Obi-Wan went to Utapau to confront the other important general of the Separatist army, Grievous. In the battle, Obi-Wan managed to destroy the cyborg. With the death of the
                                two most important figures behind the Separatists, their alliance was doomed to collapse.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/obi-grievous.jpg'} alt='obi and grievous' height={300} width={500} />
                                <p className={styles.imageDescription}>The final showdown of Obi-Wan and Grievous</p>
                            </div>
                            <p>
                                Throughout the Clone Wars, Palpatine developed a close relationship with Anakin, acting as a mentor and confidant. He encouraged Anakin's frustrations with the Jedi Council and exploited the young Jedi's fear of losing the people he loved.
                                Anakin was particularly troubled by visions of his wife, Padmé Amidala, dying during childbirth. Knowing this fear could be used to manipulate him, Sidious slowly convinced Anakin that the dark side of the Force held the power to prevent death.
                                Eventually, Palpatine revealed his true identity to Anakin as Darth Sidious, the Dark Lord of the Sith.
                                At first Anakin reported this revelation to the Jedi Council. However, when Jedi Master Mace Windu attempted to arrest and execute Sidious, Anakin intervened, believing that the Sith Lord was the only person who could teach him how to save Padmé.
                                Anakin helped Sidious defeat Windu and pledged himself to the Sith, becoming Darth Vader.
                                This moment marked the true beginning of the Republic's fall.
                            </p>
                            <p>
                                With Anakin now serving him, Sidious initiated the final phase of his plan.
                                Unknown to the Jedi, the clone army contained secret programming that could be activated through a command known as Order 66. When this order was issued, the clones were compelled to immediately turn on their Jedi commanders and execute them as traitors to the Republic.
                                Across the galaxy, clone soldiers suddenly opened fire on the Jedi who had led them throughout the war. Hundreds of Jedi were killed within minutes.
                                At the same time, Darth Vader led the 501st Legion of clone troopers to the Jedi Temple on Coruscant. There he personally led the massacre of the Jedi who remained within the temple, including many young trainees.
                                After the destruction of the Jedi temple, Sidious ordered him to the Mustafar to finish off the remaining Separatist leaders.
                                The Jedi Order, which had protected the Republic for thousands of years, was almost completely destroyed in a single night.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/order66.jpg'} alt='order 66' height={300} width={500} />
                                <p className={styles.imageDescription}>Commander Cody, personally getting Order 66 from Sidious himself</p>
                            </div>
                            <p>
                                With the Jedi eliminated and the Separatist leadership assassinated by Darth Vader on the volcanic world of Mustafar, the Clone Wars came to an end.
                                Palpatine then addressed the Galactic Senate and declared that the Jedi had attempted to overthrow the Republic. Using the fear and chaos created by the war, he announced that the Republic would be reorganized into the First Galactic Empire, with himself as Emperor.
                                The Senate applauded the decision, believing it would finally bring stability to the galaxy.
                                Only a handful of Jedi survived the purge, including Yoda and Obi-Wan Kenobi, who would later go into exile to protect the children of Anakin Skywalker—Luke and Leia.
                                Meanwhile, Anakin, now Darth Vader almost died on Mustafar after he lost a duel against his old mentor, Obi-Wan. After Kenobi left him with his grievous injuries, Sidious rescued his apprentice and encased him in the iconic black armor that would sustain his life.
                                With Vader at his side and the Jedi destroyed, Emperor Palpatine finally achieved the goal the Sith had pursued for a thousand years: the complete domination of the galaxy.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}
