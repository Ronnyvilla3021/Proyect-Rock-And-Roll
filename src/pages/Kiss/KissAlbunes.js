import React, { useState, useRef } from 'react';
import styles from './KissAlbunes.module.css';
import KissNav from '../../components/nav/KissNav';

/* IMÁGENES */
import imgKiss from '../../images/kiss/kiss.jpg';
import imgHotterThanHell from '../../images/kiss/hotterthanhell.jpg';
import imgDressedToKill from '../../images/kiss/dressedtokill.jpg';
import imgDestroyer from '../../images/kiss/destroyer.jpg';
import imgRockAndRollOver from '../../images/kiss/rockandrollover.jpg';
import imgLoveGun from '../../images/kiss/lovegun.jpg';
import imgDynasty from '../../images/kiss/dynasty.jpg';
import imgUnmasked from '../../images/kiss/unmasked.jpg';
import imgElder from '../../images/kiss/musicfromtheelder.jpg';
import imgCreatures from '../../images/kiss/creaturesofthenight.jpg';
import imgLickItUp from '../../images/kiss/lickitup.jpg';
import imgAnimalize from '../../images/kiss/animalize.jpg';
import imgAsylum from '../../images/kiss/asylum.jpg';
import imgCrazyNights from '../../images/kiss/crazynights.jpg';
import imgHotInShade from '../../images/kiss/hotintheshade.jpg';
import imgRevenge from '../../images/kiss/revenge.jpg';
import imgCarnival from '../../images/kiss/carnivalofsoulsthefinalsessions.jpg';
import imgPsycho from '../../images/kiss/psychocircus.jpg';
import imgSonicBoom from '../../images/kiss/sonicboom.jpg';
import imgMonster from '../../images/kiss/monster.jpg';
import portada from '../../images/kiss/portada2.jpg';

const KissAlbunes = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/yiSB7G732Eg");
    const videoRef = useRef(null);

    const albumVideos = {
        "Kiss": "https://www.youtube.com/embed/4q4RCnf1BmM",
        "Hotter Than Hell": "https://www.youtube.com/embed/ub04RvbvOIM",
        "Dressed to Kill": "https://www.youtube.com/embed/Ff9efKdyz84",
        "Destroyer": "https://www.youtube.com/embed/WxNvdQCbLco",
        "Rock and Roll Over": "https://www.youtube.com/embed/CRMnCRoDguc",
        "Love Gun": "https://www.youtube.com/embed/l-eePttM-Gc",
        "Dynasty": "https://www.youtube.com/embed/ZhIsAZO5gl0",
        "Unmasked": "https://www.youtube.com/embed/jwp54MwzGIk",
        "Music from The Elder": "https://www.youtube.com/embed/A9SLgcNEpyM",
        "Creatures of the Night": "https://www.youtube.com/embed/LMcDg2HwOnM",
        "Lick It Up": "https://www.youtube.com/embed/Gcj34XixuYg",
        "Animalize": "https://www.youtube.com/embed/EZjevnnkA20",
        "Asylum": "https://www.youtube.com/embed/lEwnfhuPJGs",
        "Crazy Nights": "https://www.youtube.com/embed/BlRS7j8lK24",
        "Hot in the Shade": "https://www.youtube.com/embed/d_RKO5ozLVo",
        "Revenge": "https://www.youtube.com/embed/qrn6GcDMHBY",
        "Carnival of Souls": "https://www.youtube.com/embed/Zi5oTlnoJ5A",
        "Psycho Circus": "https://www.youtube.com/embed/BWIW6Ti0PbE",
        "Sonic Boom": "https://www.youtube.com/embed/a6rRP95Kvpw",
        "Monster": "https://www.youtube.com/embed/m13xXcH0UWA"
    };

    const albums = [
        { name: "Kiss", year: "1974", cover: imgKiss },
        { name: "Hotter Than Hell", year: "1974", cover: imgHotterThanHell },
        { name: "Dressed to Kill", year: "1975", cover: imgDressedToKill },
        { name: "Destroyer", year: "1976", cover: imgDestroyer },
        { name: "Rock and Roll Over", year: "1976", cover: imgRockAndRollOver },
        { name: "Love Gun", year: "1977", cover: imgLoveGun },
        { name: "Dynasty", year: "1979", cover: imgDynasty },
        { name: "Unmasked", year: "1980", cover: imgUnmasked },
        { name: "Music from The Elder", year: "1981", cover: imgElder },
        { name: "Creatures of the Night", year: "1982", cover: imgCreatures },
        { name: "Lick It Up", year: "1983", cover: imgLickItUp },
        { name: "Animalize", year: "1984", cover: imgAnimalize },
        { name: "Asylum", year: "1985", cover: imgAsylum },
        { name: "Crazy Nights", year: "1987", cover: imgCrazyNights },
        { name: "Hot in the Shade", year: "1989", cover: imgHotInShade },
        { name: "Revenge", year: "1992", cover: imgRevenge },
        { name: "Carnival of Souls", year: "1997", cover: imgCarnival },
        { name: "Psycho Circus", year: "1998", cover: imgPsycho },
        { name: "Sonic Boom", year: "2009", cover: imgSonicBoom },
        { name: "Monster", year: "2012", cover: imgMonster }
    ];

    const handleAlbumClick = (name) => {
        setCurrentVideo(albumVideos[name] || "https://www.youtube.com/embed/SuKT5BDlNMU");
        videoRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const half = Math.ceil(albums.length / 2);
    const leftAlbums = albums.slice(0, half);
    const rightAlbums = albums.slice(half);

    return (
        <div className={styles.rockContainer} style={{ backgroundImage: `url(${portada})` }}>
            <KissNav active="albunes" />

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>ÁLBUMES</h1>
                <div className={styles.guitarRiff}></div>
            </header>

            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>📀 DISCOGRAFÍA DE ESTUDIO 📀</h2>

                <div className={styles.rockLayoutGrid}>
                    <div className={styles.rockSideColumn}>
                        {leftAlbums.map((album) => (
                            <div key={album.name} className={styles.rockStarCard} onClick={() => handleAlbumClick(album.name)}>
                                <div className={styles.rockStarShape} style={{ backgroundImage: `url(${album.cover})` }}>
                                    <div className={styles.rockStarOverlay}>
                                        <span>{album.name}</span>
                                        <span>{album.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.rockCenterColumn} ref={videoRef}>
                        <div className={styles.rockVideoContainer}>
                            <iframe
                                width="560"
                                height="315"
                                src={currentVideo}
                                title="KISS"
                                frameBorder="0"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={styles.rockVideo}
                            />
                        </div>
                    </div>

                    <div className={styles.rockSideColumn}>
                        {rightAlbums.map((album) => (
                            <div key={album.name} className={styles.rockStarCard} onClick={() => handleAlbumClick(album.name)}>
                                <div className={styles.rockStarShape} style={{ backgroundImage: `url(${album.cover})` }}>
                                    <div className={styles.rockStarOverlay}>
                                        <span>{album.name}</span>
                                        <span>{album.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className={styles.rockFooter}>
                <p className={styles.rockFooterText}>
                    © {new Date().getFullYear()} R.A.V.V 💋 KISS 💋
                </p>
            </footer>
        </div>
    );
};

export default KissAlbunes;
