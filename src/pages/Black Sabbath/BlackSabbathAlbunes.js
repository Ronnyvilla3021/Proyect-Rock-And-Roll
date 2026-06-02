import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './BlackSabbathAlbunes.module.css';

const BlackSabbathAlbunes = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/0qanF-91aJo");
    const videoRef = useRef(null);

    const albumVideos = {
        "Black Sabbath": "https://www.youtube.com/embed/0qanF-91aJo",
        "Paranoid": "https://www.youtube.com/embed/0CFiFoDcDC0",
        "Master of Reality": "https://www.youtube.com/embed/II8GbOjFNYc",
        "Vol. 4": "https://www.youtube.com/embed/uoIoSB1vFqo",
        "Sabbath Bloody Sabbath": "https://www.youtube.com/embed/NDMtG-wdMNY",
        "Sabotage": "https://www.youtube.com/embed/jMIxPwHnCic",
        "Technical Ecstasy": "https://www.youtube.com/embed/yABqKqHq2pA",
        "Never Say Die!": "https://www.youtube.com/embed/gPlmWRq73QE",
        "Heaven and Hell": "https://www.youtube.com/embed/OyFKcEcm8TU",
        "Mob Rules": "https://www.youtube.com/embed/HzDVxAYazrg",
        "Born Again": "https://www.youtube.com/embed/7sJpX4v5-K0",
        "Seventh Star": "https://www.youtube.com/embed/PcOnKZxpb3E",
        "The Eternal Idol": "https://www.youtube.com/embed/uJK9vRdqbXM",
        "Headless Cross": "https://www.youtube.com/embed/OQbp7_VPkHY",
        "Tyr": "https://www.youtube.com/embed/7Gb3cTCWRIk",
        "Dehumanizer": "https://www.youtube.com/embed/v3mBLYYNXpM",
        "Cross Purposes": "https://www.youtube.com/embed/nFl4bm2MKWY",
        "Forbidden": "https://www.youtube.com/embed/l2fCqSh0LGI",
        "13": "https://www.youtube.com/embed/8egAZUnHuCU",
    };

    const albums = [
        { name: "Black Sabbath", year: "1970", label: "Vertigo / Warner", cover: "https://upload.wikimedia.org/wikipedia/en/9/9e/Black_Sabbath_-_Black_Sabbath.jpg" },
        { name: "Paranoid", year: "1970", label: "Vertigo / Warner", cover: "https://upload.wikimedia.org/wikipedia/en/2/26/BlackSabbath_Paranoid.jpg" },
        { name: "Master of Reality", year: "1971", label: "Vertigo / Warner", cover: "https://upload.wikimedia.org/wikipedia/en/2/29/Black_Sabbath_-_Master_of_Reality.jpg" },
        { name: "Vol. 4", year: "1972", label: "Vertigo / Warner", cover: "https://upload.wikimedia.org/wikipedia/en/d/d8/Vol4.jpg" },
        { name: "Sabbath Bloody Sabbath", year: "1973", label: "WWA Records", cover: "https://upload.wikimedia.org/wikipedia/en/8/8c/Black_Sabbath_-_Sabbath_Bloody_Sabbath.jpg" },
        { name: "Sabotage", year: "1975", label: "NEMS Enterprises", cover: "https://upload.wikimedia.org/wikipedia/en/a/a1/Black_Sabbath_-_Sabotage.jpg" },
        { name: "Technical Ecstasy", year: "1976", label: "Vertigo", cover: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Sabbath_-_Technical_Ecstasy.jpg" },
        { name: "Never Say Die!", year: "1978", label: "Vertigo", cover: "https://upload.wikimedia.org/wikipedia/en/6/6d/Black_Sabbath_-_Never_Say_Die%21.jpg" },
        { name: "Heaven and Hell", year: "1980", label: "Vertigo / Warner", cover: "https://upload.wikimedia.org/wikipedia/en/4/43/Black_Sabbath_-_Heaven_and_Hell.jpg" },
        { name: "Mob Rules", year: "1981", label: "Vertigo / Warner", cover: "https://upload.wikimedia.org/wikipedia/en/7/7c/Black_Sabbath_-_Mob_Rules.jpg" },
        { name: "Born Again", year: "1983", label: "Vertigo", cover: "https://upload.wikimedia.org/wikipedia/en/b/b6/Black_Sabbath_-_Born_Again.jpg" },
        { name: "Seventh Star", year: "1986", label: "Vertigo", cover: "https://upload.wikimedia.org/wikipedia/en/a/ab/Black_Sabbath_-_Seventh_Star.jpg" },
        { name: "The Eternal Idol", year: "1987", label: "Vertigo", cover: "https://upload.wikimedia.org/wikipedia/en/2/2a/Black_Sabbath_-_The_Eternal_Idol.jpg" },
        { name: "Headless Cross", year: "1989", label: "IRS Records", cover: "https://upload.wikimedia.org/wikipedia/en/5/5b/Black_Sabbath_-_Headless_Cross.jpg" },
        { name: "Tyr", year: "1990", label: "IRS Records", cover: "https://upload.wikimedia.org/wikipedia/en/5/5f/Black_Sabbath_-_Tyr.jpg" },
        { name: "Dehumanizer", year: "1992", label: "IRS Records", cover: "https://upload.wikimedia.org/wikipedia/en/4/4f/Black_Sabbath_-_Dehumanizer.jpg" },
        { name: "Cross Purposes", year: "1994", label: "IRS Records", cover: "https://upload.wikimedia.org/wikipedia/en/e/e4/Black_Sabbath_-_Cross_Purposes.jpg" },
        { name: "Forbidden", year: "1995", label: "IRS Records", cover: "https://upload.wikimedia.org/wikipedia/en/f/fe/Black_Sabbath_-_Forbidden.jpg" },
        { name: "13", year: "2013", label: "Vertigo / Universal", cover: "https://upload.wikimedia.org/wikipedia/en/b/bf/Black_Sabbath_-_13.jpg" },
    ];

    const handleAlbumClick = (name) => {
        setCurrentVideo(albumVideos[name] || "https://www.youtube.com/embed/0qanF-91aJo");
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.rockContainer}>
            <nav className={styles.rockNav}>
                <Link to="/" className={styles.rockNavItem}>INICIO</Link> |
                <Link to="/blacksabbath" className={styles.rockNavItem}>BLACK SABBATH</Link> |
                <Link to="/blacksabbath/historia" className={styles.rockNavItem}>HISTORIA</Link> |
                <Link to="/blacksabbath/albunes" className={`${styles.rockNavItem} ${styles.rockActive}`}>ÁLBUMES</Link> |
                <Link to="/blacksabbath/grupo" className={styles.rockNavItem}>GRUPO</Link>
            </nav>

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>💽 ÁLBUMES 💽</h1>
                <div className={styles.guitarRiff}></div>
            </header>

            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>📀 DISCOGRAFÍA COMPLETA 📀</h2>
                <div className={styles.rockVideoContainer} ref={videoRef}>
                    <iframe width="560" height="315" src={currentVideo} title="Black Sabbath Discografía"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className={styles.rockVideo}></iframe>
                </div>
                <div className={styles.rockAlbumsGrid}>
                    {albums.map((album) => (
                        <div key={album.name} className={styles.rockAlbumCard} onClick={() => handleAlbumClick(album.name)}>
                            <h3 className={styles.rockAlbumTitle}>{album.name}</h3>
                            <p className={styles.rockAlbumInfo}>{album.year}<br />{album.label}</p>
                            <img src={album.cover} alt={album.name} className={styles.rockAlbumCover} />
                            <div className={styles.rockAlbumOverlay}>🦇</div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className={styles.rockFooter}>
                <p className={styles.rockFooterText}>© {new Date().getFullYear()} R.A.V.V 🦇 BLACK SABBATH 🦇</p>
            </footer>
        </div>
    );
};

export default BlackSabbathAlbunes;