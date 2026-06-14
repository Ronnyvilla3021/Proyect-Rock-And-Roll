import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './BlackSabbathAlbunes.module.css';

import portada from '../../images/blacksabbath/portada.png';
import imgBlackSabbath from '../../images/blacksabbath/blacksabbath.jpg';
import imgParanoid from '../../images/blacksabbath/paranoid.jpg';
import imgMasterOfReality from '../../images/blacksabbath/masterofreality.jpg';
import imgVol4 from '../../images/blacksabbath/vol4.png';
import imgSabbathBloodySabbath from '../../images/blacksabbath/sabbathbloodysabbath.jpg';
import imgSabotage from '../../images/blacksabbath/sabotage.jpg';
import imgTechnicalEcstasy from '../../images/blacksabbath/technicalecstasy.jpg';
import imgNeverSayDie from '../../images/blacksabbath/neversaydie.jpg';
import imgHeavenAndHell from '../../images/blacksabbath/heavenandhell.jpg';
import imgMobRules from '../../images/blacksabbath/mobrules.jpg';
import imgBornAgain from '../../images/blacksabbath/bornagain.jpg';
import imgSeventhStar from '../../images/blacksabbath/seventhstar.jpg';
import imgTheEternalIdol from '../../images/blacksabbath/theeternalidol.jpg';
import imgHeadlessCross from '../../images/blacksabbath/headlesscross.jpeg';
import imgTyr from '../../images/blacksabbath/tyr.jpg';
import imgCrossPurposes from '../../images/blacksabbath/crosspurposes.jpg';
import imgForbidden from '../../images/blacksabbath/forbidden.jpg';
import img13 from '../../images/blacksabbath/13.jpg';
import imgEligeTuAlbum from '../../images/blacksabbath/eligetualbum.jpg';

const imgDehumanizer = portada;

