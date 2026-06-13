import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './queenAlbunes.module.css';

// 1. Importación de las portadas locales desde src/images/queen
import imgQueenI from '../../images/queen/queen.jpg';
import imgQueenII from '../../images/queen/queenii.jpg';
import imgSheer from '../../images/queen/sheerheartattack.png';
import imgOpera from '../../images/queen/anightattheopera.jpg';
import imgRaces from '../../images/queen/adayattheraces.jpg';
import imgNews from '../../images/queen/newsoftheworld.jpg';
import imgJazz from '../../images/queen/jazz.jpg';
import imgTheGame from '../../images/queen/thegame.jpg';
import imgFlash from '../../images/queen/flashgordon.png';
import imgHotSpace from '../../images/queen/hotspotspace.jpg'; // Coincide con tu CSS
import imgTheWorks from '../../images/queen/theworks.jpg';
import imgMagic from '../../images/queen/akindofmagic.jpg';
import imgMiracle from '../../images/queen/themiracle.png';
import imgInnuendo from '../../images/queen/innuendo.png';
import imgHeaven from '../../images/queen/madeinheaven.jpg';

// 2. Estructura de datos limpia con IDs de YouTube e imágenes vinculadas
const queenAlbumsData = [
    { title: "Queen", year: 1973, img: imgQueenI, videoId: "jyjX03h3bAU", discografica: "EMI / Elektra" },
    { title: "Queen II", year: 1974, img: imgQueenII, videoId: "0e4Odk-v3oU", discografica: "EMI / Elektra" },
    { title: "Sheer Heart Attack", year: 1974, img: imgSheer, videoId: "2ZBtPf7FOoM", discografica: "EMI / Elektra" },
    { title: "A Night at the Opera", year: 1975, img: imgOpera, videoId: "fJ9rUzIMcZQ", discografica: "EMI / Elektra" },
    { title: "A Day at the Races", year: 1976, img: imgRaces, videoId: "kijpcUv-b8M", discografica: "EMI / Elektra" },
    { title: "News of the World", year: 1977, img: imgNews, videoId: "-tJYN-eG1zk", discografica: "EMI / Elektra" },
    { title: "Jazz", year: 1978, img: imgJazz, videoId: "HgzGwKwLmgM", discografica: "EMI / Elektra" },
    { title: "The Game", year: 1980, img: imgTheGame, videoId: "eqyUAtzS_6M", discografica: "EMI / Elektra" },
    { title: "Flash Gordon", year: 1980, img: imgFlash, videoId: "LfmrHTdXgK4", discografica: "EMI / Elektra" },
    { title: "Hot Space", year: 1982, img: imgHotSpace, videoId: "a01QQZyl-_I" , discografica: "EMI / Elektra"},
    { title: "The Works", year: 1984, img: imgTheWorks, videoId: "azdwsXLmrHE", discografica: "EMI / Capitol" },
    { title: "A Kind of Magic", year: 1986, img: imgMagic, videoId: "_Jtpf8N5IDE", discografica: "EMI / Capitol" },
{ title: "The Miracle", year: 1989, img: imgMiracle, videoId: "hFDcoX7s6rE", discografica: "Parlophone / Capitol" },
    { title: "Innuendo", year: 1991, img: imgInnuendo, videoId: "t99KH0TR-J4", discografica: "Parlophone / Hollywood" },
    { title: "Made in Heaven", year: 1995, img: imgHeaven, videoId: "yI8lrvKLzg0", discografica: "Parlophone / Hollywood" }
];

const QueenAlbunes = () => {
    // Iniciamos con el primer álbum de la lista de forma predeterminada
    const [selectedAlbum, setSelectedAlbum] = useState(queenAlbumsData[0]);

    return (
        <div className={styles.queenPage}>
            {/* Navegación Superior */}
            <nav className={styles.queenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen" className={styles.navItem}>QUEEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/albunes" className={`${styles.navItem} ${styles.queenActive}`}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            {/* Encabezado de la página */}
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>DISCOGRAFÍA</h1>
                <p className={styles.tagline}>REPRODUCTOR MULTIMEDIA</p>
            </div>

            <div className={styles.content}>
                
                {/* --- SLIDER DE CORONAS --- */}
                <div className={styles.crownSelectorContainer}>
                    <div className={styles.crownSelector}>
                        {queenAlbumsData.map((album) => (
                            <div 
                                key={album.title}
                                className={`${styles.crownWrapper} ${selectedAlbum.title === album.title ? styles.activeCrownWrapper : ''}`}
                                onClick={() => setSelectedAlbum(album)}
                            >
                                <span className={styles.crownIcon}>👑</span>
                                <div className={styles.crownLabel}>
                                    <span className={styles.crownYear}>{album.year}</span>
                                    <span className={styles.crownName}>{album.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- ESTRUCTURA DEL LIBRO ABIERTO --- */}
                <div className={styles.bookWrapper}>
                    <div className={styles.mainBook}>
                        
                        {/* PÁGINA IZQUIERDA: Estructura Vertical de Información */}
                        <div className={styles.bookLeftPage}>
                            <div className={styles.leftContentLayout}>
                                <div className={styles.coverWrapper}>
                                    <img 
                                        src={selectedAlbum.img} 
                                        alt={`Portada de ${selectedAlbum.title}`} 
                                        className={styles.bookCoverImg} 
                                    />
                                </div>
                                <div className={styles.infoBlock}>
                                    <h2 className={styles.bookAlbumTitle}>{selectedAlbum.title}</h2>
                                    <div className={styles.bookDivider}></div>
                                    <p className={styles.bookAlbumInfo}>
                                        Año: <strong>{selectedAlbum.year}</strong><br />
                                        Discográfica: <strong>{selectedAlbum.discografica}</strong>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.pageShadowLeft}></div>
                        </div>

                        {/* PÁGINA DERECHA: Gran Pantalla Horizontal para el Video */}
                        <div className={styles.bookRightPage}>
                            <div className={styles.pageShadowRight}></div>
                            <div className={styles.videoBlockFull}>
                                <div className={styles.embeddedVideoContainer}>
                                    <iframe
                                        className={styles.embeddedVideo}
                                        src={`https://www.youtube.com/embed/${selectedAlbum.videoId}?rel=0&autoplay=0`}
                                        title={`Video de ${selectedAlbum.title}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 👑 QUEEN 👑</p>
                </div>
            </footer>
        </div>
    );
};

export default QueenAlbunes;