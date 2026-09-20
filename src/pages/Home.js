import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useMusic } from '../context/MusicContext';

// 📸 Imágenes locales
import acdc from "../images/Home/acdc.jpg";
import ozzy from "../images/Home/ozzy.jpeg";
import kiss from "../images/Home/kiss.jpg";
import ironmaiden from "../images/Home/ironmaiden.jpg";
import blacksabbath from "../images/Home/blacksabbath.jpg";
import queen from "../images/Home/queen.jpg";

// Constante definida fuera para no recrearse en cada renderizado
const BANDS = [
    { id: 'acdc', title: "⚡AC/DC⚡", image: acdc, link: "/acdc" },
    { id: 'ozzy', title: "🦇Ozzy🦇", image: ozzy, link: "/ozzy" },
    { id: 'kiss', title: "👅Kiss👅", image: kiss, link: "/kiss" },
    { id: 'iron', title: "🔥Iron Maiden🔥", image: ironmaiden, link: "/ironmaiden" },
    { id: 'sabbath', title: "🦇Black Sabbath🦇", image: blacksabbath, link: "/blacksabbath" },
    { id: 'queen', title: "👑Queen👑", image: queen, link: "/queen" }
];

const Card = ({ title, image, link }) => (
    <Link to={link} className={styles.card}>
        <img src={image} alt={title} className={styles.card__img} loading="lazy" />
        <span className={styles.card__footer}>{title}</span>
    </Link>
);

const Home = () => {
    const {
        currentTrack,
        isPlaying,
        play,
        togglePlay,
        next,
        prev,
        allTracks,
    } = useMusic();

    const handlePlayPause = () => {
        if (isPlaying || currentTrack) {
            togglePlay();
        } else if (allTracks?.length > 0) {
            play(allTracks[0]);
        }
    };

    return (
        <div className={styles.page}>
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />

                <div className={styles.heroContent}>
                    <h1>ROCK<br />LEGENDS</h1>
                    <span className={styles.subtitle}>LEYENDAS DEL ROCK</span>
                    <p>Explora las bandas más legendarias del rock y el metal en una sola experiencia.</p>

                    <div className={styles.player}>
                        <div className={styles.controls}>
                            <button onClick={prev} aria-label="Canción anterior">⏮</button>
                            
                            <button onClick={handlePlayPause} aria-label={isPlaying ? "Pausar" : "Reproducir"}>
                                {isPlaying ? '⏸' : '▶'}
                            </button>

                            <button onClick={next} aria-label="Canción siguiente">⏭</button>
                        </div>

                        <p className={styles.nowPlaying}>
                            🎧 {currentTrack?.title || 'Sin reproducción'}
                        </p>
                    </div>
                </div>

                <div className={styles.cardSection}>
                    {BANDS.map((band) => (
                        <Card 
                            key={band.id} 
                            title={band.title} 
                            image={band.image} 
                            link={band.link} 
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
