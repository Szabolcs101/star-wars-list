import { SvgNewRepublicSolid } from '@/app/components/icons/icons';
import styles from '../detailed-historypage.module.css';
import Image from 'next/image';
import HistoryTabs from '../_components/history-tabs';

const CanonContent = () => (
    <div>
        <div className={styles.contentParagraph}>
            <h4 className={styles.header}>Contents</h4>
            <ol>
                <li><a href='#h1'>The New Republic</a></li>
            </ol>
        </div>

        <div className={styles.content}>
            <details className={styles.paragraph}>
                <summary id='h2' className={styles.header}>The New Republic</summary>
                <div className={styles.paragraphWrapper}>
                    <p>
                        Although the Emperor had been killed at Endor, the Empire did not collapse immediately. Numerous Imperial warlords and surviving admirals attempted to maintain
                        control over their territories, leading to several additional years of fighting across the galaxy.
                        The New Republic rapidly expanded its influence, liberating worlds that had remained under Imperial occupation.
                        Major campaigns were fought against Imperial forces across multiple sectors as the Rebel fleet—now the navy of the New Republic—pushed deeper into Imperial space.
                        The final decisive confrontation occurred at the Battle of Jakku in 5 ABY. The remaining Imperial fleet attempted to make a last stand against
                        the New Republic in a massive engagement over the desert planet Jakku. The battle ended in a catastrophic defeat for the Empire.
                        Following this defeat, the surviving Imperial leadership signed the Galactic Concordance, a treaty formally ending the Galactic Civil War.
                        The Empire agreed to disarm much of its military, withdraw from many conquered territories, and accept the authority of the New Republic.
                        However, not all Imperial forces accepted the surrender. A number of loyal officers and fleets fled into the Unknown Regions, where
                        they would eventually regroup and begin rebuilding their strength.
                    </p>
                    <p>
                        With the war largely concluded, the New Republic began reorganizing the political structure of the galaxy. Rather than restoring the highly centralized government of the old Republic,
                        the new leadership attempted to create a more decentralized system in order to avoid the corruption and concentration of power that had allowed Palpatine to rise to power.
                        One of the most influential political leaders of this era was Mon Mothma, who became the first Chancellor of the New Republic. Under her leadership,
                        government began demilitarizing much of its military forces. Mothma believed that maintaining a large standing army could eventually lead to another authoritarian regime.
                        Instead of ruling from a permanent capital like Coruscant, the New Republic established a rotating capital system in which the Senate
                        would move between different member worlds. This was intended to ensure that no single planet held too much political influence.
                        Despite these reforms, the government soon became divided by political factions within the Senate. Two major groups eventually emerged:
                        the Populists, who favored strong planetary autonomy, and the Centrists, who supported a more powerful central government.
                        These political disagreements would later weaken the New Republic's ability to respond to emerging threats.
                    </p>
                    <p>
                        During this same period, Luke Skywalker began searching the galaxy for knowledge about the ancient Jedi Order. As the last trained Jedi Knight after the
                        fall of the Empire, Luke believed it was his responsibility to restore the Jedi and ensure that the Force would once again be guided by those who served the light side.
                        Over the years, Luke traveled across many worlds studying ancient Jedi temples and collecting lost texts about the Force. Eventually he began training a
                        new generation of Force-sensitive students, hoping to rebuild the Jedi Order.
                        Among these students was Ben Solo, the son of Leia Organa and Han Solo, and Luke's own nephew. Luke believed that Ben had the potential
                        to become one of the most powerful Jedi of the new generation.
                        However, unknown to Luke, Ben had already begun to fall under the influence of the dark side.
                    </p>
                    <p>
                        While the New Republic enjoyed several decades of relative peace, the remnants of the Galactic Empire were quietly rebuilding their strength
                        in the Unknown Regions. Over time, these Imperial survivors reorganized themselves into a new military power known as the First Order.
                        The First Order maintained many of the traditions and military structures of the old Empire, but it also grew increasingly radical and
                        fanatical. Its leaders believed that the Empire had failed because it had not ruled with enough absolute power.
                        Although the First Order was growing steadily stronger, the New Republic Senate largely ignored the threat. Many politicians believed
                        the First Order was only a minor remnant of the old Empire and posed little danger to the galaxy.
                    </p>
                    <p>
                        At some point during this era, Ben Solo fully turned to the dark side after years of manipulation by the mysterious dark side leader Snoke.
                        Believing that his uncle intended to kill him after sensing the darkness within him, Ben destroyed Luke's
                        Jedi temple and killed or scattered many of Luke's students.
                        After the destruction of the temple, Ben joined Snoke and the First Order, taking the name Kylo Ren. The event devastated Luke Skywalker, who
                        believed he had failed both the Jedi and his own family.
                        Overwhelmed by guilt, Luke went into exile and disappeared to the remote world of Ahch-To, leaving the galaxy
                        without a Jedi to oppose the rising dark side.
                    </p>
                    <p>
                        Although the New Republic Senate continued to ignore the growing power of the First Order, Leia Organa recognized the danger it posed.
                        Unable to convince the Senate to take decisive action, Leia left the government and formed a private military organization known as the Resistance.
                        The Resistance was composed of volunteers, former Rebel veterans, and sympathetic systems that believed the First Order posed a serious threat. Their goal was to monitor
                        the First Order and prepare to fight it if necessary.
                        However, because the New Republic refused to officially support the Resistance, the organization remained relatively small and poorly
                        supplied compared to the First Order's rapidly expanding military.
                    </p>
                    <p>
                        The era of the New Republic ultimately ended abruptly in 34 ABY when the First Order unveiled its superweapon Starkiller Base.
                        In a devastating surprise attack, the weapon destroyed the Hosnian system, which had become the current capital of the New Republic and the location of its central fleet.
                        The attack wiped out much of the Republic's government and military leadership in a single moment.
                        With the New Republic effectively decapitated and its fleet destroyed, the First Order launched a massive military campaign across the galaxy.
                        Although the Resistance continued fighting, the New Republic itself ceased to function as a unified government.
                        The destruction of the Hosnian system marked the end of the Age of the New Republic and the beginning of a new galactic conflict,
                        as the First Order attempted to succeed where the Empire had failed and reestablish authoritarian rule over the galaxy.
                    </p>
                </div>
            </details>
        </div>
    </div>
);

