import React, { useState, useRef } from 'react';
import styles from './albunes.module.css';
import AcdcNav from '../../components/nav/AcdcNav';

// IMÁGENES
import img1 from "../../images/acdc/album1.jpg";
import img2 from "../../images/acdc/album2.jpg";
import img3 from "../../images/acdc/album3.jpg";
import img4 from "../../images/acdc/album4.jpg";
import img5 from "../../images/acdc/album5.jpg";
import img6 from "../../images/acdc/album6.jpg";
import img7 from "../../images/acdc/album7.jpg";
import img8 from "../../images/acdc/album8.jpg";
import img9 from "../../images/acdc/album9.jpg";
import img10 from "../../images/acdc/album10.jpg";
import img11 from "../../images/acdc/album11.jpg";
import img12 from "../../images/acdc/album12.jpg";
import img13 from "../../images/acdc/album13.jpg";
import img14 from "../../images/acdc/album14.jpg";
import img15 from "../../images/acdc/album15.jpg";
import img16 from "../../images/acdc/album16.jpg";
import img17 from "../../images/acdc/album17.jpg";
import img18 from "../../images/acdc/album18.jpg";

const ALBUMS_DATA = [
    { id: '1', name: "High Voltage", img: img1, video: "Nnjh-zp6pP4", year: 1975, info: "Debut de AC/DC con Bon Scott, sonido crudo de hard rock australiano." },
    { id: '2', name: "T.N.T", img: img2, video: "KwbBzSodFs0", year: 1975, info: "Explosión del estilo clásico de la banda." },
    { id: '3', name: "Dirty Deeds Done Dirt Cheap", img: img3, video: "9v8pAxWL6C4", year: 1976, info: "Uno de los discos más icónicos de Bon Scott." },
    { id: '4', name: "Let There Be Rock", img: img4, video: "3f2g4RMfhS0", year: 1977, info: "Rock puro, riffs pesados y energía en vivo." },
    { id: '5', name: "Powerage", img: img5, video: "-0Oa5wvARSc", year: 1978, info: "Uno de los álbumes más infravalorados pero más potentes." },
    { id: '6', name: "Highway to Hell", img: img6, video: "l482T0yNkeo", year: 1979, info: "Último álbum con Bon Scott antes de su muerte." },
    { id: '7', name: "Back in Black", img: img7, video: "pAgnJDJN4VA", year: 1980, info: "Tributo a Bon Scott y uno de los discos más vendidos de la historia." },
    { id: '8', name: "For Those About to Rock", img: img8, video: "8fPf6L0XNvM", year: 1981, info: "Incluye el icónico ‘We salute you’ con cañones." },
    { id: '9', name: "Flick of the Switch", img: img9, video: "DWKcJwuZnzE", year: 1983, info: "Regreso a un sonido más crudo." },
    { id: '10', name: "Fly on the Wall", img: img10, video: "5BWJOETwIGc", year: 1985, info: "Etapa experimental de los 80." },
    { id: '11', name: "Who Made Who", img: img11, video: "PiZHNw1MtzI", year: 1986, info: "Soundtrack de Maximum Overdrive." },
    { id: '12', name: "Blow Up Your Video", img: img12, video: "6z0geK8wbGk", year: 1988, info: "Regreso a sonido clásico." },
    { id: '13', name: "The Razors Edge", img: img13, video: "v2AC41dglnM", year: 1990, info: "Regreso mundial con ‘Thunderstruck’." },
    { id: '14', name: "Ballbreaker", img: img14, video: "X9s_CQx4ylU", year: 1995, info: "Producción de Rick Rubin, sonido pesado." },
    { id: '15', name: "Stiff Upper Lip", img: img15, video: "S2Z8WIlaPH4", year: 2000, info: "Blues rock clásico." },
    { id: '16', name: "Black Ice", img: img16, video: "FrFvNphZ5BQ", year: 2008, info: "Uno de los regresos más grandes." },
    { id: '17', name: "Rock or Bust", img: img17, video: "Si0khsu9f9Y", year: 2014, info: "Último con Malcolm Young." },
    { id: '18', name: "Power Up", img: img18, video: "54LEywabkl4", year: 2020, info: "Homenaje a Malcolm Young." },
];

const Albunes = () => {
    const [currentVideo, setCurrentVideo] = useState("pAgnJDJN4VA");
    const [activeAlbum, setActiveAlbum] = useState(null);
    const videoRef = useRef(null);

    const handleClick = (album) => {
        setCurrentVideo(album.video);
        setActiveAlbum(album);
        // Usamos requestAnimationFrame para asegurar que el scroll ocurra tras el render
        requestAnimationFrame(() => {
            videoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    };

    return (
        <div className={styles.container}>
            <AcdcNav active="albunes" />

            <header className={styles.header}>
                <h1>⚡ DISCOGRAFIA ⚡</h1>
                {activeAlbum && (
                    <p className={styles.nowPlaying}>🎧 Now playing: {activeAlbum.name}</p>
                )}
            </header>

            <div className={styles.stage}>
                {ALBUMS_DATA.map((album) => (
                    <div key={album.id} className={styles.vinyl} onClick={() => handleClick(album)}>
                        <div className={styles.vinylDisc}>
                            <img src={album.img} alt={album.name} loading="lazy" />
                        </div>
                        <p className={styles.albumName}>{album.name}</p>
                    </div>
                ))}

                <div className={styles.videoBox} ref={videoRef}>
                    <iframe
                        src={`https://www.youtube.com/embed/${currentVideo}`}
                        title="AC/DC Music Video"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            {activeAlbum && (
                <div className={styles.infoPanel}>
                    <div className={styles.infoBox}>
                        <img src={activeAlbum.img} alt={activeAlbum.name} />
                        <div className={styles.infoText}>
                            <h2>{activeAlbum.name}</h2>
                            <h4>📅 {activeAlbum.year}</h4>
                            <p>{activeAlbum.info}</p>
                        </div>
                    </div>
                </div>
            )}

            <footer className={styles.footer}>
                © {new Date().getFullYear()} AC/DC VINYL EXPERIENCE ⚡
            </footer>
        </div>
    );
};

export default Albunes;