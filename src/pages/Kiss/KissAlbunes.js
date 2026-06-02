import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './KissAlbunes.module.css';

const KissAlbunes = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/SuKT5BDlNMU");
    const videoRef = useRef(null);

    const albumVideos = {
        "Kiss": "https://www.youtube.com/embed/SuKT5BDlNMU",
        "Hotter Than Hell": "https://www.youtube.com/embed/e1Ow7eWmjGM",
        "Dressed to Kill": "https://www.youtube.com/embed/g9X9KAIz0Go",
        "Destroyer": "https://www.youtube.com/embed/pB3aOBDFZdA",
        "Rock and Roll Over": "https://www.youtube.com/embed/h3h6RCsWL28",
        "Love Gun": "https://www.youtube.com/embed/k80uY9sfSF8",
        "Dynasty": "https://www.youtube.com/embed/MUipAjRiSfE",
        "Unmasked": "https://www.youtube.com/embed/Qyg5U5vfbWU",
        "Creatures of the Night": "https://www.youtube.com/embed/i6A7b9cpMrc",
        "Lick It Up": "https://www.youtube.com/embed/wJuNKlJwFqA",
        "Animalize": "https://www.youtube.com/embed/j0lFPl4OVl4",
        "Asylum": "https://www.youtube.com/embed/MHlTJ2XLNL0",
        "Crazy Nights": "https://www.youtube.com/embed/sDMmS1nkBfk",
        "Hot in the Shade": "https://www.youtube.com/embed/D9bTQV2AQfM",
        "Revenge": "https://www.youtube.com/embed/CcFMcTJE5xI",
        "Carnival of Souls": "https://www.youtube.com/embed/zz23kZ-JXBU",
        "Psycho Circus": "https://www.youtube.com/embed/A23fmNlFnJY",
        "Sonic Boom": "https://www.youtube.com/embed/LvC7MDz7E0I",
        "Monster": "https://www.youtube.com/embed/a5u1RV44NtM",
    };

    const albums = [
        { name: "Kiss", year: "1974", label: "Casablanca Records", cover: "https://upload.wikimedia.org/wikipedia/en/7/7a/Kiss_-_Kiss.jpg" },
        { name: "Hotter Than Hell", year: "1974", label: "Casablanca Records", cover: "https://upload.wikimedia.org/wikipedia/en/3/3c/Kiss-hotter_than_hell.jpg" },
        { name: "Dressed to Kill", year: "1975", label: "Casablanca Records", cover: "https://upload.wikimedia.org/wikipedia/en/8/80/Kiss_dressed_to_kill.jpg" },
        { name: "Destroyer", year: "1976", label: "Casablanca Records", cover: "https://upload.wikimedia.org/wikipedia/en/9/9e/KISSDestroyer.jpg" },
        { name: "Rock and Roll Over", year: "1976", label: "Casablanca Records", cover: "https://upload.wikimedia.org/wikipedia/en/0/05/Kiss-Rock_and_Roll_Over.jpg" },
        { name: "Love Gun", year: "1977", label: "Casablanca Records", cover: "https://upload.wikimedia.org/wikipedia/en/6/6d/Kiss-LoveGun.jpg" },
        { name: "Dynasty", year: "1979", label: "Casablanca Records", cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Kiss_-_Dynasty.jpg" },
        { name: "Unmasked", year: "1980", label: "Casablanca Records", cover: "https://upload.wikimedia.org/wikipedia/en/b/b8/Kiss_-_Unmasked.jpg" },
        { name: "Creatures of the Night", year: "1982", label: "Casablanca Records", cover: "https://upload.wikimedia.org/wikipedia/en/0/0a/Kiss_-_Creatures_of_the_Night.jpg" },
        { name: "Lick It Up", year: "1983", label: "Mercury Records", cover: "https://upload.wikimedia.org/wikipedia/en/1/19/Kiss_lick_it_up.jpg" },
        { name: "Animalize", year: "1984", label: "Mercury Records", cover: "https://upload.wikimedia.org/wikipedia/en/e/e0/Kiss_animalize.jpg" },
        { name: "Asylum", year: "1985", label: "Mercury Records", cover: "https://upload.wikimedia.org/wikipedia/en/d/da/Kiss_Asylum_album_cover.jpg" },
        { name: "Crazy Nights", year: "1987", label: "Mercury Records", cover: "https://upload.wikimedia.org/wikipedia/en/2/2d/KissCrazyNights.jpg" },
        { name: "Hot in the Shade", year: "1989", label: "Mercury Records", cover: "https://upload.wikimedia.org/wikipedia/en/e/ed/Kiss_-_Hot_in_the_Shade.jpg" },
        { name: "Revenge", year: "1992", label: "Mercury Records", cover: "https://upload.wikimedia.org/wikipedia/en/2/20/Kiss-Revenge.jpg" },
        { name: "Carnival of Souls", year: "1997", label: "Mercury Records", cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/Kiss_-_Carnival_of_Souls.jpg" },
        { name: "Psycho Circus", year: "1998", label: "Mercury Records", cover: "https://upload.wikimedia.org/wikipedia/en/5/5e/Kiss_-_Psycho_Circus.jpg" },
        { name: "Sonic Boom", year: "2009", label: "Universal", cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/Kiss_-_Sonic_Boom.jpg" },
        { name: "Monster", year: "2012", label: "Universal Republic", cover: "https://upload.wikimedia.org/wikipedia/en/4/44/Kiss_Monster.jpg" },
    ];

    const handleAlbumClick = (name) => {
        setCurrentVideo(albumVideos[name] || "https://www.youtube.com/embed/SuKT5BDlNMU");
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.rockContainer}>
            <nav className={styles.rockNav}>
                <Link to="/" className={styles.rockNavItem}>INICIO</Link> |
                <Link to="/kiss" className={styles.rockNavItem}>KISS</Link> |
                <Link to="/kiss/historia" className={styles.rockNavItem}>HISTORIA</Link> |
                <Link to="/kiss/albunes" className={`${styles.rockNavItem} ${styles.rockActive}`}>ÁLBUMES</Link> |
                <Link to="/kiss/grupo" className={styles.rockNavItem}>GRUPO</Link>
            </nav>

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>💽 ÁLBUMES 💽</h1>
                <div className={styles.guitarRiff}></div>
            </header>

            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>📀 DISCOGRAFÍA COMPLETA 📀</h2>
                <div className={styles.rockVideoContainer} ref={videoRef}>
                    <iframe width="560" height="315" src={currentVideo} title="KISS Discografía"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className={styles.rockVideo}></iframe>
                </div>
                <div className={styles.rockAlbumsGrid}>
                    {albums.map((album) => (
                        <div key={album.name} className={styles.rockAlbumCard} onClick={() => handleAlbumClick(album.name)}>
                            <h3 className={styles.rockAlbumTitle}>{album.name}</h3>
                            <p className={styles.rockAlbumInfo}>{album.year}<br />{album.label}</p>
                            <img src={album.cover} alt={album.name} className={styles.rockAlbumCover} />
                            <div className={styles.rockAlbumOverlay}>💋</div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className={styles.rockFooter}>
                <p className={styles.rockFooterText}>© {new Date().getFullYear()} R.A.V.V 💋 KISS 💋</p>
            </footer>
        </div>
    );
};

export default KissAlbunes;