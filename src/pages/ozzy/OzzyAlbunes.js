import React, { useState, useRef, useEffect } from 'react';
import styles from './OzzyAlbunes.module.css';
import OzzyNav from '../../components/nav/OzzyNav';

/* IMPORTACIÓN DE CARÁTULAS */
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
import bgOzzy from '../../images/ozzy/portada1.png';

const albums = [
    { name: "Blizzard of Ozz", year: "1980", label: "Jet Records", cover: imgBlizzard },
    { name: "Diary of a Madman", year: "1981", label: "Jet Records", cover: imgDiary },
    { name: "Bark at the Moon", year: "1983", label: "Epic Records", cover: imgBark },
    { name: "The Ultimate Sin", year: "1986", label: "Epic Records", cover: imgUltimate },
    { name: "No Rest for the Wicked", year: "1988", label: "Epic Records", cover: imgWicked },
    { name: "No More Tears", year: "1991", label: "Epic Records", cover: imgNoMoreTears },
    { name: "Ozzmosis", year: "1995", label: "Epic Records", cover: imgOzzmosis },
    { name: "Down to Earth", year: "2001", label: "Epic Records", cover: imgDownToEarth },
    { name: "Black Rain", year: "2007", label: "Epic Records", cover: imgBlackRain },
    { name: "Scream", year: "2010", label: "Epic Records", cover: imgScream },
    { name: "Ordinary Man", year: "2020", label: "Epic Records", cover: imgOrdinary },
    { name: "Patient Number 9", year: "2022", label: "Epic Records", cover: imgPatient9 }
];

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

// Posiciones fijas de cada "murciélago" álbum en la cueva
const BAT_POSITIONS = [
    { top: 8, left: 2, rotate: -18 }, { top: 22, left: 5, rotate: -11 },
    { top: 40, left: 3, rotate: 10 }, { top: 58, left: 7, rotate: -8 },
    { top: 8, left: 80, rotate: 16 }, { top: 24, left: 82, rotate: -10 },
    { top: 42, left: 80, rotate: 12 }, { top: 60, left: 78, rotate: -14 },
    { top: 76, left: 14, rotate: -9 }, { top: 76, left: 34, rotate: 8 },
    { top: 76, left: 56, rotate: -7 }, { top: 76, left: 74, rotate: 10 }
];

const OzzyAlbunes = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/99baQJgj208");
    const [batStyles, setBatStyles] = useState([]);
    const videoRef = useRef(null);
    const resizeTimeoutRef = useRef(null);

    const handleAlbumClick = (name) => {
        setCurrentVideo(albumVideos[name] || albumVideos["Blizzard of Ozz"]);
        videoRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const generateRandomStyles = () => {
            const stylesArray = albums.map((_, i) => ({
                width: "270px",
                top: `${BAT_POSITIONS[i].top}%`,
                left: `${BAT_POSITIONS[i].left}%`,
                transform: `rotate(${BAT_POSITIONS[i].rotate}deg)`,
                "--js-rotate": `${BAT_POSITIONS[i].rotate}deg`,
                animationDuration: `${4 + Math.random() * 2}s`
            }));
            setBatStyles(stylesArray);
        };

        // Cálculo inicial inmediato
        generateRandomStyles();

        // En resize, esperamos a que el usuario termine de mover la ventana
        // en vez de recalcular en cada evento (podía dispararse decenas de veces por segundo)
        const handleResize = () => {
            clearTimeout(resizeTimeoutRef.current);
            resizeTimeoutRef.current = setTimeout(generateRandomStyles, 200);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeoutRef.current);
        };
    }, []);

    return (
        <div 
            className={styles.rockContainer}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.82)), url(${bgOzzy})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className={styles.fog}></div>
            <div className={styles.cross1}>✝</div>
            <div className={styles.cross2}>✝</div>

            <OzzyNav active="albunes" />

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>ÁLBUMES</h1>
                <span className={styles.logoSub}>🦇DISCOGRAFÍA DE ESTUDIO🦇</span>
            </header>

            <section className={styles.rockContent}>
                <div className={styles.rockVideoContainer} ref={videoRef}>
                    <iframe src={currentVideo} title="Ozzy Video Player" className={styles.rockVideo} loading="lazy" allowFullScreen />
                </div>

                <div className={styles.batCave}>
                    {albums.map((album, index) => (
                        <div 
                            key={album.name} 
                            className={styles.batAlbumContainer} 
                            style={batStyles[index]} 
                            onClick={() => handleAlbumClick(album.name)}
                        >
                            <div className={styles.batShape}>
                                <div className={styles.coverBgArt} style={{ backgroundImage: `url(${album.cover})` }}></div>
                                <div className={styles.coverGrid}></div>
                                <div className={styles.labelBody}>
                                    <h2 className={styles.mainTitle}>{album.name}</h2>
                                    <p className={styles.subChapters}>{album.year}</p>
                                </div>
                                <div className={styles.labelFooter}><span>{album.label}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OzzyAlbunes;
