import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './OzzyAlbunes.module.css';

const OzzyAlbunes = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/dUfRPgMAnTk");
    const videoRef = useRef(null);

    const albumVideos = {
        "Blizzard of Ozz": "https://www.youtube.com/embed/dUfRPgMAnTk",
        "Diary of a Madman": "https://www.youtube.com/embed/92BBNNUnme8",
        "Bark at the Moon": "https://www.youtube.com/embed/Zm3EFJMkHyM",
        "The Ultimate Sin": "https://www.youtube.com/embed/5mbGPeaD-GA",
        "No Rest for the Wicked": "https://www.youtube.com/embed/IXjgxpYqGaI",
        "No More Tears": "https://www.youtube.com/embed/LWBPCdMpnGY",
        "Ozzmosis": "https://www.youtube.com/embed/0k12OJ5skBg",
        "Down to Earth": "https://www.youtube.com/embed/JzJv3GOqeM4",
        "Black Rain": "https://www.youtube.com/embed/KFvKXNJoJ04",
        "Scream": "https://www.youtube.com/embed/RuXDt98NuQ8",
        "Ordinary Man": "https://www.youtube.com/embed/qu7_XbMBQMg",
        "Patient Number 9": "https://www.youtube.com/embed/Iz2TaFMUDpU",
    };

    const albums = [
        { name: "Blizzard of Ozz", year: "1980", label: "Jet Records", cover: "https://upload.wikimedia.org/wikipedia/en/3/thirty/Blizzard_of_Ozz_cover.jpg" },
        { name: "Diary of a Madman", year: "1981", label: "Jet Records", cover: "https://upload.wikimedia.org/wikipedia/en/4/45/Diary_of_a_Madman_cover.jpg" },
        { name: "Bark at the Moon", year: "1983", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/OzzyOsbourneBarkAtTheMoon.jpg" },
        { name: "The Ultimate Sin", year: "1986", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/6/62/The_Ultimate_Sin.jpg" },
        { name: "No Rest for the Wicked", year: "1988", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/a/a9/No_Rest_for_the_Wicked_cover.jpg" },
        { name: "No More Tears", year: "1991", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/4/42/No_More_Tears_cover.jpg" },
        { name: "Ozzmosis", year: "1995", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/4/45/Ozzy_Osbourne_-_Ozzmosis.jpg" },
        { name: "Down to Earth", year: "2001", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/5/54/Ozzy_Osbourne_-_Down_to_Earth.jpg" },
        { name: "Black Rain", year: "2007", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/d/d0/BlackRainalbumcover.jpg" },
        { name: "Scream", year: "2010", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Ozzy_Osbourne_-_Scream.jpg" },
        { name: "Ordinary Man", year: "2020", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/6/61/Ozzy_Osbourne_-_Ordinary_Man.png" },
        { name: "Patient Number 9", year: "2022", label: "Epic Records", cover: "https://upload.wikimedia.org/wikipedia/en/f/f5/Ozzy_Osbourne_-_Patient_Number_9.png" },
    ];

    const handleAlbumClick = (name) => {
        setCurrentVideo(albumVideos[name] || "https://www.youtube.com/embed/dUfRPgMAnTk");
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.rockContainer}>
            <nav className={styles.rockNav}>
                <Link to="/" className={styles.rockNavItem}>INICIO</Link> |
                <Link to="/ozzy" className={styles.rockNavItem}>OZZY</Link> |
                <Link to="/ozzy/historia" className={styles.rockNavItem}>HISTORIA</Link> |
                <Link to="/ozzy/albunes" className={`${styles.rockNavItem} ${styles.rockActive}`}>ÁLBUMES</Link> |
                <Link to="/ozzy/grupo" className={styles.rockNavItem}>GRUPO</Link>
            </nav>

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>💽 ÁLBUMES 💽</h1>
                <div className={styles.guitarRiff}></div>
            </header>

            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>📀 DISCOGRAFÍA COMPLETA 📀</h2>
                <div className={styles.rockVideoContainer} ref={videoRef}>
                    <iframe width="560" height="315" src={currentVideo} title="Ozzy Discografía"
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
                <p className={styles.rockFooterText}>© {new Date().getFullYear()} R.A.V.V 🦇 OZZY OSBOURNE 🦇</p>
            </footer>
        </div>
    );
};

export default OzzyAlbunes;