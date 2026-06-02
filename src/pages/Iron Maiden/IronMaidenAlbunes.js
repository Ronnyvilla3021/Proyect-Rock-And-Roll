import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './IronMaidenAlbunes.module.css';

const IronMaidenAlbunes = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/H3v9unphfi0");
    const videoRef = useRef(null);

    const albumVideos = {
        "Iron Maiden": "https://www.youtube.com/embed/H3v9unphfi0",
        "Killers": "https://www.youtube.com/embed/mDRfvBCuK58",
        "The Number of the Beast": "https://www.youtube.com/embed/WAvIBCBjt4Q",
        "Piece of Mind": "https://www.youtube.com/embed/vjhlMFMKImg",
        "Powerslave": "https://www.youtube.com/embed/EQM2kNmLTqM",
        "Somewhere in Time": "https://www.youtube.com/embed/rmnCHi4d4ek",
        "Seventh Son of a Seventh Son": "https://www.youtube.com/embed/gg6DFjbFgkM",
        "No Prayer for the Dying": "https://www.youtube.com/embed/szYnmIJTtEY",
        "Fear of the Dark": "https://www.youtube.com/embed/YCNt4QMR144",
        "The X Factor": "https://www.youtube.com/embed/XFYyBxvDMIc",
        "Virtual XI": "https://www.youtube.com/embed/wG0CbIhJbeQ",
        "Brave New World": "https://www.youtube.com/embed/CPHwNjbj97U",
        "Dance of Death": "https://www.youtube.com/embed/kNPKfnIZJLE",
        "A Matter of Life and Death": "https://www.youtube.com/embed/lm1GBkFCRVE",
        "The Final Frontier": "https://www.youtube.com/embed/rknmmB4Qweg",
        "The Book of Souls": "https://www.youtube.com/embed/yH1cGSOxx3E",
        "Senjutsu": "https://www.youtube.com/embed/p4KCzxPPDaM",
    };

    const albums = [
        { name: "Iron Maiden", year: "1980", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/7/7c/Iron_Maiden_-_Iron_Maiden.jpg" },
        { name: "Killers", year: "1981", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/6/6f/Iron_Maiden_-_Killers.jpg" },
        { name: "The Number of the Beast", year: "1982", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/IronMaiden_NumberOfTheBeast.jpg" },
        { name: "Piece of Mind", year: "1983", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/9/9a/Iron_Maiden_-_Piece_of_Mind.jpg" },
        { name: "Powerslave", year: "1984", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/1/1c/Iron_Maiden_-_Powerslave.jpg" },
        { name: "Somewhere in Time", year: "1986", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/0/04/Iron_Maiden_-_Somewhere_in_Time.jpg" },
        { name: "Seventh Son of a Seventh Son", year: "1988", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/Iron_Maiden_-_Seventh_Son_of_a_Seventh_Son.jpg" },
        { name: "No Prayer for the Dying", year: "1990", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/7/79/Iron_Maiden_-_No_Prayer_for_the_Dying.jpg" },
        { name: "Fear of the Dark", year: "1992", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/f/f6/Iron_Maiden_-_Fear_of_the_Dark.jpg" },
        { name: "The X Factor", year: "1995", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/f/f3/Iron_Maiden_-_The_X_Factor.jpg" },
        { name: "Virtual XI", year: "1998", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/9/9a/Iron_Maiden_-_Virtual_XI.jpg" },
        { name: "Brave New World", year: "2000", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/8/8e/Iron_Maiden_-_Brave_New_World.jpg" },
        { name: "Dance of Death", year: "2003", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/6/67/Iron_Maiden_-_Dance_of_Death.jpg" },
        { name: "A Matter of Life and Death", year: "2006", label: "EMI", cover: "https://upload.wikimedia.org/wikipedia/en/5/5d/Iron_Maiden_-_A_Matter_of_Life_and_Death.jpg" },
        { name: "The Final Frontier", year: "2010", label: "Universal", cover: "https://upload.wikimedia.org/wikipedia/en/d/d7/Iron_Maiden_-_The_Final_Frontier.jpg" },
        { name: "The Book of Souls", year: "2015", label: "Parlophone", cover: "https://upload.wikimedia.org/wikipedia/en/6/60/Iron_Maiden_-_The_Book_of_Souls.png" },
        { name: "Senjutsu", year: "2021", label: "Parlophone", cover: "https://upload.wikimedia.org/wikipedia/en/6/65/Iron_Maiden_-_Senjutsu.png" },
    ];

    const handleAlbumClick = (name) => {
        setCurrentVideo(albumVideos[name] || "https://www.youtube.com/embed/H3v9unphfi0");
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.rockContainer}>
            <nav className={styles.rockNav}>
                <Link to="/" className={styles.rockNavItem}>INICIO</Link> |
                <Link to="/ironmaiden" className={styles.rockNavItem}>IRON MAIDEN</Link> |
                <Link to="/ironmaiden/historia" className={styles.rockNavItem}>HISTORIA</Link> |
                <Link to="/ironmaiden/albunes" className={`${styles.rockNavItem} ${styles.rockActive}`}>ÁLBUMES</Link> |
                <Link to="/ironmaiden/grupo" className={styles.rockNavItem}>GRUPO</Link>
            </nav>

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>💽 ÁLBUMES 💽</h1>
                <div className={styles.guitarRiff}></div>
            </header>

            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>📀 DISCOGRAFÍA COMPLETA 📀</h2>
                <div className={styles.rockVideoContainer} ref={videoRef}>
                    <iframe width="560" height="315" src={currentVideo} title="Iron Maiden Discografía"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className={styles.rockVideo}></iframe>
                </div>
                <div className={styles.rockAlbumsGrid}>
                    {albums.map((album) => (
                        <div key={album.name} className={styles.rockAlbumCard} onClick={() => handleAlbumClick(album.name)}>
                            <h3 className={styles.rockAlbumTitle}>{album.name}</h3>
                            <p className={styles.rockAlbumInfo}>{album.year}<br />{album.label}</p>
                            <img src={album.cover} alt={album.name} className={styles.rockAlbumCover} />
                            <div className={styles.rockAlbumOverlay}>⚔️</div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className={styles.rockFooter}>
                <p className={styles.rockFooterText}>© {new Date().getFullYear()} R.A.V.V 🔥 IRON MAIDEN 🔥</p>
            </footer>
        </div>
    );
};

export default IronMaidenAlbunes;