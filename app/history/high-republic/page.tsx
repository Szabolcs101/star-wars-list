import { SvgHighRepublicSolid } from '@/app/components/icons/icons';
import styles from '../detailed-historypage.module.css';
import Image from 'next/image';

export default function HighRepublicPage() {
    return (
        <div className={styles.page}>
            <h2 className={styles.title}>The High Republic</h2>
            <SvgHighRepublicSolid className={styles.icon} />

            <div className={styles.tab}>
                <h4 className={styles.tabElement}>CANON</h4>
            </div>

            <div className={styles.contentParagraph}>
                <h4 className={styles.header}>Contents</h4>
                <ol>
                    <li><a href='#h1'>Golden Age Of The Republic</a></li>
                    <li><a href='#h2'>Nihil conflict</a></li>
                    <li><a href='#h3'>Drengir-crisis</a></li>
                </ol>
            </div>

            <div className={styles.content}>
                <details className={styles.paragraph}>
                    <summary id='h1' className={styles.header}>Golden Age Of The Republic</summary>
                    <div className={styles.paragraphWrapper}>
                        <p>
                            The Golden Age Of The Republic is the era from 500 BY to 100 BY. Some time between 1050 and 1032 BBY a new war erupted between the Sith and the Jedi. The Sith, now organised as the Brotherhood of Darkness,
                            eventually gained the upper hand, occupied Coruscant and took control of the Jedi Temple. The Old Republic collapsed and the Sith became the dominant power in the Galaxy, as the Jedi were forced into exile;
                            however, the conflict was not over, since both the Jedi and Old Republic loyalists continued the fight against the triumphing Sith. This era is known as the Fall Of The Old Republic.
                            Eventually, both the Jedi and the remnants of the Old Republic managed to reorganize their forces and fight back against the Sith. The Jedi Order emerged victorious from the war, managing to recapture Coruscant
                            from the Sith who occupied the capital. The war ended with the Sith's defeat, with all but one Dark Lord dead. After 1032 BBY, the Old Republic, now having brought peace to the galaxy, reorganized itself, resulting
                            in the establishment of the modern Galactic Republic. Tarsus Valorum was elected as the first Supreme Chancellor soon thereafter.
                        </p>
                        <p>
                            This is an era that exists in Legends too, it's known as the ,,Golden Age Of The Old Republic", but although a few things happened during that era in the legends version too, there isn't anything very important or too detailed,
                            so in this article, only the Canon version will be described.
                        </p>
                    </div>
                </details>

                <details className={styles.paragraph}>
                    <summary id='h1' className={styles.header}>Nihil conflict (232 BY - 229 BY)</summary>
                    <div className={styles.paragraphWrapper}>
                        <p>
                            The Nihil conflict was the biggest threat to the galaxy in the era. It was named after the Nihil, a nomadic group of marauders. Under the leadership of the evereni Marchion Ro, their goal was to put the Republic into terror.
                            They had access to mysterious hyperspace routes known as "Paths" that defied conventional hyperspace logic and allowed them to travel through hyperspace in ways no one else could and take seemingly impossible routes no one else could take.
                            Though they originally focused on performing raiding operations throughout the galaxy's Outer Rim Territories, the Nihil, with the help of their Paths, emerged as a significant threat to the Galactic Republic during a time of expansion and led
                            them to conduct a series of anti-piracy operations against the Nihil. They were headquartered in the Great Hall of the Nihil, a space station in No-Space that was only accessible through the Path engines.
                            The Nihil were not a traditional government or empire but a chaotic group of marauders who operated beyond the laws of the Republic. Their fleets were organized into three divisions known as Tempests, each commanded by a powerful Tempest Runner.
                            These pirates relied on fear, surprise attacks, and overwhelming violence to raid settlements across the Outer Rim.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/nihil.jpg'} alt='the nihil' height={300} width={700} />
                            <p className={styles.imageDescription}>The Nihil, with Marchion Ro sitting on his throne</p>
                        </div>
                        <p>
                            Leading the Republic during this period was Supreme Chancellor Lina Soh, a visionary political leader who believed the galaxy was entering a new golden age. Soh championed a massive expansion program designed to connect distant systems more closely
                            to the Republic. Her government sponsored the construction of advanced hyperspace routes, communication networks, and infrastructure that would allow the Republic to safely expand into the frontier.
                            One of her greatest initiatives was the creation of the Starlight Beacon, an enormous space station built in the Outer Rim. The station was intended to serve as a symbol of unity and cooperation between the Republic and the Jedi Order. Acting as both a
                            diplomatic center and a navigational hub, Starlight Beacon allowed hyperspace traffic to travel safely through previously dangerous regions of space while also providing aid and protection to frontier systems.
                            At the time of its construction, many believed the beacon represented the beginning of a new era of peace and prosperity.
                        </p>
                        <p>
                            In 232 BBY, the galaxy was struck by a catastrophic event known as the Great Hyperspace Disaster. Without warning, a massive transport vessel called the Legacy Run was torn apart while traveling through hyperspace. The ship fragmented into countless pieces, each
                            still traveling at near-lightspeed. These fragments began emerging unpredictably across multiple star systems, creating deadly hyperspace anomalies capable of destroying entire planets.
                            Entire cities were nearly annihilated when these fragments exited hyperspace. One of the most devastating near-collisions occurred above the planet Hetzal Prime, where a massive fragment threatened to crash into the planet's largest city. Jedi from across the
                            sector—including Avar Kriss, Elzar Mann, Bell Zettifar, and the legendary Trandoshan Jedi Sskeer—worked together to stop the disaster. Through extraordinary coordination in the Force, the Jedi managed to slow and redirect the debris before it could devastate the planet.
                            The Republic quickly mobilized relief efforts, and Chancellor Lina Soh used the disaster to accelerate her plans for deeper Outer Rim expansion.
                            The Great Hyperspace Disaster was orchestrated by the Nihil from the shadows, as the first step of their plan to cause chaos in the galaxy.
                            In the aftermath of the disaster, Loden Greatstorm, one of the strongest Jedi of his era and Bell Zettifar's padawan was captured by the Nihil.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/great-hyperspace-disaster.jpg'} alt='great hyperspace disaster' height={300} width={700} />
                            <p className={styles.imageDescription}>The Great Hyperspace Disaster</p>
                        </div>
                        <p>
                            Although the Hetzal system had been saved, fragments of the Legacy Run continued to exit hyperspace at seemingly random points, beginning a series of Emergences. The danger was such that Chancellor Soh ordered an interdiction on hyperspace travel through large swathes of the
                            Outer Rim while a task force worked to contain the situation.
                            Entire civilizations were lost to the Emergences. The Koboh system was affected by the disaster when an Emergence destroyed its moon, sending fragments onto Koboh itself. A research facility was used as shelter by Republic scientists on its moon. The entire system was soon evacuated by the Jedi Council.
                            The planet Brendok was affected by an Emergence as well, rendering it lifeless.
                        </p>
                        <p>
                            Determined to prove that the Republic remained strong despite the disaster, Chancellor Lina Soh organized a massive celebration known as the Republic Fair on the world of Valo. The event was intended to showcase the technological achievements and unity of the Republic. Thousands of citizens, diplomats, and
                            traders from across the galaxy gathered to celebrate.
                            The Jedi Order was heavily involved in protecting the fair, with prominent Jedi such as Stellan Gios, Elzar Mann, Bell Zettifar, and Ty Yorrick participating in security efforts.
                            However, the Nihil launched a massive surprise assault on the fair.
                            Using their secret hyperspace Paths, Nihil fleets appeared suddenly above the planet and attacked the event with devastating force. Their goal was not simple destruction but psychological terror. They sabotaged infrastructure, unleashed monstrous creatures into the crowd, and spread chaos across the city.
                            Although the Jedi and Republic forces eventually repelled the attack, the damage had already been done. Thousands were killed, the fair was devastated, and the Republic's image of safety and stability was badly shaken.
                            For Marchion Ro, the attack was a major victory. The galaxy had begun to realize that the Nihil could strike anywhere at any time.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/republic-fair.jpg'} alt='the republic fair on valo' height={300} width={700} />
                            <p className={styles.imageDescription}>The Republic and the Jedi defending the Fair in Valo</p>
                        </div>
                        <p>
                            In the aftermath of the attack on Valo, the jedi started a counterattack. The Jedi were able to locate the base of the Nihil after allowing the pirate Quin Amarant to escape Valo in a shuttle aboard which Jedi Knight Indeera Stokes and her Padawan Bell Zettifar were hiding, allowing the two to activate a homing beacon upon their arrival on the planet.
                            Once the signal was received, Jedi Master Stellan Gios and his Red Group departed the ongoing skirmish at Cyclor against one Tempest of the Nihil, arriving at Grizal and assaulting the base.
                            During the attack, Zettifar was briefly reunited with his thought-dead Master, Loden Greatstorm, who had been a prisoner of the Nihil. However, Eye of the Nihil Marchion Ro unleashed a weapon called the Great Leveler against the Jedi, killing Greatstorm and traumatizing Zettifar.
                            In the aftermath, the Jedi assumed that the Twi'lek Tempest Runner Lourna Dee, who had escaped the battle, was the true leader of the Nihil, with Marchion Ro still being undiscovered.
                            This event is known as the battle of Grizal.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/grizal.jpg'} alt='grizal' height={300} width={700} />
                            <p className={styles.imageDescription}>Stellan Gios and Indeera Stokes finding Loden Greatstorm's body after the battle of Grizal</p>
                        </div>
                        <p>
                            In the years following the Valo attack, the Republic and the Jedi intensified their efforts to defeat the Nihil. Starlight Beacon became the central command center for Jedi operations in the Outer Rim, coordinating relief efforts and organizing military responses to Nihil raids.
                            The beacon also served as a refuge for worlds threatened by the Nihil and as a symbol of the Republic's commitment to protecting the frontier.
                            Meanwhile, on a mission to planet X, Marchion Ro and the Nihil managed to capture many of the Shirikarai, (also known as the Nameless). The Nameless very an ancient species that could cut someone off the force, resulting in
                            the death of Jedi who connected with them immediately. The Great Leveler, the beast responsible for Loden Greatstorm's death was also a Shirikarai.
                        </p>
                        <p>
                            In 229 BBY, Marchion Ro executed a coordinated operation designed to destroy the Republic's greatest symbol in the Outer Rim.
                            Nihil agents infiltrated Starlight Beacon and sabotaged its systems, disabling communications and navigation controls. At the same time, Nihil forces attacked the station from outside, trapping thousands of civilians and Jedi aboard.
                            As the station began to fall out of orbit, Jedi desperately attempted to evacuate the population and stabilize the structure. Many heroes sacrificed themselves during the disaster. Jedi such as Avar Kriss, Elzar Mann,
                            Bell Zettifar, and Burryaga Agaburry struggled to save as many lives as possible while the station collapsed.
                            Despite their efforts, Starlight Beacon ultimately fell toward the nearby planet Eiram, breaking apart in the atmosphere and killing countless people.
                            The destruction of Starlight Beacon was a catastrophic blow to the Republic. The symbol of unity and hope that Chancellor Lina Soh had created was gone, and the Outer Rim was thrown into chaos.
                            Marchion Ro declared a large region of space under Nihil control, cutting it off from the Republic and establishing what became known as the Occlusion Zone.
                            Stellan Gios, who was the organizer of the security of the Valo Republic Fair, and who was one of the highest ranking Jedi of the era, has died in the incident, along with many other Jedi, like Nib Assek or Regald Coll.
                            Some Jedi also went missing like the wookie padawan Burryaga.
                            After the incident, Marchion Ro revealed himself to the public, as the jedi still believed that the leader of the Nihil was Lourna Dee, one of Ro's commanders.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/starlight-beacon.jpg'} alt='destroy starlight beacon' height={300} width={700} />
                            <p className={styles.imageDescription}>The Jedi, watching as the Starlight Beacon falls</p>
                        </div>
                        <p>
                            Chancellor Lina Soh wanted to strike back against the Nihil after the destruction of the beacon and asked Jedi Council for help. But the Jedi refused. In response to the Nihil's weaponization of the Nameless aboard Starlight Beacon, the Jedi sent out a recall beacon
                            urging all Jedi to leave the Outer Rim and return to Coruscant. Even though the Jedi could not help them, Soh and the Republic sent the Republic Defense Coalition Outreach Fleet to strike back against the Nihil and limit their power and influence. Unbeknownst to the Republic,
                            Marchion Ro had developed technology known as stormseeds. These had the power to destroy starships traveling in hyperspace through areas of the galaxy they were activated in. Ro successfully used them against the Republic Defense Coalition Outreach Fleet and destroyed it, managing
                            to cut off ten Outer Rim sectors from the rest of the Republic. This changed the face of the galaxy, restricting Republic interference and presence in the Outer Rim and establishing the Nihil as the absolute controlling power in the region during this time.
                            In pursuit of the journal Azlin Rell had written about the Nameless, Ro allied with former Path-hired mercenary Vol Garat and ordered the Nihil to attack Banchii. Digging through the ruins of the Banchii Jedi temple, the Nihil and Garat found the journal after Ro departed, but the
                            still-active ZZ-10 sent a distress call to the now-Jedi Master Arkoff while distracting Garat with the story of how they found the journal. Arkoff arrived with Savina Besatrix Malagán and recovered the journal and ZZ-10. The blight foretold by Bokana Koss was spreading randomly across
                            galactic planets by 228 BBY. In order to finally stop the blight, the Jedi Order marshalled a mission to planet X, in which they would bring the Nameless home to stop the blight. In the name of cementing himself, meanwhile, Ro was willing to let the blight destroy everything across the galaxy.
                            He was captured and put on trial before the Senate, which he mocked as an ineffective institution. The Occlusion Zone, meanwhile, was dissolved and liberated.
                        </p>
                    </div>
                </details>

                <details className={styles.paragraph}>
                    <summary id='h1' className={styles.header}>Drengir-crisis (232 BY - 231 BY)</summary>
                    <div className={styles.paragraphWrapper}>
                        <p>
                            The Drengir crisis happened the same time as the Nihil conflict. The Drengir were a plant-like species of sentient, amorphous carnivores from the Wild Space planet Mulita who threatened to reap harvest across the Galactic Frontier during the High Republic Era.
                            With twisted tentacles and a maw arrayed with teeth, the avaricious creatures shared a collective consciousness known as the root-mind that could dominate and corrupt other minds—even those of Jedi. The Jedi Knights feared the Drengir as meat was their sole desire, 
                            and they spread a darkness so great it perturbed and swayed Jedi Knights into their own collective mind, inflaming the chaos and imbalance upon which the Drengir thrived.
                            With an aptitude for healing, the Drengir were largely impervious to the scorches of blasters and singes of lightsabers. When seared in half by the blade of a lightsaber, a Drengir could simply reform with two animated bodies. In the aftermath of the Great Hyperspace Disaster, the Drengir spread in search of food, 
                            although they lacked the scheming nature and power structure of the anarchistic Nihil marauders that battled the Galactic Republic.
                            The Drengir crisis was tasked to be handled by jedi master Avar Kriss.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/drengir.jpg'} alt='drengir' height={300} width={700} />
                            <p className={styles.imageDescription}>The Drengir</p>
                        </div>
                        <p>
                            The Drengir attacked many planets, but the Jedi, with help from the Hutt, defeated them in the Amixane station (the place where the Drengir was accidently released and discovered by the jedi), on Nal Hutta, the Hutt planet, and Sedri Minor.
                            In the slaughter on Daivak, the Jedi led by Kriss, along with the Hutts, defeated the Drengir and discovered the  the location of the Great Progenitor, the first Drengir, which pained the plant creatures and forced them to retreat. As a result, Kriss next planned an assault on the Drengir rootworld to bring an end to the threat.
                            Not soon later, Avar and the jedi defeated the Great Progenitor on the planet Mulita, and although the Drengir weren't destroyed, they've been weakened enough that the Drengir conflict can be considered closed.
                        </p>
                        <div className={styles.imageWrapper}>
                            <Image src={'/history/avar-kriss.jpg'} alt='avar kris drengir' height={300} width={700} />
                            <p className={styles.imageDescription}>Avar Kriss fighting against the Drengir</p>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    )
}
