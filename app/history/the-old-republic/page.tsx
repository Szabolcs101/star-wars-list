'use client';
import { SvgOldRepublicSolid } from '@/app/components/icons/icons';
import { useState } from 'react';
import styles from '../detailed-historypage.module.css'
import Image from 'next/image';


export default function OldRepublicPage() {
    const [activeTab, setActiveTab] = useState<'canon' | 'legends'>('canon');

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>The Old Republic</h2>
            <SvgOldRepublicSolid className={styles.icon} />

            <div className={styles.tab}>
                <h4 className={styles.tabElement} onClick={() => { setActiveTab('canon') }}>CANON</h4>
                <p>|</p>
                <h4 className={styles.tabElement} onClick={() => { setActiveTab('legends') }}>LEGENDS</h4>
            </div>

            {activeTab === 'canon' ? (
                <div>
                    <div className={styles.contentParagraph}>
                        <h4 className={styles.header}>Contents</h4>
                        <ol>
                            <li><a href='#h1'>Foundation of the Republic</a></li>
                            <li><a href='#h2'>Hundred Year Darkness</a></li>
                            <li><a href='#h3'>Jedi-Sith War</a></li>
                        </ol>
                    </div>

                    <div className={styles.content}>
                        <details className={styles.paragraph}>
                            <summary id='h1' className={styles.header}>Foundation of the Republic</summary>
                            <p>In Canon, our current knowledge about the Old Republic era is very limited. However, we know for sure that around 25025 BBY, the Jedi Order
                                was founded. Around the same time, the Galactic Republic was also founded, along with the Corellian super hyper-route and the Perlemian Trade
                                Route. These decades later became known as the ,,Expansionist Period". In the next thousands of years, many planets joined the Republic, with
                                the most notable ones being the Neimodian and Rodia. Around 12000 BY, the planet Ossus became the Jedi's cultural center. Approximately 10000 BY,
                                the Mandalorian civilization, which later held many wars against the Republic, was formed. Around 5500 BY, the Rimma Trade super hyperroute was
                                estabilished as well.
                            </p>
                        </details>

                        <details className={styles.paragraph}>
                            <summary id='h2' className={styles.header}>Hundred Year Darkness</summary>
                            <p>The Hundred Year Darkness was a period of time around 5000 BY, where a group of remnant Jedi left the Jedi Order. The leader of these
                                force users was an unnamed rogue-jedi who believed that the true power of the Force lay not through contemplation and passivity, and
                                that only by tapping its dark side could its true potential be reached. This Jedi was being cast out by the Jedi Council, but he quickly
                                gained many followers and they found a new order, which eventually became the Sith. This Sith Order quickly started a war with the Jedi,
                                with both sides having many causailities, hence they inexperience with lightsaber duels. Eventually, the Jedi won the war.
                            </p>
                            <p className={styles.paragraph}>
                                Not many years after the hundred year darkness, another huge conflict took place, known as The Great Hyperspace War. This conflict started by
                                the Sith Invasion of the planet Empress Teta, and the conflict was named after the hyperdrive technology, which was invented by the Sith.
                                Eventually, the Sith that was led by Sith Lord Naga Sadow was defeated.
                            </p>
                        </details>

                        <details className={styles.paragraph}>
                            <summary id='h3' className={styles.header}>Jedi-Sith War</summary>
                            <p>Although many wars happened between the Jedi and the Sith over the thousands of years of the Old Republic, in Canon, we don't have many
                                details about these conflicts. The Jedi-Sith War refers to the last big conflict between the two. The war ended with a final battle over
                                the planet Ruusan, which resulted in the destruction of the Brotherhood of Darkness (which was the name of the Sith Empire during this era).
                                However, one Sith named Darth Bane has survived. He changed the ways of the sith, and invented the 'Rule Of Two', in which there can only be
                                two sith: a master and an apprentice. Bane's sith went into hiding and grew on power in the next hundreds of years, while the Jedi falsely
                                believed that the Sith has been destructed.
                            </p>
                        </details>
                    </div>
                </div>

            ) : (
                <div className={styles.content}>
                    <div className={styles.contentParagraph}>
                        <h4 className={styles.header}>Contents</h4>
                        <ol>
                            <li><a href='#h1'>Foundation of the Republic</a></li>
                            <li><a href='#h2'>Hundred Year Darkness</a></li>
                            <li><a href='#h3'>The Great Hyperspace War</a></li>
                            <li><a href='#h4'>Great Sith War</a></li>
                            <li><a href='#h5'>Mandalorian Wars</a></li>
                            <li><a href='#h6'>Jedi Civil War</a></li>
                            <li><a href='#h7'>Dark Wars</a></li>
                            <li><a href='#h8'>New Sith Wars</a></li>
                        </ol>
                    </div>

                    <details className={styles.paragraph}>
                        <summary id='h1' className={styles.header}>Foundation of the Republic (25053 BY)</summary>
                        <p>
                            In Legends, we know the exact date of the foundation of the Republic: 25053 BY. The next thousands of years are relatively unknown, but
                            there have been smaller wars between the Republic and smaller forces. In general, this was the era of growing and expanding in the Republic.
                        </p>
                    </details>

                    <details className={styles.paragraph}>
                        <summary id='h2' className={styles.header}>Hundred Year Darkness (7000 BY - 6900 BY)</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                The Hundred-Year Darkness was a prolonged conflict within the Jedi Order that occurred around 7000 years before the Battle of Yavin and it lasted
                                around 100 years. Some Jedi researchers and philosophers began to question the strict prohibitions imposed by the Jedi High Council on the study of
                                the dark side. These individuals believed that the dark side represented a legitimate aspect of the Force that could be studied and harnessed for power
                                rather than feared and avoided. Their experiments gradually expanded into dangerous and unethical territory, including the manipulation of living beings through dark side energy and the creation of unnatural creatures using Sith alchemy.
                                Eventually, this conflict led to the separation of the Jedi Order and the birth of the Sith Order.
                            </p>
                            <p>
                                The growing use of forbidden techniques alarmed the Jedi High Council, which declared the practices a corruption of the Force and ordered the responsible Jedi to abandon their research. Instead, the dissidents rejected the authority of the Council and
                                embraced the dark side openly, believing that the Jedi had become weak and overly cautious. These renegades became known as Dark Jedi. Among the most prominent of their leaders was Ajunta Pall, a powerful Jedi Master who ultimately became the chief figure among
                                the rebels. Other Dark Jedi figures associated with the conflict included XoXaan, Remulus Dreypa, Karness Muur, Sorzus Syn, and Tulak Hord. These individuals embraced the philosophy that power and domination were the true paths to mastery of the Force.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/ajunta-pall.jpg'} alt='ajunta-pall' height={300} width={700} />
                                <p className={styles.imageDescription}>Ajunta Pall, the first Dark Lord Of The Sith</p>
                            </div>
                            <p>
                                The conflict between the Jedi Order and the Dark Jedi escalated into open warfare, later remembered as the Hundred-Year Darkness. Over the course of roughly a century the Jedi and their fallen counterparts fought across a number of Republic worlds. The Dark Jedi used
                                destructive Force abilities and the products of their experiments to wage war, unleashing creatures created through Sith alchemy and other dark side rituals. These monstrosities were engineered for combat and often possessed unnatural strength, resilience, and aggression.
                                The Jedi Order, despite its reluctance to destroy its former members, was eventually forced to confront the rebels with military force. The war remained largely confined to Jedi and Republic forces rather than involving the entire galaxy, but it caused serious disruption and
                                devastation in the regions where the fighting occurred.
                            </p>
                            <p>
                                The final battle of the conflict happened on the planet Corbos in 6900 BY. According to the legends, Ajunta Pall slew more than dozen Jedi in the battle, but
                                in the end, the Dark Jedi was defeated, although some of them, including Ajunta himself, survived.
                                Ajunta Pall and the surviving leaders of the rebellion were captured along with many of their followers. Instead of executing them, the Jedi Council and the Republic Senate decided upon exile as a punishment.
                                The defeated Dark Jedi were stripped of their positions and placed aboard hyperspace vessels, which were then sent beyond the borders of the Republic into unexplored regions of space. This act of exile was intended to remove the threat permanently without creating martyrs or encouraging
                                further division within the Jedi Order.
                            </p>
                            <p>
                                The exiles wandered through unknown space until they eventually arrived in a remote region containing several inhabited worlds. Among these was the desert planet Korriban, homeworld of a species known as the Sith. The Sith were a red-skinned humanoid species that possessed a natural connection
                                to the dark side of the Force and maintained a civilization centered around powerful dark side sorcerers who ruled as kings and priests. When Ajunta Pall and the other Dark Jedi arrived, the Sith people recognized their immense power and came to regard them as divine beings. Through conquest and domination,
                                the exiled Dark Jedi quickly established themselves as rulers of the Sith species.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/sith-species.jpg'} alt='sith-species' height={200} width={1000} />
                                <p className={styles.imageDescription}>The Sith, the original species of Korriban</p>
                            </div>
                            <p>
                                Ajunta Pall became the first Dark Lord of the Sith and established a new ruling hierarchy over the Sith people. The other exiled Dark Jedi became Sith Lords under his leadership. Over time the Dark Jedi interbred with the native Sith species and merged their knowledge of the Force with Sith traditions, religion,
                                and culture. This fusion produced a new identity: the Sith Order. The Sith developed a powerful empire centered on Korriban and the nearby world of Ziost, establishing monumental tombs, temples, and academies dedicated to the dark side. The teachings and experiments of the original Dark Jedi exiles also led to the
                                development of Sith alchemy, dark side sorcery, and many of the rituals and traditions that later Sith would follow.
                            </p>
                            <p>
                                The Hundred-Year Darkness therefore represents the origin of the Sith Order and the beginning of the long conflict between the Jedi and the Sith. What began as a philosophical disagreement within the Jedi Order ultimately created an entirely new civilization of dark side practitioners. Thousands of years later the Sith Empire
                                founded by the descendants of these exiles would emerge from isolation and attack the Republic in the Great Hyperspace War, beginning a series of conflicts that would shape galactic history for millennia.
                            </p>
                        </div>
                    </details>

                    <details className={styles.paragraph}>
                        <summary id='h3' className={styles.header}>Great Hyperspace War (5000 BY)</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                After the Dark Jedi was defeated and retreated to Korriban, they interbred with the Sith, who were the native species of the planet.
                                They become 'one' through Sith Alchemy, and over the next hundreds of years they've built an incredibly rich empire, the Sith Empire. Over
                                almost 2000 years, the Sith Empire lived in a complete isolation from the Galactic Republic.
                            </p>
                            <p>
                                The conflict is named as the Great Hyperspace War, because it started with two hyperspace explorers from the Republic, Gav and Jori Daragon,
                                stumbled upon the Sith mausoleum planet of Korriban by chance while they were trying to discover a new hyperspace route. They arrived to Korriban
                                exactly when the reigning Dark Lord of The Sith, Marka Ragnos, has died. The Sith was divided into many smaller factions, but the two biggest
                                competitor for Ragnos's crown was two Sith called Naga Sadow and Ludo Kressh. Gav and Jori arrived exactly when the two were duelling. Upon landing,
                                they were taken hostages immediately. This was how the Republic and the Empire learned about the existence of each other.
                                Kressh declared them as spies and wanted to execute them, but Sadow dreamed of conquering new lands, and after interrogating them, he masterminded their
                                escape. He did this so they can alarm the Republic about an incoming Sith invasion, in which Sadow would use the paranoia of the Sith Lords to
                                attack the Republic immediately.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/duel-of-korriban.png'} alt='sadow-kressh-duel' height={200} width={700} />
                                <p className={styles.imageDescription}>The duel between the two aspiring Sith Lords</p>
                            </div>
                            <p>
                                Ludo Kressh soon discovered Sadow's treachery and attacked Sadow's feet in the of Khar Delba, where Sadow's fortress resident. In the battle,
                                Sadow successfully treached Jori to escape and send a warning to the Republic army. After Jori's escape, Sadow's forces, which he hided away
                                from both Jori and Ludo Kressh, joined the battle and quickly destroyed Kressh's fleet. With Kressh's fleet being destroyed, Sadow gained
                                complete control over the Sith Empire, and he with using the paranoia of the Sith Lords which believed the Republic will attack them, he quickly
                                started a war himself, and thus the Great Hyperspace War has began.
                            </p>
                            <p>
                                Sadow knew the Republic had superior firepower, so he relied on surprise victories and quick manuevers. He gained a lot of success early with his
                                Battle Meditation. In the battle of Koros Major, in which the
                                leader of the Sith Army was Gav Daragon himself, the Sith lost. The two Daragons reunited on the battlefield, and Gav, who believed he's fighting
                                to liberate the planet from the Republic's 'terror', abandoned the battlefield. Without their leader, the Sith was easily defeated.
                                The Sith also attacked Coruscant itself, but were defeated, although the Commander of the Republic army, Jedi Master Ooroo also passed away in the
                                battle.
                            </p>
                            <p>The turning point of the war came during the Battle of Primus Goluud, one of the largest naval engagements of the conflict. Republic forces under the
                                command of Empress Teta and Supreme Chancellor Berooken confronted Naga Sadow's fleet. During the battle Sadow attempted to use powerful Sith magic to manipulate a nearby star,
                                creating massive solar flares intended to destroy the Republic fleet. However, the Jedi were able to disrupt his plans and the Republic navy ultimately defeated
                                the Sith forces. As the battle turned against him, Naga Sadow was forced to retreat. In the battle, Gav Daragon was killed by Naga Sadow, although he managed to
                                send vital information to the republic before his death.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/great-hyperspace-war.jpg'} alt='great hyperspace war' height={200} width={500} />
                                <p className={styles.imageDescription}>The Great Hyperspace War</p>
                            </div>
                            <p>
                                After Sadow's forces retreated, Ludo Kressh, who survived the battle of Khar Delba, took a surprise attack against Sadow once again. Eventually, his forces
                                was destroyed, and Kressh himself had died in the battle as well. With Gav's coordinates in hand, the Republic led by Empress Teta followed the Sith back to
                                Korriban. In the battle, Sadow's army, that was already significatnly weakened by Kressh's attack, has lost. Jori Daragon also took part on the battle, on the
                                side of the Republic. In the end, Sadow escaped, but his army was destroyed and the Sith surrendered.
                                Sadow escaped with a small group of followers and eventually hid on the remote jungle world of Yavin 4, where he entered suspended animation and began secretly influencing events in the region.
                            </p>
                            <p>
                                Although the Sith Empire was defeated, the legacy of the war ensured that the Sith would eventually return in later eras, leading to further conflicts such as the Great Sith War and the long series of
                                struggles between Jedi and Sith that continued throughout galactic history. The remaining Sith arrived to the planet Dromund Kaas, to the Outer
                                Regions (unknown for the Republic) where they estabilished a reconstituted Sith Empire.
                            </p>
                        </div>
                    </details>

                    <details className={styles.paragraph}>
                        <summary id='h4' className={styles.header}>Great Sith War (3996 BY)</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                The Great Sith War, often referred to as the Exar Kun War, was a major galactic conflict that occurred approximately 3996 years before the Battle of Yavin and represented the first large-scale return of
                                the Sith threat since the destruction of the ancient Sith Empire in the Great Hyperspace War. The war was fought between the Galactic Republic and the Jedi Order on one side and the Sith forces led by the
                                fallen Jedi Exar Kun and the warlord Ulic Qel-Droma on the other. Unlike the earlier Sith Empire, the forces of the Great Sith War were not a unified civilization but rather a coalition of fallen Jedi, dark side
                                cultists, criminal organizations, and militarized systems manipulated by Sith influence.
                            </p>
                            <p>
                                Exar Kun had originally been a highly talented Jedi Knight known for his skill with a lightsaber and his intense curiosity about the history of the Force. During this period many Jedi scholars had become interested in
                                studying ancient Sith artifacts and ruins left behind after the Great Hyperspace War. Exar Kun became particularly fascinated with Sith history and began searching for ancient knowledge that the Jedi Order had long forbidden.
                                His investigations eventually led him to the Sith tombs on Korriban, where the lingering spirits of ancient Sith Lord Freedon Nadd attempted to influence and corrupt him. Although Kun initially resisted their influence, the experience
                                deepened his obsession with Sith power and convinced him that the Jedi had hidden important truths about the Force.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/exar-kun.jpg'} alt='Exar Kun' height={500} width={500} />
                                <p className={styles.imageDescription}>Exar Kun with his invention, the double-bladed lightsaber</p>
                            </div>
                            <p>
                                At roughly the same time another important figure, the Jedi Knight Ulic Qel-Droma, became involved in a separate conflict that would eventually merge with Kun's rise. Ulic and his brother Cay Qel-Droma were prominent Jedi who were sent to
                                investigate growing unrest in the Empress Teta system. The unrest had been organized by the Krath, a dark side cult led by Satal Keto and Aleema Keto, descendants of the Empress Teta royal line. The Krath had discovered ancient Sith artifacts
                                and used them to build a movement devoted to dark side mysticism and conquest. In order to infiltrate the Krath and learn their secrets, Ulic Qel-Droma pretended to fall to the dark side and joined their ranks. However, his prolonged exposure to
                                the dark side and his interactions with Aleema Keto gradually corrupted him for real.
                            </p>
                            <p>
                                While Ulic Qel-Droma became a military leader within the Krath, Exar Kun continued his search for greater power. Kun eventually traveled to the jungle moon of Yavin 4, where he discovered the temples once used by the Sith Lord Naga Sadow.
                                There he encountered the spirit of the ancient Sith Lord Freedon Nadd, who had been manipulating events from beyond death. Under Nadd's influence, Exar Kun completed his fall (partly by destroying Nadd himself) to the dark side and fully embraced Sith teachings.
                                Kun declared himself the new Dark Lord of the Sith and used Sith alchemy and sorcery to transform the Massassi species living on Yavin 4 into loyal warriors. The Massassi became the core military force of his growing Sith movement.
                                Before his death, Freedon Nadd has signaled Aleema and the Krath about Exar Kun, claiming he's a pretender and the real Dark Lord of the Sith is Ulic Qel-Doma himself.
                            </p>
                            <p>
                                Meanwhile Exar Kun was on his search that eventually led him to the dark side, the Jedi led an attack against Karth forces in Empress Teta to save Qel-Doma from the Krath.
                                The Jedi was led by a strong knight, Nomi Sunrider, and Ulic Qel-Doma's brother, Cay. With her battle meditation, Nomi neutralized Aleema, and forced
                                Ulic to talk with her and Cay, but they quickly realized that Ulic has already fell to the Dark Side. Eventually, the Jedi retreated from the battle.
                                However, Exar Kun used his force powers to get a trace of the Krath, and quickly went to the planet Empress Tate, in order to get rid of Ulic and the Krath sect as he found
                                them a threat to his newfound power. As Kun arrived, he quickly incapitated Aleema and went onto a duel with Qel-Doma. The duel was short and evenly matched, but it was
                                interrupted by the ghost of ancient Sith Lords led by Marka Ragnos, who declared Exar Kun as the Dark Lord of the Sith and Ulic Qel Doma as his first and strongest apprentice.
                                With that, the two joined forces and they've created the Brotherhood of Sith.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/ulic-exar.jpg'} alt='duel of exar kun and ulic qel doma' height={500} width={800} />
                                <p className={styles.imageDescription}>The duel between the two Dark Jedi</p>
                            </div>
                            <p>One of the earliest major attacks of the war occurred when Sith forces assaulted the Jedi training center on the planet Ossus, one of the most important repositories of Jedi knowledge in the galaxy. The Sith sought to destroy Jedi records and weaken the Order's ability to oppose them, along with finding padawans they can lure to the Dark Side.
                                He managed to convert many jedi into the dark side on the planet, and he also found Odan-Urr's holocron, which helped him to enslave the Massassi, that became the core of his army.
                                Meanwhile Ulic Qel-Droma led large-scale military campaigns across several Republic regions, conquering worlds and gathering additional forces to the Sith cause. The war spread across numerous star systems as the Republic struggled to respond to multiple simultaneous threats.
                            </p>
                            <p>
                                The Mandalorians, led by Mandalore the Indomitable also started to conquer planets in previous decades, and eventually they reached near Empress Teta.
                                After the mandalorians attacked a carbonite smelting station that was under Krath's control, Mandalore attracted a personal interest from Ulic Qel-Doma,
                                who ordered him to surrender his army. They agreed to a duel with the condition that if Ulic wins, the mandalorians will join the war on their side.
                                Ulic won the duel and the mandalorians joined the war.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/mandalore-the-indomitable.jpg'} alt='mandalore' height={500} width={500} />
                                <p className={styles.imageDescription}>Mandalore the Indomitable</p>
                            </div>
                            <p>
                                The war has escalated, and the Sith managed to gain an important victory in Foerost with Mandalore's help, and the sith also managed to capture 300 warships from
                                the Republic army. With their new power added to their ranks, although Kun advised against it, Ulic and Mandalore decided to attack Coruscant, the capital of the Republic.
                                The Jedi, with the lead of Vodo-Siosk Baas, former Jedi master of Exar Kun fought valiantly, but the Sith gained an upper hand in the battle. In the end, Ulic Qel Doma was
                                betrayed by Aleema who also managed to deceive Mandalore by telling him Ulic was dead and they need to retreat, the Sith Lord, who have been left alone by his allies captured
                                and paralyzed Qel-Doma. Ulic was pleaded guilty, and was sentenced to death by the Senate.
                            </p>
                            <p>
                                Meanwhile Mandalore discovered Aleema's treachery, and we contacted Exar Kun to tell him what happened. Kun arrived at the exact moment Ulic was sentenced to death.
                                After killing his old master, Siosk Baas in a duel, the Masassi captured Coruscant, and Exar Kun declared the Sith as the ones to rule the galaxy. The remaining Jedi was
                                forced to retreat.
                            </p>
                            <p>
                                The war reached a total state, with mostly Sith victories, although there were some exceptions, for example the battle of Iridonia, where the Republic defeated the joined armies
                                of the Krath and the Mandalorians. Exar Kun also sent his Sith apprentices throughout the galaxy to hunt down members of the Jedi Order. Many Jedi died in the assasinations.
                            </p>
                            <p>
                                After the rescue of Ulic Qel-Droma from Coruscant, the Sith leadership planned a major offensive against the Republic hyperspace jump station at Kemplex Nine in the Auril sector.
                                Ulic ordered Aleema Keto to lead the assault, secretly intending it as punishment for her betrayal during the First Battle of Coruscant. Exar Kun provided Aleema with the ancient warship of Naga Sadow,
                                equipped with Sith weapons capable of triggering supernovas, but he concealed that the device would create a chain reaction among nearby stars aimed at devastating the Jedi world of Ossus. During the battle
                                Aleema activated the weapon in the Cron Cluster, destroying a star and killing the pursuing Jedi Dace Diath, Shoaneb Culu, and Qrrrl Toq, but the resulting chain reaction also annihilated Aleema, her fleet,
                                and Kemplex Nine itself. The expanding supernova threatened Ossus, forcing the Jedi to evacuate their archives, which allowed Exar Kun and Ulic Qel-Droma to raid the planet and seize valuable Jedi knowledge.
                            </p>
                            <p>
                                As the Jedi started to evacuate from Ossus because of the supernova, Kun and Qel-Doma led his army to the planet in hope of salvaging old Jedi-artifacts. The battle was a huge turning point in the war.
                                Cay, Ulic's brother was also on the planet. The two dueled, with Cay desperately trying to turn his brother back to the light side. However, Ulic gave into his anger and killed Cay.
                                Nomi Sunrider, who was also present, gave into her emotions, and he managed to cut Ulic off the force, while the Sith also started to realize what he has done. With Ulic coming back to his senses, he
                                repented his fall to the Dark Side and agreed to help the Jedi defeat Exar Kun.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/ulic-remorse.jpg'} alt='Ulics remorse' height={500} width={500} />
                                <p className={styles.imageDescription}>Ulic Qel Droma's remorse after the death of his brother</p>
                            </div>
                            <p>With Qel-Doma's informations, the Jedi turned the state of the battle and started to gain victories all over the galaxy. First, they defeated the the Krath at Boonta.
                                Then Ulic led the Republic army against the Mandalorians on the planet of Onderon. In the battle, the Mandalorians were caught in a cross fire between the Republic army
                                and Onderon's Beast Rider army, and they eventually lost. Mandalore the Indomitable himself was killed while trying to retreat on the planet Dxun. His helmet was found by
                                a mandalorian who named himself as Mandalore The Ultimate. Decades later he led the mandalorian army in the Mandalorian wars.
                            </p>
                            <p>Eventually, Ulic led the Republic into Exar Kun's Sith base. Exar Kun, who immediately realized he was betrayed and overpowered, initiated a final Sith ceremony in which he
                                drained the life of his Massassian slave army, and he freed himself from his mortal body, trying to escape the planet as a spirit. Thousands of Jedi, led by Nomi Sunrider
                                used the force to build a 'light wall' in the force just like Nomi Sunrider did when he cut Ulic off the force. However, this force of light collided with Exar Kun's dark forces,
                                and it resulted in an enourmous firestorm that destroyed almost every trace of Kun's Sith legacy. Although the Jedi thought they killed Exar Kun, his spirit survived, but the war ended
                                with Jedi victory.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/yavin-4.jpg'} alt='battle of yavin' height={500} width={500} />
                                <p className={styles.imageDescription}>The battle of Yavin 4, led by Nomi Sunrider</p>
                            </div>
                            <p>
                                The Great Sith War ended with the defeat of the Sith forces, the collapse of the Krath movement, and the destruction of Exar Kun's empire. Ulic Qel-Droma, now stripped of the Force, lived the remainder
                                of his life in exile as a warning to future Jedi about the dangers of the dark side. Exar Kun's spirit remained trapped within the temples of Yavin 4 for thousands of years until it was finally destroyed
                                by Luke Skywalker's Jedi students in a much later era. The war left a lasting impact on the Jedi Order and the Republic, reinforcing the dangers of Sith knowledge and demonstrating how easily even the most talented Jedi could fall to the dark side.
                            </p>
                            <p>
                                During the conflict Exar Kun also introduced new weapons and dark side techniques. He became the first known wielder of the double-bladed lightsaber, which became one of the most recognizable Sith weapons in later eras. Kun also created Sith artifacts
                                infused with dark side energy and used powerful rituals capable of devastating entire regions. His mastery of Sith magic allowed him to project his spirit across great distances and manipulate events throughout the war.
                            </p>
                        </div>
                    </details>

                    <details className={styles.paragraph}>
                        <summary id='h5' className={styles.header}>Mandalorian Wars (3964 BY - 3960 BY)</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                After the mandalorians, a warrior culture known for their millitaristic society have been defeated in the Great Sith War, they retreated into the Outer Rims.
                                As Mandalore the Indomitamble died on Dxun, his Mask was found by a fellow Mandalorian, and with that, he claimed the right to be the new Mandalore, under the
                                name Mandalore the Ultimate. In the next two decades, the mandalorians kept their nomadic lifestyle, and rebuilt their ranks. Mandalore rebuilt his army from many
                                species, including humans (originally, the species of the Mandalorians were Taung, but they almost completely went extinct after the Great Sith War. Mandalore himself was
                                a Taung as well), rodians, twi'leks, among many other. This army was called the Neo-Crusader Mandalorian army.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/mandalore-the-ultimate.jpg'} alt='mandalore the ultimate' height={500} width={500} />
                                <p className={styles.imageDescription}>Mandalore, the Ultimate</p>
                            </div>
                            <p>
                                In 3976 BY, the Mandalorians started their crusade by invading worlds and colonies in the Outer Rims. Their goal was to gain resources for the war and also to provoke
                                the Republic into a clear conflict. During this time, Mandalore appointed Cassus Fett as his top strategist and allowed him to lead an army of Basilisk war-mounts in the subjugation of Cathar.
                                Initially, the Republic didn't want to respond, as they were still recovering from the losses of the Great Sith War, unless the Mandalorians decide to attack Republican space. In the meantime,
                                mandalorians grew stronger with enslaving different colonies and making them part of their army. One notable event of these years was the mandalorian invasion on the ocean planet Cathar.
                                Despite the protests of a Mandalorian woman, the mandalorians, led by Cassus Fett, massacred almost the entire popularity (approximately 90%) of Cathar. The Republic learned of the event but chose to
                                suppress news of the battle in order to prevent rioting and panic.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/cathar.jpg'} alt='massacre of cathar' height={500} width={500} />
                                <p className={styles.imageDescription}>The massacre of Cathar</p>
                            </div>
                            <p>
                                In 3965 BY, when the mandalorian armies started to threaten Taris, the Republic finally acted, they estabilished a protective cordon over the planet, and the mandalorian expansion stopped in the Outer Rims,
                                and smaller skirmishes between the two sides are started to happen more frequently, with mostly inconclusive results. However, the Jedi Order itself still didn't take part in the war, as they felt an even bigger
                                threat in the shadows. However, many Jedi disagreed with their conservative approach. The leader of these such Jedi was later known as Revan, and he quickly became popular among republican citizens. Revan and his
                                best friend, fellow Jedi Alek, among with some of his believers known as the Revanchist, participated in the battle's in the form of scouting missions despite the council's wish.
                            </p>
                            <p>
                                Another important event of that time was the Padawan Massacre on Taris, where five Jedi Masters, including Lucien Draay, shared a false vision where the Sith return and
                                their own padawans murder them. To prevent this, they've set up a false knighting ceremony, where the misled padawans were slain by their own masters, excluding Draay's padawan,
                                Zayne Carrick, who survived because he arrived late. The media quickly learned about the affair and it caused riot and panic, but the public believed that it was Zayne himself who
                                murdered his fellow padawans.
                            </p>
                            <p>
                                After the incident on Taris, the Jedi retreated the planet, and the Mandalore saw the chaos as an opportunity to start a full-scale war against the Republic, ending the stalemate that went on eight months.
                                In the battle of Vanquo, led by Mandalore and Cassus Fett, the mandalorians earned an important victory, as they've managed to cut through the Republic blocade, and conquered the mining world.
                                Around this time, Revan's followers were kept hostage by the mandalorians, but they've been rescued by Zayne Carrick and his companion, and they've rejoined with Revan. The Revanchists became more and more
                                popular as they've kept visiting different planets. Eventually, they've reached Cathar and started to invastigate about the disappearance of their population. At the same time, after capturing Taris,
                                the Mandalorians started an operation called the 'Onslaught', invading many planets, for example the Zabrak homeland Iridonia and Onderon.
                            </p>
                            <p>
                                When Mandalorian forces under Mandalore the Ultimate expanded their campaigns deeper into Republic territory, Serroco became a target. The Mandalorians launched a massive orbital bombardment of the planet
                                rather than attempting a traditional invasion. Using heavy warships, they systematically bombarded the surface with high-yield weapons, devastating the planet's major population centers and infrastructure.
                                The bombardment caused catastrophic destruction across the world. Entire cities were obliterated and the planetary environment was severely damaged. Vast portions of the population were killed, and Serroco
                                was effectively reduced to a wasteland. The attack was not primarily meant for conquest but rather as an example of Mandalorian power and a psychological weapon against the Republic.
                                The destruction of Serroco shocked the Republic and demonstrated that the Mandalorians were willing to annihilate entire worlds in pursuit of victory. The event intensified pressure on the Jedi Order to intervene in the war, as many in
                                the Republic saw the Mandalorian campaign as a genocidal threat that could not be contained without Jedi support.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/serocco.jpg'} alt='bombing of serocco' height={500} width={500} />
                                <p className={styles.imageDescription}>The bombing of Serocco</p>
                            </div>
                            <p>
                                Meanwhile the Revanchists were still on Cathar, the Jedi Council arrived in force to the planet to confront them. The Council warned the Revanchists that the mandalorians are nothing special and to disband their movements, but Revan discovered
                                the mask of the mandalorian women who opposed against the destruction of the planet. Suddenly, all of the present Jedi shared the same vision in which Cassus Fett commits genoicide against the population of Cathar. Revan, digusted by it, donned the mask,
                                took his name Revan, vowed to wear it until all of the Mandalorians were brought to justice. In light of the vision, the Jedi Council begrudgingly sanctioned the Revanchists' intervention into the Mandalorian Wars, though it still publicly denounced Revan's
                                actions as unwise and too hasty. With some clear conditions, the Revanchists were allowed to officially join the war on the side of the Republic, directly led by Revan himself.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/revan.jpg'} alt='revan born' height={500} width={500} />
                                <p className={styles.imageDescription}>Revan, swearing to defeat the Mandalorians after learning about the genoicide on Cathar</p>
                            </div>
                            <p>
                                The next stage of the war was known as the Mandalorian Triumph, where the mandalorian army conquered many sectors, for example the Ambria and Zel systems. The battle of Duro also ended with mandalorian victory, although with the arrival of Revan, Alek (now Malak), and Meetra Surik,
                                one of Revan's commanders, the mandalorians's attempts to steal large amount of war materials from warships have been thwarted. After the battle, Revan was appointed as the Supreme Commander of the Republic millitary army.
                            </p>
                            <p>
                                Revan proved to be a tactical genius and started a huge counterattack against the mandalorian forces. With his leadership, the Republic liberated Taris, and they've gained victory after victory. However,
                                Revan became increasingly willing to sacrifice populations and key planets in order to win victories elsewhere, and he, along with Malak, began a policy of victory at all costs. They've discovered an ancient Rakata technology, the Star Map, that showed part of the location of the Rakatan space station known as the Star Forge.
                                He started to visit other Star Map locations, like Kashyyk and Korriban, but at the same time, he started to be affected by the Dark Side. However, the Revanchists still fought on the side of the Republic even under the influence of the Dark Side of the force.
                                In 3961 BY, the mandalorians lost more and more territory. However, in the battle of Jaga's Cluster, Cassus Fett still managed to earn an impressive victory, even with Revan personally commanding the Republic army. Not long after though, the Republic destroyed most of the mandalorian ground forces in Althir. Soon happened one of the
                                deadliest battle over Dxun. The Republic managed to retake Onderon, but the mandalorians refused to give in, the siege lasted for several months and they say that for every mandalorian, ten republican soldier lost their lives. After losing Onderon, the Mandalorians retreated into the Outer Space.
                            </p>
                            <p>
                                The final battle of the war took place on Malachor V. Revan deployed a super weapon named the Mass Shadow Generator to the battle. Mandalore, as he realized he's being overpowered, challenged Revan to a duel. Revan accepted the duel, and in the end, managed to defeat his opponent.
                                In his final moments, Mandalore told Revan the truth: there is a Sith Empire in the Outer Space, and the Mandalorians were merely puppets for them to test the strength of the Republic army.
                                In the battle above, the mandalorians were being pushed further and further back, but the Republic also suffered many causalities. In the end, Meetra Surik ordered to activate the Mass Shadow Generator.
                                Tens of thousands died as hundreds of vessels collided with Malachor's surface, devastating the once-lush world and fracturing its core as the ships were crushed into the planet. The Republic suffered incredible casualties, though nowhere near as many as the Mandalorians, and the sheer number of deaths caused a substantial wound in the
                                Force. Surik was the closest Jedi to the vortex to survive, and she instinctively severed her own connection to the Force to avoid being killed by the resulting shock wave. In the wake of the utter devastation, the remaining Mandalorians transmitted their unconditional surrender to the Republic.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/duel-on-malachor.jpg'} alt='revan versus mandalore' height={500} width={500} />
                                <p className={styles.imageDescription}>Duel between Revan and Mandalore the Ultimate</p>
                            </div>
                            <p>
                                After the battle ended, the mandalorians surrendered. The Jedi Council ordered the Revanchists back to Coruscant to face consequences for their actions in the final stages of the war, however, they refused, and took the remainder of their fleet into the Unknown Regions, hoping to find the Sith Empire Mandalore told them about. The mandalorians scattered
                                throughout the galaxy, with many of them became mercenaries or bounty hunters.
                            </p>
                        </div>
                    </details>

                    <details className={styles.paragraph}>
                        <summary id='h6' className={styles.header}>Jedi Civil War (3959 BY - 3956)</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                After Revan and his army defeated the mandalorian army and learned about the existence of an ancient Sith Empire from Mandalore himself, Revan didn't return to Coruscant, but
                                went into the Unknown Regions instead. Following Mandalore's instructions, he and Malak arrived on Dromund Kaas, to meet the Sith Emperor. However, the Emperor broke the will of the two Jedi,
                                and sent them back to the Republic to find the Star Forge, a super weapon used to create a practically infinite size of a droid army. Revan and Malak managed to find the Star Maps that contained
                                parts of locations of the Forge, and eventually, they've acquired the Star Forge itself. However, they managed to break free of the Emperor's control and instead created their own Sith Empire.
                                In order to forcibly unify the Republic and prepare for the bigger threat, the true Sith Empire, they've decided to conquer the Republic.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/revan-malak.jpg'} alt='revan and Malak' height={500} width={500} />
                                <p className={styles.imageDescription}>Revan and Malak, now as Sith</p>
                            </div>
                            <p>
                                Nearly all of Revan's servants, along with Saul Karath, who was the admiral of the Republic Navy during the Mandalorian wars swore loyalty to him, and with the power of the Star Forge,
                                he founded his new Empire. He conquered Korriban and took control of the Sith Academy there. In 3959 BY, in a surprise attack, Revan's fleet swept away the Republic defenses in the Foerost system,
                                and they declared to the galaxy that they were the new Sith Lords. Remembering their leadership during the Mandalorian Wars, large numbers of Republic officers and soldiers began to defect to the new Dark Lords of the Sith.
                                Consequently, the two Sith Lords were able to rapidly carve out a new Sith Empire without needing to commit to much fighting. Battles were fought at Roche, Axxila, Gizer and Randon as Revan and Malak expanded their empire.
                                Although the Republic won some battles at Commenor, Foless, Denon and Devaron, third of the known galaxy quickly came to a Sith control.
                            </p>
                            <p>
                                Seeing the need for corporate assistance in providing necessary materiél for the war effort, Revan also entered into a partnership with Czerka Corporation, a galaxy-spanning conglomerate with such diverse interests as mining, slaving,
                                and manufacturing items such as arms, armor, and droids. Offered a trade monopoly within Sith space, the corporation helped to sponsor the establishment and growth of the Dreshdae colony on Korriban as part of their supply network.
                                The corporation continued to provide logistical support for the Sith Empire throughout the course of the war.
                            </p>
                            <p>
                                In 3958 BY, the Sith fleet ordered an orbital bombing of Telos IV, destroying millions on the planet. In the same year, they succesfully seized control of the zabrak homeworld Iridonia.
                                In the next two years, although the Republic earned some victories in the war, with the help of the Star Forge's practically infinite army, the Sith was very close to gain a total victory, and the Republic
                                was on the edge of collapsing. The Council drafted a desperate plan to capture Revan himself, and thus get rid of the Sith's greatest tactician and commander.
                                With the Republicans attacking the main forces of the Sith fleet, a small unit, lead by the young and talented Jedi, Bastila Shan, boarded into Revan's flagship.
                                However, Darth Malak, Revan's friend and apprentice quickly realized what's happening, and ordered to bombard Revan's ship, in hope of destroying both the Jedi and his master at the same time. Revan survived however,
                                as well as Bastila, who kept the Sith alive using the Force that created a near-physical bond between the two. Bastila took Revan to Dantooine. The Jedi Masters there, Vandar Tokare, Vrook Lamar, Zhar Lestin, and Dorak,
                                used their own mastery of the Force to not only heal Revan's wounded body and mind, but to gain access to and erase his remaining memories of having been the Dark Lord.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/bastila.jpg'} alt='bastila' height={500} width={500} />
                                <p className={styles.imageDescription}>Bastila Shan</p>
                            </div>
                            <p>
                                Although Malak was farm from Revan's tactical genius, he was able to successfully take over the conquest led by his old master with the help of the Star Forge. His biggest objective was to capture Bastila Shan, whose battle
                                meditation caused a huge problem for Malak's army. He set a trap to the Jedi, and he successfully defeated Bastila's and Carth Onasi's (a republican pilot) small fleet. Revan was also there, as he was given a new identity of a Republic soldier.
                                The three managed to land on different spots of Taris on escape pods. Meanwhile Malak gained control over Taris, and ordered a planet-wide quarantine of the planet to search for Bastila. Revan and Onasi freed Bastila, who was captured by the Vulkar Gang,
                                a criminal organization of the underworld in Taris. Malak got more and more tired of the fruitless search for Bastila, ordered the complete destruction of Taris. In the bombing, billions of lives ended, and Revan barely managed to escape with his new companionship,
                                along with mandalorian mercenary Canderous Ondo, and the battle droid HK-47.
                            </p>
                            <p>
                                It was during his time on Taris that Revan began to experience odd flashes of his old memories; dreams at first, in which he witnessed snippets of the events which led up to his apparent death, these soon developed further. Upon first meeting Shan as his new self,
                                Revan witnessed a vision of his capture, though he did not recognize its significance at the time. Bastila took Revan to Dantooine, where the remaining Jedi Council was present. The masters re-trained Revan into the ways of the Jedi, and ordered him and his companion
                                to go search for the Star Maps once again.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/starmap.jpg'} alt='star map' height={500} width={500} />
                                <p className={styles.imageDescription}>A Star Map</p>
                            </div>
                            <p>
                                Meanwhile Revan started to locate the five different Star Maps, Malak bombarded Dantooine too, destroying the Enclave there. Before finding the last Star Map, the Ebon Hawk, Revan's ship was captured by the Leviathan, admiral Saul Karath's flagship.
                                In their attempt to escape, the admiral was killed by Carth Onasi, who was the former protegee of the sith-turned former admiral. Their attempt to escape was interrupted by Malak, who just arrived.
                                Malak, who learned about the survival of his former master by the bounty hunter Calo Nord, revealed Revan his true identity. After Bastila admitting everything, Revan forgave her, and started a duel with Malak. Bastila joined the fight while Revan and his companionship
                                escaped, however, the young Jedi was captured. With no other choices, Revan went onto Korriban to find the last Star Map.
                            </p>
                            <p>
                                After discovering the final Star Map, Revan finally learns the location of the mysterious Star Forge, the ancient super-structure responsible for the Sith Empire's overwhelming military strength. The maps reveal that the station lies
                                in orbit around the planet Lehon, also known as the Unknown World, a remote system once ruled by the powerful Rakatan civilization. Determined to stop the Sith, Revan and the crew of the Ebon Hawk travel to the system, but their arrival triggers an ancient planetary defense
                                system that shoots their ship down. They crash on the surface of Lehon and must navigate the ruins and tribal conflicts left behind by the fallen Rakatan civilization.
                                While on the planet, Revan becomes involved with two rival Rakatan groups—the Elders and the faction led by the One—and eventually discovers the ancient temple that controls the planetary disruptor field protecting the Star Forge. By infiltrating the temple and shutting down the
                                defenses, Revan clears the way for the Republic fleet to attack the station. During this time it also becomes clear what has happened to Bastila Shan. After being captured by Darth Malak, she was subjected to intense torture and manipulation through the dark side of the Force.
                                Malak ultimately breaks her will and turns her into his Sith apprentice, forcing her to use her powerful Battle Meditation ability to strengthen the Sith fleet and coordinate their forces during the coming battle.
                                With the planetary defenses disabled, the Republic launches a massive assault on the Star Forge while Revan and the crew infiltrate the station itself. Fighting through waves of Sith soldiers and dark Jedi, Revan eventually confronts Bastila.
                                Revan defeated Bastila, turned her back to the light, and their relationship, which was already very intimate thanks to the bond created between them, became romantic.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/revan-defeat-malak.jpg'} alt='revan defeats malak' height={500} width={500} />
                                <p className={styles.imageDescription}>Revan defeating his former apprentice</p>
                            </div>
                            <p>
                                Although Malak was defeated, the war didn't end immediately, but the Republic started to reconquer the galaxy. Revan, whose memories still didn't return completely, went back to the Unknown Regions to search after the Sith Empire once again.
                                The Jedi Order was also on a verge of collapsing. The Republic started a restoration project. However, the peace didn't last long: Five years later, the first Jedi Purge began.
                            </p>
                        </div>
                    </details>
                    <details className={styles.paragraph}>
                        <summary id='h7' className={styles.header}>Dark Wars (3955 BY - 3951 BY)</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                The Dark Wars were conflicts that stemmed from the defeat of Darth Malak's Sith Empire at the end of the Jedi Civil War. The First Jedi Purge and the Sith Civil War were two of these conflicts, but in general,
                                these two refers to the same thing.
                            </p>
                            <p>
                                After Malak's loss, many of the remaining Sith scattered through the galaxy and buil their own, smaller empires. The three strongest remaining Sith formed an alliance, and called themselves the
                                Sith Triumvirate. They took control most of these smaller empires and unified the Sith Empire once again. These three Sith were Darth Traya, Darth Nihilus, and Darth Sion. Traya was a blind force user,
                                who was the former Jedi master of Revan himself. Nihilus was probably the strongest of them all, a wound in the force, who needed to drain the force of force users in order to survive and get stronger. He was a former
                                Jedi, who fought in the Mandalorian Wars, and whose physical body was completely destroyed when Meetra Surik activated the Mass Shadow Generator in the final battle on Malachor V. Sion was a Sith who fought in the Exar Kun
                                wars and was struck down, but kept himself alive using the force, practically becoming immortal, he also survived Revan and Malak's war.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/triumvirate.png'} alt='sith triumvirate' height={500} width={500} />
                                <p className={styles.imageDescription}>The Sith Triumvirate: Nihilus, Traya, and Sion</p>
                            </div>
                            <p>
                                The main goal of the Triumvirate wasn't to gain total control over the galaxy, but to erase the Jedi themselves. By the end of the Jedi Civil War, barely a hundred Jedi survived. Most of their knowledge also got destroyed with the
                                destruction of the Enclave in Dantooine and the Great Jedi Library of Ossus. The republic citizens also started to feel an increased anger and resentment towards the Jedi whom they formerly saw as heroes. Many of the remaining Jedi fell
                                to the dark side, even members of the Jedi High Council started to question the Jedi teachings. It was a dark and chatoic time for the Order.
                            </p>
                            <p>
                                A steady stream of Jedi, including the Jedi Watchmen overseeing several worlds, stepped down, renounced the Order, and were never heard from again. Entire Jedi gatherings began to vanish, leaving behind a strange disturbance in the Force that
                                only a few members of the Jedi Council could recognize. In time, the Jedi began to suspect that they were being hunted. At last, the Jedi Master Atris summoned many of the most powerful and influential of the remaining Jedi Masters to a secret
                                conclave on the Miraluka world of Katarr under the pretext of discussing the emerging threat. But the conclave was not as secret as the Jedi thought.
                                Atris leaked information about the conclave to the greater galaxy in an attempt to draw whoever was attacking them out of the shadows. As a result, Darth Nihilus arrived as the Jedi assembled and annihilated every living thing upon the planet,
                                both the Jedi and the Miraluka colonists. The sole survivor of the attack was the Miraluka Visas Marr, whom Nihilus captured and trained as his apprentice. After that shocking event, the remaining Jedi Council members, Masters Vrook Lamar, Kavar,
                                Zez-Kai Ell, and Lonna Vash, decided to go into exile. In so doing, they hoped that the mysterious and secretive new Sith threat would be lulled into a false victory and reveal itself.
                            </p>
                            <p>
                                The main ideologist behind the First Jedi Purge was Traya, whose ultimate goal was to destroy the Force itself, as she saw it as a malicious, manipulative entity. To achieve her goal, she wanted to use Meetra Surik. Surik was a former Jedi who
                                was one of Revan's best commanders in the Mandalorian Wars and she was banished by the Jedi Order after the Revanchists actions in the war. Surik met Traya, who used Kreia, his Jedi name on Pegasus after attacked by the Harbringer,
                                that was taken control by Sion's sith forces. They escaped the mining planet, heading to Telos IV, retreating from Sions's sith forces that just arrived. In Telos, the Ebon Hawk, their ship, was stolen, but they retrieved it after meeting Atris on the secret
                                Telosian Jedi academy. Atris and Meetra argued about the latter's actions in the mandalorian wars, but eventually, they left with Atris's database that contained the location of the five remaining jedi masters. Meetra, who seeked answers for the reason he was
                                banished, decided to search for the masters in order to unite them against the Sith threat.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/meetra.jpg'} alt='meetra' height={500} width={500} />
                                <p className={styles.imageDescription}>Meetra Surik in the Mandalorian Wars</p>
                            </div>
                            <p>
                                Eventually, they located master Vrook on Dantooine, master Zez-Kai Ell on Nar Shaadaa, master Kavar on Onderon, where they took part on the Onderon Civil War. She also visited Korriban to search for master Lonna Vash, but the jedi was killed by Darth Sion shortly before
                                Meetra's arrival. Meetra and Sion duelled in the tombs of the planet, but even though Meetra struck Sion down several times, the Sith healed himself using the force every time, and the jedi decided to flee.
                                The remaining jedi masters agreed to meet on Dantooine. There, Masters Vrook, Kavar and Zez-Kai Ell had formed a council in which they would decide her fate. Right after they reestablished the Exile's banishment and
                                just before they could strip her of the Force once again, Kreia stormed into the meeting. The Exile, held in stasis by the Masters, was left helpless to defend them as Kreia put the Jedi Masters through the same suffering the Exile had felt on Malachor V, leaving them not only dead, but void of the Force.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/kreia-senate.jpg'} alt='kreia senate' height={500} width={500} />
                                <p className={styles.imageDescription}>Kreia, destroying the Jedi Council</p>
                            </div>
                            <p>
                                After she left, Surik finally regained her strength and departed for Telos in search of Kreia, who had once again assumed the title of Darth Traya. There the Exile was again forced to confront Atris, who had been corrupted by the dark side by the Sith holocrons at the secret academy. After the Exile defeated her,
                                she was able to persuade Atris to forgive her and helped herself see the folly of her beliefs. Atris then told the Exile that Traya had fled to Malachor V to wait for their final confrontation. Afterwards, Atris declared herself an ex-Jedi and went into exile to try to find understanding.
                            </p>
                            <p>
                                Kreia, realizing that Nihilus needs to be stopped from draining all life in the galaxy, set a trap. Knowing that General Vaklu and Colonel Tobin were allied with Nihilus, she lied to the latter—who had barely survived the Onderon Civil War —about a number of Jedi hiding in Atris's secret academy on Telos IV.
                                In fact, the only Jedi inhabitant of the academy was Atris herself. The Sith took the bait, but the Onderon forces, with the help of Canderous Ordo, his mandalorians, and Carth Onasi's Republic fleet that just arrived, managed to fight on equal terms with them.
                                Meetra, Canderous, his mandalorians, and Visas Marr, who was the former apprentice of Nihilus, boarded the Sith Lords's ship. Nihilus, who was already weakened by his hunger of life was defeated by the companion, and his ship, the Ravager was destroyed, the battle was won by the Republic.
                            </p>
                            <p>
                                Finally, after the defeat of Nihilus, Meetra and his companion went to Malachor V to end the Sith Triumvirate. She defeated Sion, and convinced him that Traya was using only using him to her own goals. With Sion letting go of his hatred, he finally succumbed to his injuries.
                                The Exile then made her way to the Trayus Core, where she confronted Darth Traya. After a fierce battle, the Exile succeeded in defeating the Sith Lord but spared her life. Traya refused to give up however, and attacked the Exile again. But the Exile was able to defeat her again. Before she gave her life to the Force, Kreia gave the Exile information about Revan's
                                location in the Unknown Regions and about the fates of the Exile's allies and the planets they had visited. Shortly after this exchange, Bao-Dur's (a companion of the Exile, the creator of the Mass Shadow Generator) remote reactivated the Mass Shadow Generator in order to completely destroy the planet. The crew of the badly damaged Ebon Hawk retrieved the Exile from the Core and escaped the planet.
                                With the defeat of the Sith Triumvirate and the "restoration" of the Jedi Order, the Exile left the Republic in the hands of her Lost Jedi (a group of the remaining jedi alive, founded by the Exile) and began her journey to find Revan in the Unknown Regions. With the end of the Dark Wars, the age we call 'The Old Sith Wars' ended, and a 300 year of peace has come to the galaxy.
                            </p>
                        </div>
                    </details>

                    <details className={styles.paragraph}>
                        <summary id='h8' className={styles.header}>The Great War (3681 BY - prior to 3522 BY)</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                This section refers to three big events happened in the MMORPG Star Wars: The Old Republic: The Galactic War, the Cold War, and the Third Galactic War.
                                Since the story of the game is not concluded, the exact end of these wars are unknown, however, as of our knowledge, in the end, the Republic emerged as the winner of the conflict.
                                The events of these almost 200 years are incredibly detailed and long, so this section will merely be a relatively short summary of what happened after Revan and Meetra left to the Unknown Regions.
                            </p>
                            <p>
                                In 3681 BY, 300 years after Revan and Meetra left to search for the Emperor, the Sith have returned. In early stages, the Empire gained many victories. The Jedi Order immediately mobilized to aid the Republic war effort. Jedi Knights and Masters were deployed across the galaxy to support Republic armies, command fleets, and defend vulnerable systems from Imperial invasion. However, the Sith Empire possessed
                                a powerful advantage: its leadership was united under the Emperor and governed by the Dark Council, a body of twelve Sith Lords who oversaw the Empire's military and political operations. Unlike the fractured Sith orders of earlier eras, this Empire fought with discipline and coordination, making them far more dangerous opponents.
                                One of the most significant turning points during the early years of the war came with the involvement of the Mandalorians. The Sith Empire managed to bring the Mandalorian clans into the conflict on their side, greatly strengthening Imperial forces. Under Mandalorian leadership, a massive blockade was established along key hyperspace routes, disrupting trade and preventing Republic fleets from moving freely across the galaxy. This blockade placed
                                enormous strain on the Republic's economy and logistics, allowing the Empire to continue its advance. However, as time passed, the Republic started to gain victories as well. The Sith Emperor himself expected a fast, total victory, but by 3653 BY, both sides were exhausted, in a stalemate situation.
                            </p>
                            <p>
                                Eventually, the Sith set up a trap. Diplomatic representatives from both sides agreed to meet on Alderaan on possible ending the war. However, the Imperial fleet started a final, huge, full-scale assault against Coruscant, the Republic capital. Although the Sith couldn't occupy the capital permanently, they effectively hold Coruscant hostage while the negotiations were taking place on Alderaan. In the meantime,
                                the Jedi Temple on Coruscant was attacked by the Sith. In the duel between the two sides, the leader of the invading Sith army, Darth Malgus personally killed Ven Zallow, who was recognized as one of the most powerful Jedi of his era. The Jedi were slaughtered in the battle and the Temple have been completely destroyed.
                                The events on Coruscant later became known as the ,,Sacking of Coruscant", one of the most shocking events of modern galactic history.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/sacking-of-coruscant.jpg'} alt='The sacking of coruscant' height={500} width={500} />
                                <p className={styles.imageDescription}>The Sacking of Coruscant</p>
                            </div>
                            <p>
                                Faced with the devastation of their homeworld and the possibility of further destruction, the Republic delegation had no choice but to accept the Empire's demands. The resulting agreement became known as the Treaty of Coruscant.
                                The treaty formally ended the Great Galactic War and forced the Republic to recognize the Sith Empire as the legitimate ruler of vast territories across the galaxy. Numerous worlds were ceded to Imperial control, while Republic forces were required to withdraw from contested systems. Although the Republic remained intact, the agreement represented a major political victory for the Sith Empire.
                            </p>
                            <p>
                                The next stage of this conflict is known as the Cold War. This was an era where there was an official peace between the two super powers, but both sides were preparing for the continuation of the war.
                                The Jedi Order also faced a difficult period during the Cold War. Following the devastation of Coruscant and the destruction of large parts of the Jedi Temple, the Order made the controversial decision to relocate its headquarters to the ancient world of Tython, the legendary birthplace of the Jedi. There, the Jedi sought to rebuild their ranks and return to the philosophical foundations of their Order,
                                distancing themselves from the increasingly hostile political climate of Coruscant.
                            </p>
                            <p>
                                As time passed, the war between the two sides became more and more inevitable and in 3641 BY, the Galactic War officially begun. There was many important battles with sometimes Republic, sometimes Sith victory, but it would be too long to list them all, so in this section we'll only talk about the most important events of the war.
                                The frozen world of Ilum also became a major flashpoint during the war. Ilum was rich in rare Adegan crystals used by the Jedi to construct lightsabers, making the planet extremely valuable to the Republic. Imperial forces attempted to seize the world and gain control of its crystal resources. During the fighting, both factions discovered ancient Rakatan technology hidden beneath the planet's surface. One of the Empire's most powerful commanders,
                                Darth Malgus, used this technology to construct a massive stealth fleet capable of threatening both the Republic and the Empire itself.
                                Disillusioned with the corruption and political infighting of the Dark Council, Malgus declared the creation of a new Sith Empire, independent from the rule of the traditional Sith leadership. His new order rejected the old Imperial hierarchy and allowed aliens and non-Sith to rise through merit rather than lineage or status. From his fortress on Ilum, Malgus began building a powerful new military force that he intended to use to reshape the galaxy.
                                However, both the Republic and the Sith Empire viewed Malgus's rebellion as a dangerous threat. Forces from both factions launched assaults against Ilum in order to destroy his new Empire before it could expand. During the battle, Malgus was ultimately defeated and his rebellion collapsed, ending his attempt to overthrow the old Sith order.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/malgus.jpg'} alt='malgus' height={500} width={500} />
                                <p className={styles.imageDescription}>Darth Malgus</p>
                            </div>
                            <p>
                                While these conflicts raged across the galaxy, an even more dangerous threat was slowly emerging in the shadows. The Sith Emperor—believed by many to have been destroyed years earlier after the events involving the mysterious Hero Of Tython —had not truly died. Instead, he had survived by transferring his consciousness into new hosts, abandoning the Sith Empire and secretly returning to the distant world of Zakuul in the Unknown Regions.
                                On Zakuul, the Emperor adopted the identity of Valkorion, ruler of a powerful and highly advanced civilization known as the Eternal Empire. Over the years, Valkorion secretly built an enormous military force centered around the Eternal Fleet, a vast armada of highly advanced warships controlled by a powerful automated command system. Unlike the Republic and the Sith Empire, the Eternal Empire had remained hidden from the rest of the galaxy, preparing for the moment when it would emerge as a third galactic superpower.
                                However, in Ziost, he was assasinated by his apprentice Arcann, who took over the Eternal Empire, although he survived on the form of a force spirit, echoing in the voice of an important figure of the events known as the Outlander.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/zakuul.jpg'} alt='zakuul' height={500} width={500} />
                                <p className={styles.imageDescription}>Zakuul, homeland of the Eternal Empire</p>
                            </div>
                            <p>
                                At the same time, another figure from the distant past returned to influence the conflict: Revan, the legendary Jedi Knight and Sith Lord from the Mandalorian Wars and the Jedi Civil War centuries earlier. Revan had disappeared long ago after leaving the Republic to search for the hidden Sith Empire in the Unknown Regions. Eventually he had been captured by the Sith Emperor and imprisoned for centuries.
                                During his captivity, Revan managed to resist the Emperor's attempts to dominate his mind. In fact, his continued resistance helped weaken the Emperor's ability to fully focus his power, indirectly slowing the Sith Empire's conquest of the Republic during the Great Galactic War. Eventually, Revan was freed by a joint strike team of Republic and Imperial forces who discovered the Emperor's prison.
                                However, centuries of imprisonment had left Revan deeply changed. Obsessed with permanently destroying the Sith Emperor, he began gathering followers known as the Revanites, a secretive cult composed of both Republic and Imperial supporters. Revan believed that the only way to defeat the Emperor was to bring about a massive galactic conflict that would draw the Emperor out of hiding.
                                This plan eventually led to the events known as the Revanite Crisis. Revan and his followers attempted to trigger a galaxy-wide catastrophe in order to force the Emperor to fully manifest himself in physical form. Republic and Imperial forces were forced to unite temporarily in order to stop Revan before his plan could succeed.
                                The final confrontation took place on the ancient Rakatan world of Yavin 4, where Revan attempted to use powerful dark side rituals to resurrect the Emperor's physical body. Republic and Imperial strike teams managed to defeat Revan before the ritual could be completed. Revan was finally killed during the battle, bringing an end to the long and tragic story of one of the most legendary figures in galactic history.
                            </p>
                            <p>
                                After the 'death' of the Sith Emperor, Arcann's Eternal Empire invaded the galaxy. As both the Sith Empire and the Republic were unprepared and weakened by their war against each other, the Outlander formed an alliance between all parties, along with smugglers, bounthy hunters, mandalorians and many other known as the Alliance. In the end, the Outlander defeated Arcann, but her sister took over the Eternal Empire. The Outlander defeated her too,
                                and he also managed to finally destroy the Emperor, who was still inside of him in the form of a force spirit, trying to take over him. With both Arcann, Vaylin (his sister), and the Emperor defeated, the Eternal Empire finally collapsed.
                                The aftermath of this conflict is unknown, but as our knowledge, the war ended prior 3522 BY, with the Republic being the finaly winner of the war between them and the Sith Empire.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/valkorion.jpg'} alt='valkorion' height={500} width={500} />
                                <p className={styles.imageDescription}>The Sith Emperor, in the form of Valkorion, ruler of the Eternal Empire</p>
                            </div>
                        </div>
                    </details>
                    <details className={styles.paragraph}>
                        <summary id='h8' className={styles.header}>New Sith Wars (2000 BY - 1000 BY)</summary>
                        <div className={styles.paragraphWrapper}>
                            <p>
                                The New Sith Wars were an era of 1000 years. It wasn't one, big conflict but more like a series of smaller conflicts. Although we have some knowledge about the events of certain conflicts around 
                                those years, this article will focus on the last hundred years, and more particulalry the last 10 years. The last thousand of a war is known as the ,,Republic Dark Age". From the war that lasted over 
                                900 years at this point, the Republic was on the verge of total collapse. 
                                As the war dragged on, the Republic itself began to change. The Senate increasingly relied on the Jedi Order not only for defense but also for leadership during military campaigns. In many cases Jedi generals commanded Republic fleets and armies directly, 
                                while planetary governments depended heavily on Jedi intervention to survive Sith invasions. These Jedi was called as ,,Jedi Lords", and they practically became the 'rulers' of entire planets or even sectors.
                                The Sith wasn't in a much better state though, as there wasn't a single 'Empire', but more like hundreds of smaller Empires led by 
                                Siths who often was fighting against each other as well. This conflict is called as the ,,Sith Civil War" and it lasted until 1010 BY, with the emergence of Skere Kaan.
                            </p>
                            <p>
                                Kaan, originally a Jedi master, denounced the Republic and the Jedi for their inability to halt the decline of galactic civilization. Abandoning the Jedi Order, Kaan rallied a group of likeminded peers called the "Brotherhood", setting out to vanquish the Sith remnants on his own terms.
                                Under the pretense of reforming the republic, Kaan started a campaign against these smaller Sith-enclaves. Within a year, the most powerful of the Sith warlords were either destroyed or intimidated into surrender, earning Kaan commendation from the Jedi Order. Unknown to the Jedi and the 
                                Republic, the Jedi Master had been plotting against his former allies the whole time, assuming the mantle of Dark Lord and uniting the surviving Sith factions to his doctrine of "Rule by the Strong." Setting his plans into motion, Kaan organized his twenty thousand followers into a new Sith 
                                faction called the Brotherhood of Darkness, initiating the final phase of the New Sith Wars.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/skere-kaan.jpg'} alt='brotherhood of darkness' height={500} width={500} />
                                <p className={styles.imageDescription}>Skere Kaan with the Brotherhood of Darkness</p>
                            </div>
                            <p>
                                Unlike earlier Sith traditions that emphasized personal ambition and rivalry, the Brotherhood of Darkness attempted to create a more cooperative Sith order. Sith Lords within the Brotherhood were expected to serve the collective goals of the order rather than pursuing their own individual power. 
                                For a time, this unity allowed the Sith to wage war against the Republic more effectively than ever before. Under Kaan's leadership, the Brotherhood of Darkness gathered a massive army composed of Sith apprentices, soldiers, and dark side adepts. With these forces, the Sith launched major campaigns across 
                                the galaxy, conquering numerous worlds and pushing Republic defenses further back than they had been in centuries.
                            </p>
                            <p>
                                The last 10 years of this conflict is known as the ,,Light and Darkness war", with the Brotherhood of Darkness conquering Korriban and Kashyyk early, and by 1001 BY, they almost conquered Coruscant too. However, an incredibly strong Jedi Lord, Hoth, had been scoring victories against the Sith, and chased them from 
                                world to world. Around 1002 BY, he forged an independent millitary force mainly from jedi, known as the Army of Light.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/hoth.jpg'} alt='hoth' height={500} width={500} />
                                <p className={styles.imageDescription}>Lord Hoth</p>
                            </div>
                            <p>
                                The final series of events in the war are known as the Ruusan campaign. On the planet Ruusan, seven battles happened between the two, and although four of them were won by the Army of Light, they also had huge causalities. The army of light had seven legions in total and they were commanded by the strongest jedi of the era:
                                Hoth himself, Valethyne Farfalla, an aristocratic jedi, Gale, Saleeh, and so on. The Brotherhood of Darkness was lead by Kaan himself, along with his strongest warlords like Qordis, Kopecz, or Githany. Diffeson was rise in both camps, with Hoth and Farfalla particulalry disliking each other. Among the Sith, some of their strong 
                                warlords like Kopecz and Githany started to question Skere Kaan's leadership. Around that time, a sith lord named Darth Bane started to rival Kaan for the power, especially after the young sith defeated Qordis in a duel, who was Kaan's strongest ally.
                                Bane mocked Kaan's reliance on traditional weapons of war, and goaded the Sith leader into using the dark side of the Force to destroy Hoth and the Jedi. With Bane's help, Kaan and the other Dark Lords devastated the unprepared Jedi with a Force Storm that ravaged Ruusan's surface.
                                Fortune began to favor the Jedi, though, as the the timely intervention of Farfalla's envoy and the assistance of Darth Bane (Bane's assistance was unknown to the Jedi), and Hoth's own vision of the dead Pernicar, the two Jedi leaders reconciled, pooling their forces just in time to counteract a renewed Sith surge, leading to the Jedi 
                                gaining the upper-hand and the Sith losing numbers and subsequently being forced to retreat.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/bane.jpg'} alt='bane' height={500} width={500} />
                                <p className={styles.imageDescription}>Darth Bane</p>
                            </div>
                            <p>
                                Finally, with the Sith almost defeated in the Seventh Battle of Ruusan, Skere Kaan decided to use an ancient Sith technique known as the thought bomb, the instructions secretly provided by Darth Bane in a plot to destroy the other Sith Lords and leave Bane to rebuild the Sith under the "Rule of Two. Bane had intentionally deceived Kaan into believing 
                                that the Brotherhood would survive the thought bomb. Lord Hoth, knowing of his opponent's final gambit, took 99 of his most trusted knights with him and confronted Kaan in an attempt to dissuade the Sith Lord from unleashing the weapon. His friend, Tal attempted to dissuade him, having seen disaster through the Force. Lord Farfalla did likewise, but Hoth told both that Kaan had to be stopped.
                                In the ritual of activating the thought bomb, Skere Kaan's mind have been broken, and as he unleashed the thought bomb, he destroyed both Hoth's Jedi and the entirety of the Brotherhood of Darkness. The remaining Sith were quickly defeated by Valethyne Farfalla and his Jedi, and the war officially ended with Jedi victory.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/thought-bomb.jpg'} alt='thought bomb' height={500} width={500} />
                                <p className={styles.imageDescription}>The ritual to invoke the thought bomb</p>
                            </div>
                            <p>
                                After the war, both the Jedi and the Sith have been reformed. Valethyne Farfalla was the highest ranked remaining Jedi, and he used his authority to restore the Jedi Order back to what it once was, handing back the control of 
                                galactic leadership to civilians, and 'disbanding' the Jedi Lords. Meanwhile the Sith Order was completely reformed by Darth Bane. He took his apprentice, Darth Zannah, and they went into hiding. Bane declared there can be only two sith: A master and an apprentice.
                                Bane and Zannah were staying in the shadows, apart from a single exception, around 990 BY. Some of the Jedi, lead by Farfalla, became aware of Bane's existence. In the duel of Tython, Bane and Zannah killed Farfalla and every Jedi that was present, and as such, nobody 
                                whom known about their existence was alive anymore. After that, no Jedi and Sith duelled for almost 1000 years until Qui-Gon Jinn's duel with Darth Maul on Tatooine.
                                In the next 1000 years, the Sith were hiding from the public, but as time passed, they grew on power. Eventually, the Sith took control once again under Darth Sidious's reign, who was the final Sith master in the rule of two.
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image src={'/history/duel-of-tython.jpg'} alt='duel of tython' height={500} width={500} />
                                <p className={styles.imageDescription}>The duel of Tython</p>
                            </div>
                        </div>
                    </details>
                </ div>
            )}
        </div>
    )
}