const BlackSabbathAlbunes = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");
    const [selectedAlbum, setSelectedAlbum] = useState("ELIGE TU ÁLBUM");
    const [currentAngle, setCurrentAngle] = useState(0);

    const currentIndexRef = useRef(0);

    const albumVideos = {
        "Black Sabbath": "https://www.youtube.com/embed/0lVdMbUx1_k?si=ACFG8E3T9i6NRcXA",
        "Paranoid": "https://www.youtube.com/embed/0qanF-91aJo?si=aIOFyl3FLa4fneU2",
        "Master of Reality": "https://www.youtube.com/embed/ZOFQbTdzKNM?si=SvC7ha8Fg9kLDd1S",
        "Vol. 4": "https://www.youtube.com/embed/J8B4BdAs0h4?si=-owKfoQy-yi1H8DI",
        "Sabbath Bloody Sabbath": "https://www.youtube.com/embed/mfTpjrzas5E?si=RPqNsi8LtC0d9OdD",
        "Sabotage": "https://www.youtube.com/embed/fLOb4KVS-S8?si=G4C1qP9uwI3ln3tj",
        "Technical Ecstasy": "https://www.youtube.com/embed/Tr-puXiUMvE?si=0qxUB_UKhp-Ok_xG",
        "Never Say Die!": "https://www.youtube.com/embed/2Q6gPouusHs?si=0TTMpaNJEwMCTBfm",
        "Heaven and Hell": "https://www.youtube.com/embed/uWAhd4KkVUU?si=VmlZno_wXCZvP-zo",
        "Mob Rules": "https://www.youtube.com/embed/BTxSNosJrDo?si=UCAMdnLoNUXt5faM",
        "Born Again": "https://www.youtube.com/embed/czMNmGA0KY0?si=5dUKg6DWPRHszQu-",
        "Seventh Star": "https://www.youtube.com/embed/ard5Rvvhd1I?si=rHAso5RXT4inv6pS",
        "The Eternal Idol": "https://www.youtube.com/embed/-TEc_6ABc6Q?si=ZMF1ofjHoNCzkjCI",
        "Headless Cross": "https://www.youtube.com/embed/VwEWf3RXseg?si=5VbnkV1iuTABkLOT",
        "Tyr": "https://www.youtube.com/embed/kIcY_YhM2-Y?si=vvSwWp0o475oK4Br",
        "Dehumanizer": "https://www.youtube.com/embed/KdWnr_zxvnM?si=GuHGX9DMliaRXD-b",
        "Cross Purposes": "https://www.youtube.com/embed/SVPUFnpC-38?si=KzXAlxJI2isuNs51",
        "Forbidden": "https://www.youtube.com/embed/C2843yz65Yw?si=SL9JTefj7nz3IGoH",
        "13": "https://www.youtube.com/embed/hV2ideRjDIk?si=rpkJwGKq3t3wOaY7",
    };

    const albums = [
        { name: "Black Sabbath", year: "1970", label: "Vertigo / Warner", cover: imgBlackSabbath },
        { name: "Paranoid", year: "1970", label: "Vertigo / Warner", cover: imgParanoid },
        { name: "Master of Reality", year: "1971", label: "Vertigo / Warner", cover: imgMasterOfReality },
        { name: "Vol. 4", year: "1972", label: "Vertigo / Warner", cover: imgVol4 },
        { name: "Sabbath Bloody Sabbath", year: "1973", label: "WWA Records", cover: imgSabbathBloodySabbath },
        { name: "Sabotage", year: "1975", label: "NEMS", cover: imgSabotage },
        { name: "Technical Ecstasy", year: "1976", label: "Vertigo", cover: imgTechnicalEcstasy },
        { name: "Never Say Die!", year: "1978", label: "Vertigo", cover: imgNeverSayDie },
        { name: "Heaven and Hell", year: "1980", label: "Vertigo / Warner", cover: imgHeavenAndHell },
        { name: "Mob Rules", year: "1981", label: "Vertigo / Warner", cover: imgMobRules },
        { name: "Born Again", year: "1983", label: "Vertigo", cover: imgBornAgain },
        { name: "Seventh Star", year: "1986", label: "Vertigo", cover: imgSeventhStar },
        { name: "The Eternal Idol", year: "1987", label: "Vertigo", cover: imgTheEternalIdol },
        { name: "Headless Cross", year: "1989", label: "IRS", cover: imgHeadlessCross },
        { name: "Tyr", year: "1990", label: "IRS", cover: imgTyr },
        { name: "Dehumanizer", year: "1992", label: "IRS", cover: imgDehumanizer },
        { name: "Cross Purposes", year: "1994", label: "IRS", cover: imgCrossPurposes },
        { name: "Forbidden", year: "1995", label: "IRS", cover: imgForbidden },
        { name: "13", year: "2013", label: "Universal", cover: img13 },
    ];

    const introTomb = {
        name: "ELIGE TU ÁLBUM",
        year: "CLICK",
        cover: imgEligeTuAlbum
    };

    const allAlbums = [introTomb, ...albums];

    const handleAlbumClick = (name, index) => {
        if (showModal) return;

        const count = allAlbums.length;
        let diff = index - currentIndexRef.current;

        if (diff > count / 2) diff -= count;
        if (diff < -count / 2) diff += count;

        const newAngle = currentAngle - (diff * (360 / count));

        currentIndexRef.current = index;
        setSelectedAlbum(name);
        setCurrentAngle(newAngle);
    };

    const handleOpenVideo = () => {
        if (selectedAlbum !== "ELIGE TU ÁLBUM" && albumVideos[selectedAlbum]) {
            setCurrentVideo(albumVideos[selectedAlbum]);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentVideo("");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
    const firstIndex = allAlbums.findIndex(album => album.name === "ELIGE TU ÁLBUM");
    currentIndexRef.current = firstIndex !== -1 ? firstIndex : 0;
    setCurrentAngle(-(currentIndexRef.current / allAlbums.length) * 360);
}, []);

    return (
        <div className={styles.sabbathPage} style={{ '--bg-image': `url(${portada})` }}>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.fog}></div>

            <div className={`${styles.spotlight} ${styles.spotlight1}`}></div>
            <div className={`${styles.spotlight} ${styles.spotlight2}`}></div>
            <div className={`${styles.spotlight} ${styles.spotlight3}`}></div>

            <div className={styles.particles}>
                {[...Array(45)].map((_, i) => (
                    <span
                        key={i}
                        className={styles.particle}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${8 + Math.random() * 6}s`
                        }}
                    />
                ))}
            </div>

            <nav className={styles.sabbathNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath" className={styles.navItem}>BLACK SABBATH</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/albunes" className={`${styles.navItem} ${styles.sabbathActive}`}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}> ÁLBUMES </h1>
                <div className={styles.guitarRiff}></div>
            </header>

            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>📀 DISCOGRAFÍA COMPLETA 📀</h2>

                <div className={styles.stage}>
                    <div
                        className={styles.carousel3d}
                        style={{
                            transform: `rotateY(${currentAngle}deg)`
                        }}
                    >
                        {allAlbums.map((album, index) => {
                            const isActive = selectedAlbum === album.name;
                            return (
                                <div
                                    key={album.name}
                                    className={`${styles.tombStone3d} ${isActive ? styles.activeTomb : ''}`}
                                    style={{
                                        transform: `
                                            rotateY(${(index / allAlbums.length) * 360}deg)
                                            translateZ(${isActive ? '720px' : '600px'})
                                        `
                                    }}
                                    onClick={() => handleAlbumClick(album.name, index)}
                                >
                                    <div
                                        className={styles.tombImage}
                                        style={{ backgroundImage: `url(${album.cover})` }}
                                    />
                                    <div className={styles.tombShade}></div>
                                    <div className={styles.tombText}>
                                        <h3 className={styles.tombTitle}>{album.name}</h3>
                                        <p className={styles.tombYear}>{album.year}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.actionArea}>
                    {selectedAlbum !== "ELIGE TU ÁLBUM" && (
                        <button className={styles.videoLaunchBtn} onClick={handleOpenVideo}>
                            📺 MIRA EL VIDEO OFICIAL DE: <span>{selectedAlbum.toUpperCase()}</span>
                        </button>
                    )}
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} R.A.V.V 🦇 BLACK SABBATH 🦇
                    </p>
                </div>
            </footer>

            {showModal && (
                <div className={styles.videoModal}>
                    <button className={styles.closeBtn} onClick={handleCloseModal}>✕</button>
                    <div className={styles.videoBox}>
                        <iframe
                            src={currentVideo}
                            title={selectedAlbum}
                            allowFullScreen
                            className={styles.modalVideo}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                        <h2>{selectedAlbum}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlackSabbathAlbunes;