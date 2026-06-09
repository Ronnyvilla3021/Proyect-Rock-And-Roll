import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './OzzyAlbunes.module.css';

// Importación de las carátulas locales desde src/images/ozzy/
import imgBlizzard from '../../images/ozzy/15blizzardofozz.jpg';
import imgDiary from '../../images/ozzy/1diaryofamadman.jpg';
import imgBark from '../../images/ozzy/2barkatthemoon.jpeg';
import imgUltimate from '../../images/ozzy/3theultimatesin.jpeg';
import imgWicked from '../../images/ozzy/5norestforthewicked.jpeg';
import imgNoMoreTears from '../../images/ozzy/6nomoretears.jpg';
import imgOzzmosis from '../../images/ozzy/8ozzmosis.jpg';
import imgDownToEarth from '../../images/ozzy/9downtoearth.jpg';
import imgBlackRain from '../../images/ozzy/12blackrain.jpeg';
import imgScream from '../../images/ozzy/13scream.jpeg';
import imgOrdinary from '../../images/ozzy/14ordinaryman.jpg';
import imgPatient9 from '../../images/ozzy/16patientnumber9.jpg';

const OzzyAlbunes = () => {
    const [currentVideo, setCurrentVideo] = useState(
  "https://www.youtube.com/embed/99baQJgj208"
);
const videoRef = useRef(null);

    const albumVideos = {
    "Blizzard of Ozz": "https://www.youtube.com/embed/FVovq9TGBw0",
    "Diary of a Madman": "https://www.youtube.com/embed/qmkJSHp3GOs",
    "Bark at the Moon": "https://www.youtube.com/embed/LplPi2CxNHI",
    "The Ultimate Sin": "https://www.youtube.com/embed/O_ypaOIVmaA",
    "No Rest for the Wicked": "https://www.youtube.com/embed/j34juXrJWqw",
    "No More Tears": "https://www.youtube.com/embed/CprfjfN5PRs",
    "Ozzmosis": "https://www.youtube.com/embed/Cljv_ZP7ZLg",
    "Down to Earth": "https://www.youtube.com/embed/2AsLRPzqdpc",
    "Black Rain": "https://www.youtube.com/embed/ViMk9WKT-dM",
    "Scream": "https://www.youtube.com/embed/fxPbfvG_gH8",
    "Ordinary Man": "https://www.youtube.com/embed/kSRNrVjISRQ",
    "Patient Number 9": "https://www.youtube.com/embed/h_6DfxA6LiI"
};

const albums = [
    {
        name: "Blizzard of Ozz",
        year: "1980",
        label: "Jet Records",
        format: "LP",
        cover: imgBlizzard
    },
    {
        name: "Diary of a Madman",
        year: "1981",
        label: "Jet Records",
        format: "LP",
        cover: imgDiary
    },
    {
        name: "Bark at the Moon",
        year: "1983",
        label: "Epic Records",
        format: "LP",
        cover: imgBark
    },
    {
        name: "The Ultimate Sin",
        year: "1986",
        label: "Epic Records",
        format: "LP",
        cover: imgUltimate
    },
    {
        name: "No Rest for the Wicked",
        year: "1988",
        label: "Epic Records",
        format: "LP",
        cover: imgWicked
    },
    {
        name: "No More Tears",
        year: "1991",
        label: "Epic Records",
        format: "CD/LP",
        cover: imgNoMoreTears
    },
    {
        name: "Ozzmosis",
        year: "1995",
        label: "Epic Records",
        format: "CD",
        cover: imgOzzmosis
    },
    {
        name: "Down to Earth",
        year: "2001",
        label: "Epic Records",
        format: "CD",
        cover: imgDownToEarth
    },
    {
        name: "Black Rain",
        year: "2007",
        label: "Epic Records",
        format: "CD",
        cover: imgBlackRain
    },
    {
        name: "Scream",
        year: "2010",
        label: "Epic Records",
        format: "CD",
        cover: imgScream
    },
    {
        name: "Ordinary Man",
        year: "2020",
        label: "Epic Records",
        format: "CD/Streaming",
        cover: imgOrdinary
    },
    {
        name: "Patient Number 9",
        year: "2022",
        label: "Epic Records",
        format: "CD/Streaming",
        cover: imgPatient9
    }
];

    const handleAlbumClick = (name) => {
        setCurrentVideo(albumVideos[name] || albumVideos["Blizzard of Ozz"]);
        videoRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.rockContainer}>

            {/* Efectos ambientales de fondo */}
            <div className={styles.fog}></div>
            <div className={styles.bat1}>🦇</div>
            <div className={styles.bat2}>🦇</div>
            <div className={styles.bat3}>🦇</div>
            <div className={styles.cross1}>✝</div>
            <div className={styles.cross2}>✝</div>

            {/* NAVBAR */}
            <nav className={styles.rockNav}>
    <div className={styles.rockNavContainer}>

        <Link to="/" className={styles.rockNavItem}>INICIO</Link>
        <span className={styles.rockDivider}>|</span>

        <Link to="/ozzy" className={styles.rockNavItem}>OZZY</Link>
        <span className={styles.rockDivider}>|</span>

        <Link to="/ozzy/historia" className={styles.rockNavItem}>HISTORIA</Link>
        <span className={styles.rockDivider}>|</span>

        <Link to="/ozzy/albunes" className={`${styles.rockNavItem} ${styles.rockActive}`}>ÁLBUMES</Link>
        <span className={styles.rockDivider}>|</span>

        <Link to="/ozzy/grupo" className={styles.rockNavItem}>GRUPO</Link>

    </div>
</nav>

            {/* HEADER */}
            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>ÁLBUMES</h1>
                <span className={styles.logoSub}>DISCOGRAFÍA COMPLETA</span>
            </header>

            {/* SECCIÓN PRINCIPAL */}
            <section className={styles.rockContent}>
                
                {/* REPRODUCTOR DE VIDEO */}
                <div className={styles.rockVideoContainer} ref={videoRef}>
                    <iframe
                        src={currentVideo}
                        title="Ozzy Video Player"
                        className={styles.rockVideo}
                        allowFullScreen
                    />
                </div>

                {/* INTERFAZ DE CASSETTES VHS GRID */}
                <div className={styles.vhsGrid}>
                    {albums.map((album, index) => (
                        <div
                            key={album.name}
                            className={`${styles.vhsCassette} ${index % 2 === 0 ? styles.spoolLeftHeavy : styles.spoolRightHeavy}`}
                            onClick={() => handleAlbumClick(album.name)}
                        >
                            {/* Tornillos */}
                            <div className={`${styles.screw} ${styles.screwTl}`}></div>
                            <div className={`${styles.screw} ${styles.screwTr}`}></div>
                            <div className={`${styles.screw} ${styles.screwBl}`}></div>
                            <div className={`${styles.screw} ${styles.screwBr}`}></div>
                            
                            {/* Detalles del chasis */}
                            <div className={styles.vhsIndent}></div>
                            <div className={styles.vhsBottomCutout}></div>

                            {/* Ventanas con carretes */}
                            <div className={styles.vhsWindowsWrapper}>
                                <div className={styles.vhsWindow}>
                                    <div className={`${styles.vhsSpool} ${styles.spoolLeft}`}></div>
                                </div>
                                <div className={styles.vhsWindow}>
                                    <div className={`${styles.vhsSpool} ${styles.spoolRight}`}></div>
                                </div>
                            </div>

                            {/* Etiqueta VHS - Aquí es donde se renderizan las imágenes de fondo locales detrás del texto */}
                            <div className={styles.vhsLabelCover}>
                                <div 
                                    className={styles.coverBgArt} 
                                    style={{ backgroundImage: `url(${album.cover})` }}
                                ></div>
                                
                                <div className={styles.coverGrid}></div>
                                
                                <div className={styles.labelHeader}>
                                    <span className={styles.brandBadge}>OZZY OSBOURNE</span>
                                    <span className={styles.formatVhsText}>VHS</span>
                                </div>
                                
                                <div className={styles.labelBody}>
                                    <h2 className={styles.mainTitle}>{album.name}</h2>
                                    <p className={styles.subChapters}>{album.year} • {album.label}</p>
                                </div>
                                
                                <div className={styles.labelFooter}>
                                    <span>{album.format} ULTRA HI-FI</span>
                                    <span className={index === 0 ? styles.statusRec : styles.statusPlay}>
                                        {index === 0 ? '● REC' : '▶ PLAY'}
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OzzyAlbunes;