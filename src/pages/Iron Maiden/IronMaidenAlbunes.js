import React, { useState, useRef } from 'react';
import styles from './IronMaidenAlbunes.module.css';
import IronMaidenNav from '../../components/nav/IronMaidenNav';

import ironmaiden from '../../images/ironmaiden/ironmaiden.jpg';
import killers from '../../images/ironmaiden/killers.jpg';
import thenumberofthebeast from '../../images/ironmaiden/thenumberofthebeast.jpg';
import pieceofmind from '../../images/ironmaiden/pieceofmind.jpg';
import powerslave from '../../images/ironmaiden/powerslave.jpg';
import somewhereintime from '../../images/ironmaiden/somewhereintime.jpg';
import seventhson from '../../images/ironmaiden/seventhsonofaseventhson.jpg';
import noprayer from '../../images/ironmaiden/noprayerforthedying.jpg';
import fearofthedark from '../../images/ironmaiden/fearofthedark.jpg';
import thexfactor from '../../images/ironmaiden/thexfactor.jpg';
import virtualxi from '../../images/ironmaiden/virtualxi.jpg';
import bravenewworld from '../../images/ironmaiden/bravenewworld.jpg';
import danceofdeath from '../../images/ironmaiden/danceofdeath.jpg';
import amatteroflifeanddeath from '../../images/ironmaiden/amatteroflifeanddeath.jpg';
import thefinalfrontier from '../../images/ironmaiden/thefinalfrontier.jpg';
import thebookofsouls from '../../images/ironmaiden/thebookofsouls.jpg';
import senjutsu from '../../images/ironmaiden/senjutsu.jpg';

const albums = [
    { name: "Iron Maiden", year: "1980", cover: ironmaiden, video: "https://www.youtube.com/embed/ufp75XlTp-Q" },
    { name: "Killers", year: "1981", cover: killers, video: "https://www.youtube.com/embed/io4ObwuO24w" },
    { name: "The Number of the Beast", year: "1982", cover: thenumberofthebeast, video: "https://www.youtube.com/embed/WxnN05vOuSM" },
    { name: "Piece of Mind", year: "1983", cover: pieceofmind, video: "https://www.youtube.com/embed/X4bgXH3sJ2Q" },
    { name: "Powerslave", year: "1984", cover: powerslave, video: "https://www.youtube.com/embed/9qbRHY1l0vc" },
    { name: "Somewhere in Time", year: "1986", cover: somewhereintime, video: "https://www.youtube.com/embed/Ij99dud8-0A" },
    { name: "Seventh Son", year: "1988", cover: seventhson, video: "https://www.youtube.com/embed/s5Q_rbs9ul8" },
    { name: "No Prayer", year: "1990", cover: noprayer, video: "https://www.youtube.com/embed/xPV4jlOlWjA" },
    { name: "Fear of the Dark", year: "1992", cover: fearofthedark, video: "https://www.youtube.com/embed/L4EDWVbNKnM" },
    { name: "The X Factor", year: "1995", cover: thexfactor, video: "https://www.youtube.com/embed/u5UqJWRV55E" },
    { name: "Virtual XI", year: "1998", cover: virtualxi, video: "https://www.youtube.com/embed/t3ymU8rbEhw" },
    { name: "Brave New World", year: "2000", cover: bravenewworld, video: "https://www.youtube.com/embed/-sQ3Af3DpeM" },
    { name: "Dance of Death", year: "2003", cover: danceofdeath, video: "https://www.youtube.com/embed/GoBok1xd93M?si=QgFPF47WkyZvEKTb" },
    { name: "A Matter of Life and Death", year: "2006", cover: amatteroflifeanddeath, video: "https://www.youtube.com/embed/fmx1usEg--k" },
    { name: "The Final Frontier", year: "2010", cover: thefinalfrontier, video: "https://www.youtube.com/embed/xMlaFD3s-1s" },
    { name: "The Book of Souls", year: "2015", cover: thebookofsouls, video: "https://www.youtube.com/embed/-F7A24f6gNc" },
    { name: "Senjutsu", year: "2021", cover: senjutsu, video: "https://www.youtube.com/embed/FhBnW7bZHEE" }
];

const IronMaidenAlbunes = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/Xg9aQvjMS60");
    const videoRef = useRef(null);

    const handleAlbumClick = (video) => {
        setCurrentVideo(video);
        videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <div className={styles.maidenPage}>
            <IronMaidenNav active="albunes" />

            <main className={styles.mainContent}>
                <div className={styles.galleryWrapper}>
                    {albums.map((album, index) => (
                        <div
                            key={index}
                            className={styles.vinylWrapper}
                            onClick={() => handleAlbumClick(album.video)}
                        >
                            <div className={styles.vinylDisc}></div>
                            <div className={styles.vinylCover}>
                                <img src={album.cover} alt={album.name} loading="lazy" />
                            </div>
                            <h3 className={styles.albumTitle}>{album.name}</h3>
                            <span className={styles.albumYear}>{album.year}</span>
                        </div>
                    ))}

                    <div className={styles.centerVideo} ref={videoRef}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={currentVideo}
                            title="Iron Maiden Player"
                            frameBorder="0"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default IronMaidenAlbunes;
