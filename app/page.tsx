import Carousel from "./home-components/carousel";
import ContactCard from "./home-components/contact-card";
import HistoryCarousel from "./home-components/history-carousel";
import RandomCardRow from "./home-components/random-card-row";
import styles from "./css-modules/home.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <Carousel />
            <RandomCardRow
                type="movies"
                title="Movies"
                link="/movies"
            />
            <RandomCardRow
                type="series"
                title="Series"
                link="/series"
            />
            <HistoryCarousel />
            <RandomCardRow
                type="games"
                title="Games"
                link="/games"
            />
            <RandomCardRow
                type="books"
                title="Books"
                link="books"
            />
            <ContactCard />
        </div>
    );
}