const LegendsContent = () => (
    <div>
        <div className={styles.contentParagraph}>
            <h4 className={styles.header}>Contents</h4>
            <ol>
                <li><a href='#h1'>Thrawn</a></li>
                <li><a href='#h2'>Dark Empire</a></li>
                <li><a href='#h3'>Kyle Katarn</a></li>
                <li><a href='#h4'>Yuuzhan Vong</a></li>
                <li><a href='#h5'>Second Galactic Civil War</a></li>
                <li><a href='#h6'>Abeloth</a></li>
                <li><a href='#h7'>Legacy</a></li>
            </ol>
        </div>

        <div className={styles.content}>
            <details className={styles.paragraph}>
                <summary id='h1' className={styles.header}>Thrawn (9 AY)</summary>
                <div className={styles.paragraphWrapper}>
                    <p>
                        Five years after the destruction of the second Death Star and the death of Emperor Palpatine, the New Republic had managed to liberate much of the
                        galaxy from Imperial control. Many of the Empire's surviving leaders had been defeated or reduced to ruling small isolated territories, and it
                        appeared that the long Galactic Civil War was nearing its end. However, the Empire still possessed one final commander capable of turning the war around: Grand Admiral Thrawn.
                        Thrawn, a brilliant strategist from the alien Chiss species, had been one of the Empire's most capable military leaders during Palpatine's reign. Unlike most Imperial officers,
                        Thrawn possessed an extraordinary ability to understand and predict his enemies by studying their art, culture, and psychology. During the chaos following the Emperor's death,
                        Thrawn had remained largely absent from the central conflict, operating in the distant regions of the Empire.
                        In 9 ABY, Thrawn returned and assumed command of the remaining Imperial forces. From his flagship, the Star Destroyer Chimaera, he began organizing the fractured Imperial
                        remnants into a disciplined and coordinated military once again. His goal was nothing less than the destruction of the New Republic and the
                        restoration of Imperial rule across the galaxy.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/thrawn.jpg'} alt='thrawn' height={200} width={700} />
                        <p className={styles.imageDescription}>Admiral Thrawn</p>
                    </div>
                    <p>
                        One of Thrawn's first actions was to secure new resources that could compensate for the Empire's reduced fleet. He discovered a hidden storehouse
                        of Spaarti cloning cylinders on the planet Wayland, originally placed there by Emperor Palpatine. These cloning devices allowed soldiers
                        and officers to be grown rapidly, enabling Thrawn to rebuild the Empire's military forces much faster than the New Republic expected.
                        The cloning facility was guarded by a mysterious and dangerous Dark Jedi known as Joruus C'baoth, a twisted clone of the former Jedi Master Jorus C'baoth who had served during the
                        final days of the Republic. Thrawn formed an uneasy alliance with C'baoth, promising him Jedi apprentices in exchange for his assistance.
                        While Thrawn rebuilt his forces, he also began deploying a unique and devastating weapon: ysalamiri, small creatures capable of creating bubbles in
                        which the Force could not be used. These creatures allowed Imperial forces to neutralize the advantages normally possessed by Jedi opponents.
                    </p>
                    <p>
                        One of Thrawn's first actions was to secure new resources that could compensate for the Empire's reduced fleet. He
                        discovered a hidden storehouse of Spaarti cloning cylinders on the planet Wayland,
                        originally placed there by Emperor Palpatine. These cloning devices allowed soldiers and officers to be grown rapidly, enabling
                        Thrawn to rebuild the Empire's
                        military forces much faster than the New Republic expected.
                        The cloning facility was guarded by a mysterious and dangerous Dark Jedi known as Joruus C'baoth, a twisted clone of
                        the former Jedi Master Jorus C'baoth who had served during the final days of
                        the Republic. Thrawn formed an uneasy alliance with C'baoth, promising him Jedi apprentices in exchange for his assistance.
                        While Thrawn rebuilt his forces, he also began deploying a unique and devastating weapon: ysalamiri, small creatures
                        capable of creating bubbles in which the Force
                        could not be used. These creatures allowed Imperial forces to neutralize the advantages normally possessed by Jedi opponents.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/cbaoth.jpg'} alt='joruus cbaoth' height={200} width={300} />
                        <p className={styles.imageDescription}>Joruus C'Baoth</p>
                    </div>
                    <p>
                        Another key element of Thrawn's strategy involved the Noghri, a species of elite assassins who had served Darth Vader with absolute loyalty during the reign of the Empire. The Noghri believed that Vader had saved their homeworld from ecological
                        disaster, and they continued serving the Empire out of gratitude and loyalty.
                        Thrawn used the Noghri as deadly agents against the New Republic, repeatedly sending them on missions to capture or assassinate important figures. One of their
                        primary targets was Leia Organa, who was pregnant with twins during this period and had become one of the New Republic's most influential leaders.
                        Eventually Leia discovered that the Empire had actually been responsible for the environmental devastation of the Noghri homeworld, and that
                        the supposed “help” Vader had provided had only been a way to keep the Noghri dependent on Imperial technology. When the truth was revealed,
                        the Noghri abandoned their loyalty to the Empire and pledged themselves to Leia instead.
                        This betrayal would later prove decisive.
                    </p>
                    <p>
                        As the campaign continued, Thrawn launched several successful military operations against the New Republic. His strategic brilliance allowed the
                        Empire to win multiple victories despite being heavily outnumbered. In several engagements he managed to trap and defeat New Republic fleets using
                        clever deception and psychological manipulation.
                        Meanwhile, Luke Skywalker attempted to confront Joruus C'baoth, who had become increasingly unstable and dangerous. C'baoth was obsessed with gaining
                        control over Luke and Leia's future children, believing they could become powerful tools in his quest to dominate the galaxy.
                        The unstable Dark Jedi ultimately turned against Thrawn, attempting to seize control of the Empire for himself.
                    </p>
                    <p>
                        As the conflict reached its climax, Thrawn launched a final series of attacks intended to cripple the New Republic and secure total Imperial victory. His plans were close to success,
                        and the Empire appeared on the verge of regaining much of the power it had lost after Endor.
                        However, Thrawn's campaign came to a sudden and unexpected end. In the battle of Bilbingri, in the middle of a battle between Thrawn's Federation and the New Republic,
                        he was assassinated aboard the Chimaera by Rukh, one of the Noghri commandos who had served as his personal bodyguard.
                        Rukh had learned the truth about the Empire's deception regarding the Noghri homeworld and chose to avenge his people by killing the Grand Admiral.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/bilbingri.jpg'} alt='battle of bilbingri' height={200} width={300} />
                        <p className={styles.imageDescription}>The battle of Bilbingri</p>
                    </div>
                    <p>
                        Thrawn's death immediately threw the Imperial forces into chaos. The Empire had relied heavily on his leadership and
                        strategic genius, and without him the remaining commanders were unable to maintain coordination.
                        At the same time, Joruus C'baoth's instability led to further internal conflict among the Imperial forces. Luke Skywalker eventually confronted
                        and defeated the mad clone, eliminating one of the last major dark side threats involved in the campaign.
                        Without Thrawn to guide them, the Imperial remnants quickly lost their momentum. The New Republic was able to regain the initiative, and the
                        Empire's final attempt to reclaim the galaxy collapsed.
                    </p>
                </div>
            </details>

            <details className={styles.paragraph}>
                <summary id='h2' className={styles.header}>Dark Empire (10 AY - 11 AY)</summary>
                <div className={styles.paragraphWrapper}>
                    <p>
                        Roughly a year after the defeat of Grand Admiral Thrawn, the New Republic once again believed that the remnants of the Galactic Empire had been pushed to the brink of collapse.
                        However, unknown to the galaxy, a far more dangerous threat had been quietly preparing in the shadows. The Sith Lord Emperor Palpatine, believed to have died during
                        the Battle of Endor, had secretly survived by transferring his consciousness into a series of cloned bodies.
                        From the hidden Deep Core world of Byss, Palpatine had spent years rebuilding his power. There he established a new center of Imperial authority
                        known as the Dark Empire, supported by fanatically loyal Imperial forces, dark side adepts, and a massive hidden fleet.
                        Using advanced cloning technology and Sith rituals, the Emperor repeatedly transferred his spirit into new bodies whenever his
                        current form deteriorated under the immense power of the dark side.
                        In 10 ABY, Palpatine finally revealed his return to the galaxy and launched a massive military offensive against the New Republic.
                    </p>
                    <p>
                        The reborn Emperor possessed weapons far more powerful than anything the Empire had used during the Galactic Civil War.
                        Among these was the terrifying Galaxy Gun, a superweapon capable of firing hyperspace-guided missiles that could destroy
                        planets from across the galaxy.
                        Even more dangerous were the massive World Devastators, enormous automated war machines capable of consuming entire planets' natural resources
                        and converting them into new Imperial warships and military equipment.
                        Using these weapons, Palpatine's forces quickly overwhelmed many New Republic defenses. Several important systems fell under Imperial control, and the
                        New Republic government was forced to abandon Coruscant, its capital world, as the Dark Empire captured the planet.
                        With Coruscant under Imperial control once again, it appeared that Palpatine might successfully restore Sith domination over the galaxy.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/devastator.jpg'} alt='world devastator' height={200} width={300} />
                        <p className={styles.imageDescription}>A World Devastator</p>
                    </div>
                    <p>
                        Realizing that Palpatine had returned as a powerful Sith master, Luke Skywalker became convinced that the only
                        way to defeat him was to understand the full nature of the dark side. Believing he might be able to learn the
                        Emperor's secrets and destroy the Sith from within, Luke voluntarily surrendered himself to Palpatine and joined him as an apparent apprentice.
                        Although many members of the New Republic believed Luke had truly fallen to the dark side, his intention was actually to infiltrate
                        the Emperor's inner circle and discover the source of his power. During this time Luke studied ancient Sith knowledge
                        and learned how Palpatine was sustaining himself through cloning and dark side rituals.
                        However, the influence of the dark side proved extremely dangerous, and Luke came close to being completely consumed by it.
                    </p>
                    <p>
                        Luke's sister, Leia Organa, who was herself strong in the Force, refused to believe that Luke had truly turned evil.
                        Determined to save him, she confronted him directly on Coruscant while pregnant with her third child.
                        Leia managed to break through Luke's connection to the dark side, reminding him of his true purpose as a Jedi. With Leia's help,
                        Luke escaped Palpatine's control and returned to the light side of the Force.
                        At the same time, Leia began developing her own abilities in the Force, guided by Luke and the lingering presence of the Jedi spirit
                        Anakin Skywalker, who encouraged her to stand against the Emperor.
                    </p>
                    <p>
                        As the war intensified, Palpatine prepared an ultimate weapon powered by dark side energy known as a Force Storm.
                        These massive hyperspace anomalies could destroy entire fleets and even transport objects across the galaxy.
                        The Emperor attempted to use these storms to annihilate the New Republic leadership and secure his final victory.
                        However, during the final confrontation, Luke and Leia united their strength in the Force to oppose the Emperor.
                        With the help of the dying Jedi Knight Empatojayos Brand, they managed to prevent Palpatine's spirit from escaping into yet another cloned body.
                        Brand sacrificed himself by trapping Palpatine's spirit and carrying it into the Netherworld of the Force, permanently
                        destroying the Sith Lord at last.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/force-storm.jpg'} alt='force storm' height={200} width={300} />
                        <p className={styles.imageDescription}>Emperor Palpatine's force storm</p>
                    </div>
                    <p>
                        With Palpatine finally destroyed, the Dark Empire rapidly began to collapse. Without the Emperor's leadership and supernatural
                        power holding it together, the remaining Imperial forces descended into disorganization and internal conflict.
                        The Galaxy Gun and the World Devastators were eventually destroyed, eliminating the greatest military threats created by the Dark Empire.
                        Although Imperial warlords would continue to exist throughout the galaxy, the destruction of Palpatine's reborn empire marked the end of the
                        Sith's final attempt to reclaim control of the galaxy during this era.
                    </p>
                </div>
            </details>

            <details className={styles.paragraph}>
                <summary id='h3' className={styles.header}>Kyle Katarn (0 BY - 14 AY)</summary>
                <div className={styles.paragraphWrapper}>
                    <p>
                        Kyle Katarn was born on the agricultural world of Sulon, the son of Morgan Katarn, a respected war hero who had served the Galactic Republic during
                        the Clone Wars. After the rise of the Galactic Empire, Kyle joined the Imperial Academy, believing he was serving the same cause his father had once fought for.
                        However, during his service Kyle discovered the truth about the Empire's corruption and brutality. Even worse, he learned that his father had been murdered by the Dark Jedi
                        Jerec, one of the Emperor's agents who had been searching for ancient Force-related artifacts.
                        Disillusioned and seeking revenge, Kyle deserted the Empire and eventually became a mercenary. During this time he was recruited by the
                        Rebel Alliance, who recognized both his skills and his inside knowledge of Imperial operations.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/kyle-katarn.jpg'} alt='kyle katarn' height={200} width={300} />
                        <p className={styles.imageDescription}>Kyle Katarn</p>
                    </div>
                    <p>
                        During the Galactic Civil War, the Empire began developing a secret super-soldier program known as the Dark Trooper Project.
                        This program aimed to create heavily armored battle droids and eventually cybernetically enhanced soldiers that could serve as unstoppable shock troops for the Imperial military.
                        The Rebel Alliance assigned Kyle Katarn to infiltrate Imperial facilities and uncover the details of the project
                        Kyle carried out numerous missions against Imperial targets, including the theft of the Death Star plans, which were later delivered
                        to the Rebel Alliance and made possible the destruction of the first Death Star during the Battle of Yavin.
                        As the war continued, Kyle gradually uncovered the full scope of the Dark Trooper Project, which was being developed under the command of
                        General Rom Mohc. In the final stage of the operation, Mohc intended to deploy advanced Phase III Dark Troopers, powerful exoskeleton suits
                        capable of turning ordinary soldiers into near-invincible warriors.
                        Kyle ultimately infiltrated Mohc's orbital facility and destroyed the entire Dark Trooper production system. In the final confrontation,
                        he killed Mohc and prevented the Empire from deploying the Dark Troopers on a large scale.
                    </p>
                    <p>
                        Several years after the fall of the Empire, Kyle became involved in another dangerous conflict
                        connected to the Valley of the Jedi, an ancient Force nexus located on the world Ruusan.
                        The valley contained the imprisoned spirits of thousands of Jedi and Sith who had died during the ancient New Sith Wars, making it one
                        of the most powerful concentrations of Force energy in the galaxy. Whoever controlled the valley could draw upon this immense power.
                        The Dark Jedi Jerec, the same man who had murdered Kyle's father, sought to claim the valley's power in order to become a nearly unstoppable dark side master.
                        During this time Kyle learned that he himself was Force-sensitive, inheriting his connection to the Force from his father.
                        Under the guidance of the Jedi Master Qu Rahn, Kyle began training in the ways of the Force in order to stop Jerec.
                        Jerec eventually succeeded in locating the Valley of the Jedi and attempted to harness its power. However,
                        Kyle confronted him in a final duel and defeated him, preventing the Dark Jedi from gaining control of the valley.
                        Following the battle, Kyle sealed the valley once again to ensure that its power could not be abused.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/jerec.jpg'} alt='jerec' height={200} width={300} />
                        <p className={styles.imageDescription}>Jerec</p>
                    </div>
                    <p>
                        Years later, after the establishment of Luke Skywalker's Jedi Praxeum on Yavin IV, Kyle became one of Luke's most trusted Jedi Knights and instructors.
                        He helped train a new generation of Jedi who would serve the New Republic.
                        During this time, a fallen Jedi named Desann launched an attack against the Praxeum. Desann had been expelled from Luke's academy after turning to the dark side and
                        had joined forces with a former Imperial admiral, Galen Pellaeon, and the Imperial Remnant.
                        Desann discovered the secret of the Valley of the Jedi and began using its energy to empower ordinary soldiers with temporary Force abilities,
                        creating an army of Reborn dark side warriors.
                        During the attack on the academy, Desann's forces killed several Jedi students and forced the academy to temporarily close. Believing
                        that his presence might attract further attacks, Kyle chose to step away from his role as a Jedi for a time.
                        However, one of his former students, Jaden Korr, continued the fight against Desann. With Kyle's eventual assistance,
                        Jaden confronted and defeated Desann at the Valley of the Jedi, ending the threat of the Reborn army.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/desann.jpg'} alt='desann' height={200} width={300} />
                        <p className={styles.imageDescription}>Desann</p>
                    </div>
                </div>
            </details>

            <details className={styles.paragraph}>
                <summary id='h4' className={styles.header}>Yuuzhan Vong (25 AY - 29 AY)</summary>
                <div className={styles.paragraphWrapper}>
                    <p>
                        The Yuuzhan Vong War, also known as the Great War, was one of the most devastating conflicts in galactic history. Fought between 25 ABY and 29 ABY, it pitted the New Republic,
                        the Jedi Order, and eventually most of the galaxy against a mysterious extragalactic invader known as the Yuuzhan Vong. Unlike any previous enemy, the Yuuzhan Vong came from outside the
                        known galaxy and possessed technologies and beliefs completely alien to the civilizations of the Galactic Republic and the Empire.
                        The war resulted in the deaths of trillions of beings, the destruction or transformation of entire worlds, and the collapse of the New Republic itself.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/yuuzhan-vong.jpg'} alt='yuuzhan vong' height={200} width={300} />
                        <p className={styles.imageDescription}>The Yuuzhan Vong</p>
                    </div>
                    <p>
                        The Yuuzhan Vong originated from another galaxy and followed a fanatical religious philosophy centered on pain, sacrifice, and devotion to their gods. They rejected mechanical technology entirely, instead using living biotechnology for
                        everything from weapons and starships to armor and communication devices.
                        Even more alarming was the fact that the Yuuzhan Vong were completely absent from the Force. Jedi could not sense them through the Force, making them extremely difficult opponents for Force users.
                        The first signs of their arrival appeared on the Outer Rim world Belkadan, where strange biological anomalies began appearing. Soon afterward, the Yuuzhan Vong openly invaded the
                        galaxy by attacking the planet Sernpidal. During the battle, they used one of their living superweapons to pull the planet's moon out of orbit and crash it into the surface, killing billions.
                        During this disaster, Chewbacca, the longtime companion of Han Solo, sacrificed himself to save Han's son Anakin Solo, marking one of the first major tragedies of the war.
                    </p>
                    <p>
                        The first signs of their arrival appeared on the Outer Rim world Belkadan, where strange biological anomalies began appearing.
                        Soon afterward, the Yuuzhan Vong openly invaded the galaxy by attacking the planet Sernpidal. During the battle, they used one of their
                        living superweapons to pull the planet's moon out of orbit and crash it into the surface, killing billions. During this disaster, Chewbacca,
                        the longtime companion of Han Solo, sacrificed himself to save Han's son Anakin Solo, marking one of the first major tragedies of the war.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/chewie-death.jpg'} alt='chewbacca death' height={200} width={300} />
                        <p className={styles.imageDescription}>Chewbacca's death in the battle of Sernpidal</p>
                    </div>
                    <p>
                        In the early stages of the conflict, the Yuuzhan Vong rapidly overwhelmed the New Republic's defenses. Their biotechnology
                        allowed them to field living starships known as coralskippers, which were highly maneuverable and difficult to destroy.
                        Additionally, the New Republic government was slow to respond to the invasion. Political divisions within the Senate prevented a
                        unified military strategy, allowing the invaders to conquer large sections of the Outer Rim before the Republic could organize an
                        effective defense. The Yuuzhan Vong also introduced terrifying biological weapons such as voxyn, creatures specifically engineered
                        to hunt and kill Jedi by tracking their connection to the Force.
                    </p>
                    <p>
                        Despite these advantages, the Jedi Order, led by Luke Skywalker, began developing new tactics to counter the invaders,
                        while many military leaders pushed for stronger defensive measures. However, the turning point of the war came when the
                        Yuuzhan Vong launched a massive invasion of the Core Worlds and attacked Coruscant, the capital of the New Republic.
                        Despite fierce resistance from the Republic fleet and the Jedi, the defenders were ultimately unable to stop the invasion.
                        The battle was only a pyrrhic victory for the Vong however, with one of their most important commanders, Romm Z'qar died on the battle.
                        Fey'yla, the Chief Of State of the Republic also died on the battlefield.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/coruscant-vong.jpg'} alt='coruscant invasion' height={200} width={300} />
                        <p className={styles.imageDescription}>The Yuuzhan Vong invasion of Coruscant</p>
                    </div>
                    <p>
                        The Yuuzhan Vong captured Coruscant and began reshaping the entire planet using their biotechnology, transforming it
                        into a massive living world called Yuuzhan'tar, the new capital of their growing empire. The loss of Coruscant shattered the authority of
                        the New Republic government. Many of its surviving leaders fled, and the Republic itself effectively collapsed under the pressure of the war. In
                        response, a new coalition government known as the Galactic Alliance began forming, uniting surviving Republic forces, the Imperial Remnant, and other
                        galactic powers in a final effort to resist the invaders.
                    </p>
                    <p>
                        As the war continued, the Jedi Order searched for ways to understand the Yuuzhan Vong's strange relationship with the Force. Some Jedi began discovering
                        that the Yuuzhan Vong were not truly absent from the Force but instead existed in a way that had been deeply altered by their distant past. During this
                        period several important Jedi figures emerged. Jacen Solo, the son of Han Solo and Leia Organa, was captured by the Yuuzhan Vong and subjected to intense
                        torture by the priestess Vergere. During his captivity he gained a deeper understanding of the Force that would later influence his future actions.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/jacen-solo.jpg'} alt='jacen solo' height={200} width={500} />
                        <p className={styles.imageDescription}>Jacen Solo</p>
                    </div>
                    <p>
                        Another important hero of the war was Anakin Solo, whose bravery and leadership inspired many younger Jedi. During a mission to destroy the Yuuzhan Vong's
                        voxyn breeding facilities, Anakin led a group of Jedi into battle but was ultimately killed during the operation. Although the mission succeeded in destroying
                        the voxyn threat, Anakin's death was a devastating loss for both the Jedi and his family.
                    </p>
                    <p>
                        As the war entered its final phase, the Galactic Alliance began launching large-scale offensives to reclaim territory from the Yuuzhan Vong.
                        At the same time, internal divisions began forming within the Yuuzhan Vong leadership. A key development came when it was discovered that the Yuuzhan
                        Vong's gods were not truly divine beings but instead the remnants of ancient biotechnology. This revelation shattered many of the beliefs that had united their society.
                    </p>
                    <p>
                        Another crucial factor was the living planet Zonama Sekot, a mysterious world that possessed advanced biotechnology similar to that of the
                        Yuuzhan Vong but was aligned with the living Force. Zonama Sekot played a central role in revealing the truth about the Yuuzhan Vong's past and
                        helping bring the conflict to an end.
                        The Yuuzhan Vong had been traveling through deep space ever since their home galaxy had been destroyed and had slowly began to establish themselves on the edge of the galaxy. When they discovered Zonama Sekot,
                        they deemed it similar to their own living homeworld, Yuuzhan'tar.
                        However, when the Praetorite Vong attempted to settle on the planet, Zonama Sekot's biosphere killed off the Vong flora and fauna, provoking outrage from them.
                        Although Sekot attempted to negotiate with them, they began an assault upon the planet.
                        After several years, the Jedi Council received word of the attack, and sent Jedi Knight Vergere to investigate. When she arrived, she discovered the true nature of the Far Outsiders - who considered her powers amazing.
                        Concealing her Jedi identity, Vergere managed to get the Praetorite Vong to agree to halt their attack on Zonama Sekot, in exchange for traveling with the Yuuzhan Yong. Both Vergere and the
                        Far-Outsiders retreated back into the Unknown Regions.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/zonama-sekot.jpg'} alt='zonama sekot' height={200} width={300} />
                        <p className={styles.imageDescription}>Zonama Sekot</p>
                    </div>
                    <p>
                        The final battles of the war took place as the Galactic Alliance launched an assault to reclaim Coruscant. During the conflict, the Yuuzhan
                        Vong leadership collapsed after the death of their supreme overlord Shimrra. With their leadership destroyed and their religious beliefs shaken,
                        the Yuuzhan Vong were forced to surrender. The surviving members of their species were relocated to Zonama Sekot, where they began the long process of
                        rebuilding their civilization and abandoning the destructive path that had led them to invade the galaxy.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/final-battle.jpg'} alt='final battle' height={600} width={600} />
                        <p className={styles.imageDescription}>Luke Skywalker slaying Shimmra on Coruscant</p>
                    </div>
                    <p>
                        The Yuuzhan Vong War left the galaxy permanently changed. Entire star systems had been devastated, and trillions of lives had been lost. The New
                        Republic had collapsed during the conflict and was replaced by the Galactic Alliance, a new government formed to rebuild the galaxy and prevent future catastrophes.
                        The war also deeply affected the Jedi Order. Under Luke Skywalker's leadership, the Jedi emerged stronger and more united, but the heavy losses they had suffered
                        forced them to rethink many of their traditions and responsibilities. Although the Yuuzhan Vong had ultimately been defeated, the scars left by the war would influence
                        galactic politics and the Jedi for many years to come.
                    </p>
                </div>
            </details>

            <details className={styles.paragraph}>
                <summary id='h5' className={styles.header}>Second Galactic Civil War (40 AY - 41 AY)</summary>
                <div className={styles.paragraphWrapper}>
                    <p>
                        The Second Galactic Civil War erupted in 40 ABY and lasted roughly a year, but its consequences reshaped the political and spiritual landscape of the galaxy.
                        The conflict primarily pitted the Galactic Alliance against the Corellian Confederation, but it soon grew into a much larger struggle involving the Jedi Order,
                        the Imperial Remnant, and various independent factions. At the center of the conflict stood Jacen Solo, a powerful Jedi Knight who would ultimately fall to the
                        dark side and become the Sith Lord Darth Caedus.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/caedus.jpg'} alt='Darth Caedus' height={600} width={600} />
                        <p className={styles.imageDescription}>Jacen Solo, alias Darth Caedus</p>
                    </div>
                    <p>
                        The origins of the war lay in rising tensions within the Galactic Alliance. Several member worlds, most notably Corellia, began
                        resisting the growing central authority of the Alliance government. Corellia and its allies—including Commenor, Fondor, and other
                        systems—formed a political and military coalition known as the Corellian Confederation. Their leaders argued that the Alliance had
                        become too powerful and authoritarian, threatening the independence of individual worlds.
                    </p>
                    <p>
                        The situation escalated when the Corellian government began secretly constructing a powerful fleet, including several advanced
                        warships built at the massive Centerpoint Station system. Intelligence reports soon reached the Galactic Alliance that Corellia
                        was preparing for open rebellion. In response, the Alliance mobilized its military forces to bring the rebellious systems back under control.
                    </p>
                    <p>
                        During this period, Jacen Solo had already undergone significant changes following his experiences during the Yuuzhan Vong War.
                        After spending years traveling the galaxy studying various Force traditions, Jacen became increasingly convinced that only strong and
                        decisive leadership could prevent future galactic catastrophes. Believing that chaos and war could only be avoided through absolute control,
                        he gradually began embracing darker philosophies.
                    </p>
                    <p>
                        Manipulated and guided by the mysterious Sith Lady Lumiya, Jacen was eventually convinced that he must become a Sith Lord in
                        order to bring lasting peace to the galaxy. Accepting this path, he took the Sith name Darth Caedus. Unlike many Sith before him,
                        Caedus believed that the dark side was a necessary tool to impose order and stability on a chaotic galaxy.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/lumiya.jpg'} alt='lumiya' height={600} width={600} />
                        <p className={styles.imageDescription}>Lumiya</p>
                    </div>
                    <p>
                        As the war between the Galactic Alliance and the Corellian Confederation intensified, Jacen rose to a position of immense
                        authority within the Alliance military. Using both his political influence and his growing dark side powers, he began
                        consolidating control over the government. His actions became increasingly ruthless as he ordered aggressive military
                        campaigns and authorized harsh measures against suspected enemies of the state.
                    </p>
                    <p>
                        Caedus also manipulated events behind the scenes, deliberately escalating the war in order to justify stronger authoritarian
                        rule. At the same time, the Jedi Order—led by Grand Master Luke Skywalker—began to suspect that Jacen had fallen to the dark side.
                        However, Jacen's political influence and military power made it extremely difficult for the Jedi to act against him directly.
                    </p>
                    <p>
                        One of the most shocking moments of the conflict came when Jacen murdered Mara Jade Skywalker, the wife of Luke Skywalker and one
                        of the most respected Jedi Masters of the Order. Mara had discovered Jacen's true identity as Darth Caedus and attempted to stop him,
                        but she was ultimately killed during their confrontation. Her death deeply affected Luke and further convinced the Jedi that Jacen had become a Sith Lord.
                    </p>
                    <p>
                        As the war reached its climax, Jacen tightened his grip on the Galactic Alliance government and effectively transformed it into an
                        authoritarian regime under his control. His actions alienated many allies, including members of the Jedi Order and even his own family.
                        His twin sister, Jaina Solo, ultimately accepted the responsibility of confronting him.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/jaina-solo.jpg'} alt='jaina solo' height={600} width={600} />
                        <p className={styles.imageDescription}>Jaina Solo</p>
                    </div>
                    <p>
                        With guidance from the Imperial Knight Boba Fett, Jaina trained intensely to prepare for the inevitable duel with her brother. Meanwhile,
                        the military conflict between the Galactic Alliance and the Corellian Confederation continued to rage across multiple star systems.
                    </p>
                    <p>
                        The war finally came to an end when Jaina confronted Darth Caedus in a final lightsaber duel aboard his flagship. After a fierce battle,
                        she succeeded in defeating and killing him, bringing an end to his rule and preventing the Sith from once again dominating the galaxy.
                        Meanwhile, Lumiya was defeated and killed by Luke Skywalker on the duel of Terephon.
                    </p>
                    <p>
                        Following Jacen's death, the Galactic Alliance began the difficult process of rebuilding both politically and morally. The Corellian
                        conflict was resolved, and many of the emergency powers that had allowed Caedus to rise to power were dismantled. The Jedi Order also
                        faced a period of reflection as they struggled to understand how one of their own had fallen so far into darkness.
                    </p>
                    <p>
                        The Second Galactic Civil War left deep scars across the galaxy. Although the conflict was far shorter than the Yuuzhan Vong War
                        that preceded it, the betrayal of Jacen Solo and the rise of Darth Caedus demonstrated once again how fragile peace could be, even in an era
                        where the Jedi had seemingly been restored.
                    </p>
                </div>
            </details>

            <details className={styles.paragraph}>
                <summary id='h6' className={styles.header}>Abeloth</summary>
                <div className={styles.paragraphWrapper}>
                    <p>
                        Abeloth was one of the most terrifying and mysterious entities ever encountered by the Jedi Order, emerging as a major threat to
                        the galaxy decades after the Yuuzhan Vong War. Known as the "Bringer of Chaos," Abeloth was not a Sith, nor even a conventional dark
                        side user, but an ancient and immensely powerful Force entity whose origins dated back to the earliest history of the galaxy.
                    </p>
                    <p>
                        Long before the rise of the Galactic Republic, Abeloth had once been a mortal woman who served the powerful beings known as the Ones,
                        ancient Force-wielders who embodied the balance between the light and dark sides. These beings—the Father, the Son, and the
                        Daughter—maintained cosmic balance from the mysterious world of Mortis. The servant woman grew deeply attached to the family and
                        feared being separated from them by age and death. In desperation, she drank from the Pool of Knowledge and bathed in the Font of Power,
                        ancient Force nexuses meant only for the Ones themselves. The act transformed her into an immortal but horribly corrupted being,
                        twisting her mind and body into something monstrous. From that moment on, she became Abeloth.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/abeloth.jpg'} alt='abeloth' height={600} width={600} />
                        <p className={styles.imageDescription}>Abeloth</p>
                    </div>
                    <p>
                        The Ones eventually imprisoned Abeloth to prevent her from spreading chaos throughout the galaxy. For countless millennia,
                        the Jedi Order unknowingly helped maintain this prison by guarding ancient Force nexuses that kept her contained. However, the
                        deaths of the Ones during the Clone Wars weakened these ancient safeguards, eventually allowing Abeloth to begin breaking free of her
                        confinement.
                    </p>
                    <p>
                        Decades later, during the era of the Galactic Alliance, Abeloth began secretly influencing events across the galaxy.
                        She possessed or created multiple physical bodies, each serving as an avatar through which she could act. Through manipulation,
                        deception, and overwhelming Force power, she began spreading instability and conflict wherever she appeared. Entire populations
                        fell under her influence, and even powerful Force users struggled to resist her mental domination.
                    </p>
                    <p>
                        The Jedi Order, led by Luke Skywalker, gradually discovered that a powerful and unknown Force entity was responsible for
                        these disturbances. As they investigated further, they realized they were dealing with a being far older and more dangerous
                        than any Sith Lord. Abeloth's ability to control minds, alter reality around her, and survive the destruction of her physical
                        forms made her an almost unstoppable enemy.
                    </p>
                    <p>
                        Ultimately, the Jedi were forced into a desperate alliance with the Lost Tribe of the Sith in order to confront Abeloth.
                        Through a series of dangerous battles across multiple worlds and Force nexuses, the Jedi and their unlikely allies managed to
                        repeatedly destroy her physical bodies and weaken her influence. Although Abeloth could never truly be killed due to her unnatural
                        connection to the Force, the Jedi succeeded in imprisoning and suppressing her power once again.
                    </p>
                    <p>
                        Even after her defeat, Abeloth remained one of the greatest threats the galaxy had ever faced. Unlike the Sith, who sought
                        power and domination, Abeloth represented pure chaos and corruption within the Force itself. Her existence served as a reminder
                        to the Jedi that some dangers were older and far more terrifying than the struggles between light and dark that had defined galactic
                        history for thousands of years.
                    </p>
                </div>
            </details>

            <details className={styles.paragraph}>
                <summary id='h7' className={styles.header}>Legacy</summary>
                <div className={styles.paragraphWrapper}>
                    <p>
                        The Legacy era began more than a century after the fall of the Galactic Empire and the end of the major conflicts that had defined the
                        lives of Luke Skywalker and his generation. By this time, the galaxy had once again undergone dramatic political changes. The Galactic
                        Alliance had eventually fractured, and a new government known as the Galactic Federation of Free Alliances ruled much of the galaxy. The
                        Jedi Order still existed and remained influential, but tensions between the government and the Jedi had grown increasingly severe. At the
                        same time, the Imperial Remnant had gradually reformed itself into a stable and respected state simply known as the Empire, now ruled by
                        Emperor Roan Fel and guided by a code that rejected the rule of the Sith.
                    </p>
                    <p>
                        This fragile balance collapsed when a secret Sith organization known as the One Sith revealed itself. Unlike the old Sith Orders,
                        which had often been divided by rivalries and internal conflict, the One Sith were united under the leadership of a single Dark Lord:
                        Darth Krayt. Krayt had secretly rebuilt the Sith for decades, gathering followers and consolidating power while remaining hidden from
                        the Jedi and the rest of the galaxy. When the moment came, the Sith launched a massive and carefully planned coup that reshaped galactic
                        politics.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/one-sith.jpg'} alt='one sith' height={600} width={600} />
                        <p className={styles.imageDescription}>The One Sith</p>
                    </div>
                    <p>
                        The crisis began with a conflict between the Galactic Alliance and the Fel Empire. During the war, the Sith secretly manipulated events
                        on both sides, weakening their enemies while preparing their own rise to power. Eventually, Darth Krayt revealed himself and seized control
                        of the Empire, overthrowing Emperor Roan Fel and placing the Sith in command of the Imperial government. Krayt declared the creation of a
                        new Sith Empire and ordered the destruction of the Jedi Order. In the brutal purge that followed, the Jedi Temple on Ossus was attacked and
                        many Jedi were killed. Although some survived by fleeing into hiding, the Order was once again scattered across the galaxy.
                    </p>
                    <p>
                        Among the Jedi present during the fall of Ossus was Cade Skywalker, a descendant of Luke Skywalker. Cade had trained as a Jedi Knight
                        under his father, Kol Skywalker, who served on the Jedi Council. During the Sith attack on Ossus, Cade witnessed the death of his father
                        and the destruction of the Jedi Temple. The trauma of the event shattered his faith in the Jedi path. Rejecting the Order and his heritage,
                        Cade abandoned the Force and disappeared into the criminal underworld.
                    </p>
                    <p>
                        Years later, Cade had become a bounty hunter and smuggler operating on the fringes of society. Traveling aboard the ship Mynock with his
                        companions Jariah Syn and Deliah Blue, Cade attempted to suppress his connection to the Force through the use of drugs and reckless behavior.
                        Despite his efforts, he possessed an extremely rare and dangerous ability known as Dark Transfer, which allowed him to manipulate life energy
                        itself. While this power could be used to heal others, it also carried a strong connection to the dark side.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/cade.jpg'} alt='cade' height={600} width={600} />
                        <p className={styles.imageDescription}>Cade Skywalker</p>
                    </div>
                    <p>
                        Cade's life changed when he became entangled in the struggle against Darth Krayt's Sith Empire. During a mission involving Imperial Knight
                        Marasiah Fel—the daughter of the exiled Emperor Roan Fel—Cade was captured and brought before Krayt himself. The Sith Lord immediately
                        recognized Cade's heritage as a Skywalker and attempted to corrupt him, believing that Cade could become a powerful Sith apprentice. Although
                        Cade resisted and eventually escaped, the encounter forced him to confront both his lineage and his connection to the Force.
                    </p>
                    <p>
                        Meanwhile, the galaxy had fallen almost entirely under the control of Krayt's Sith Empire. The exiled Emperor Roan Fel led a small
                        resistance movement, supported by his elite Force-sensitive warriors known as the Imperial Knights. Unlike the Sith, the Imperial Knights
                        followed a disciplined code that placed their loyalty to the Emperor and the balance of the Force above personal ambition. At the same time,
                        surviving Jedi continued operating in secret, attempting to rebuild their Order while resisting the Sith wherever possible.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/roan-fel.jpg'} alt='roan fel' height={600} width={600} />
                        <p className={styles.imageDescription}>Roan Fel</p>
                    </div>
                    <p>
                        Over time, Cade Skywalker was gradually drawn deeper into the conflict. Despite his reluctance to accept the role of a Jedi, his actions
                        repeatedly placed him at the center of events that threatened the entire galaxy. Cade struggled constantly with the dark side, especially
                        because of his dangerous Dark Transfer ability, which tempted him with immense power. The spirits of both Luke Skywalker and other fallen Jedi
                        occasionally appeared to guide him, reminding him of the responsibility carried by the Skywalker bloodline.
                    </p>
                    <p>
                        The war against the Sith Empire slowly intensified as multiple factions began resisting Darth Krayt's rule. The Fel loyalists, the surviving Jedi,
                        and various independent forces formed an uneasy alliance against the Sith. At the same time, internal tensions began growing within the One Sith
                        themselves, as some Sith Lords questioned Krayt's leadership and the strict unity he imposed on them.
                    </p>
                    <p>
                        As the conflict escalated, Cade ultimately accepted that he could not escape his destiny. Embracing the Force once again, he joined the fight
                        against the Sith Empire and began confronting the legacy of his family. Through a series of battles and confrontations with Krayt and his
                        followers, Cade played a critical role in weakening the Sith's grip on the galaxy.
                    </p>
                    <p>
                        The final stages of the conflict saw a massive alliance of Jedi, Imperial Knights, and Fel loyalist forces unite against Darth Krayt. In
                        the climactic confrontation, Cade Skywalker ultimately helped defeat Krayt, ending the reign of the One Sith and breaking their control over
                        the Empire. With Krayt gone, the Sith Empire collapsed, allowing the galaxy to begin rebuilding once again.
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image src={'/history/krayt-death.jpg'} alt='darth krayt death' height={600} width={600} />
                        <p className={styles.imageDescription}>Darth Krayt's death</p>
                    </div>
                    <p>
                        The Legacy era represented yet another turning point in galactic history. The Sith had once again risen to dominate the galaxy, only to be
                        defeated through the combined efforts of Jedi, Imperial Knights, and unlikely heroes. At the center of this struggle stood Cade Skywalker, a
                        reluctant heir to the Skywalker legacy who ultimately chose to confront both the darkness within himself and the tyranny of the Sith, helping
                        to restore hope to the galaxy once more.
                    </p>
                </div>
            </details>
        </div>
    </div >
);

export default function NewRepublicPage() {

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>The New Republic</h2>
            <SvgNewRepublicSolid className={styles.icon} />

            <HistoryTabs defaultTab='canon'>
                <CanonContent />
                <LegendsContent />
            </HistoryTabs>
        </div >
    )
}
