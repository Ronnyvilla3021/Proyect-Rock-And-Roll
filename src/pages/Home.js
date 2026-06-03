import React, { useState, useRef } from 'react';
import styles from './Home.module.css';

const Card = ({ title, image, link }) => (
    <a href={link} className={styles.card}>
        <img src={image} alt={title} className={styles.card__img} />
        <span className={styles.card__footer}>{title}</span>
    </a>
);

const Home = () => {

    const audioRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const playlist = [
        "/Musicas/acdc1.mp3",
        "/Musicas/acdc2.mp3",
        "/Musicas/acdc3.mp3",
        "/Musicas/acdc4.mp3",
        "/Musicas/acdc5.mp3",
        "/Musicas/acdc6.mp3",
        "/Musicas/acdc7.mp3",

        "/Musicas/queen1.mp3",
        "/Musicas/queen2.mp3",

        "/Musicas/ozzy1.mp3",
        "/Musicas/ozzy2.mp3",
        "/Musicas/ozzy3.mp3",
        "/Musicas/ozzy4.mp3",
        "/Musicas/ozzy5.mp3",
        "/Musicas/ozzy6.mp3",
        "/Musicas/ozzy7.mp3",

        "/Musicas/kiss1.mp3",
        "/Musicas/kiss2.mp3",
        "/Musicas/kiss3.mp3",
        "/Musicas/kiss4.mp3",
        "/Musicas/kiss5.mp3",

        "/Musicas/ironmaiden1.mp3",
        "/Musicas/ironmaiden2.mp3",
        "/Musicas/ironmaiden3.mp3",
        "/Musicas/ironmaiden4.mp3",
        "/Musicas/ironmaiden5.mp3",

        "/Musicas/blacksabbath1.mp3",
        "/Musicas/blacksabbath2.mp3",
        "/Musicas/blacksabbath3.mp3",
        "/Musicas/blacksabbath4.mp3",
    ];

    const play = () => {
        const audio = audioRef.current;
        audio.src = playlist[index];
        audio.play();
        setIsPlaying(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const next = () => {
        const newIndex = (index + 1) % playlist.length;
        setIndex(newIndex);

        const audio = audioRef.current;
        audio.src = playlist[newIndex];
        audio.play();
        setIsPlaying(true);
    };

    const prev = () => {
        const newIndex = (index - 1 + playlist.length) % playlist.length;
        setIndex(newIndex);

        const audio = audioRef.current;
        audio.src = playlist[newIndex];
        audio.play();
        setIsPlaying(true);
    };

    const handleEnd = () => {
        const newIndex = (index + 1) % playlist.length;
        setIndex(newIndex);

        const audio = audioRef.current;
        audio.src = playlist[newIndex];
        audio.play();
        setIsPlaying(true);
    };

    const bands = [
        { title: "⚡AC/DC⚡", image: "https://w1.pngwing.com/pngs/821/327/png-transparent-child-logo-acdc-badge-red-text.png", link: "/acdc" },
        { title: "🦇Ozzy🦇", image: "https://thumbs.dreamstime.com/b/logotipo-vectorial-de-ozzy-osbourne-aislado-en-fondo-blanco-306334145.jpg", link: "/ozzy" },
        { title: "👅Kiss👅", image: "https://cdn11.bigcommerce.com/s-c9a80/images/stencil/1280x1280/products/12978/44885/kiss_chunky_magnet__22190.1649795023.png?c=2", link: "/kiss" },
        { title: "🔥Iron Maiden🔥", image: "https://mussica.info/wp-content/uploads/2021/09/iron-maiden-intro.jpeg", link: "/ironmaiden" },
        { title: "🦇Black Sabbath🦇", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIexR8SNEIi24ZwWfCk5UY2oVwHZTHTpNBw&s", link: "/blacksabbath" },
        { title: "👑Queen👑", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Queen_logo.svg", link: "/queen" }
    ];

    return (
        <div className={styles.page}>

            <nav className={styles.mainNav}>
                <div className={styles.logo}></div>
            </nav>

            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>

                <div className={styles.heroContent}>
                    <h1>ROCK<br/>LEGENDS</h1>

                    <span className={styles.subtitle}>
                        LEYENDAS DEL ROCK
                    </span>

                    <p>
                        Explora las bandas más legendarias del rock y el metal en una sola experiencia.
                    </p>

                    {/* 🎧 PLAYER */}
                    <div className={styles.player}>
                        <audio ref={audioRef} onEnded={handleEnd} />

                        <div className={styles.controls}>
                            <button onClick={prev}>⏮</button>

                            {isPlaying ? (
                                <button onClick={pause}>⏸</button>
                            ) : (
                                <button onClick={play}>▶</button>
                            )}

                            <button onClick={next}>⏭</button>
                        </div>

                        <p className={styles.nowPlaying}>
                            🎧 {playlist[index].split("/").pop()}
                        </p>
                    </div>
                </div>

                <div className={styles.cardSection}>
                    {bands.map((b, i) => (
                        <Card key={i} title={b.title} image={b.image} link={b.link} />
                    ))}
                </div>

            </section>

        </div>
    );
};

export default Home;