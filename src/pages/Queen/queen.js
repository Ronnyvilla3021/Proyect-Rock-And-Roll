import React, { useState, useEffect } from 'react';
import styles from './queen.module.css';
import QueenNav from '../../components/nav/QueenNav';

/* IMPORTACIÓN DE IMÁGENES */
import portada1 from '../../images/queen/portada.jpg';
import portada2 from '../../images/queen/portada2.jpg';
import portada3 from '../../images/queen/portada3.jpg';

const CAROUSEL_IMAGES = [portada1, portada2, portada3];

const Queen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.queenPage}>
            <QueenNav active="queen" />

            {/* LOGOTIPO Y CABECERA */}
            <div className={styles.logoContainer}>
                <div className={styles.crownWrapper}>
                    <div className={styles.crown}></div>
                </div>
                <h1 className={styles.logo}>QUEEN</h1>
                <span className={styles.logoSub}>WE ARE THE CHAMPIONS</span>
                <p className={styles.tagline}>THE GREATEST ROCK BAND OF ALL TIME</p>
            </div>

            {/* CARRUSEL DE IMÁGENES (STAGE DISPLAY) */}
            <div className={styles.stageDisplayContainer}>
                <div className={styles.stageDisplay}>
                    {CAROUSEL_IMAGES.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.stageSlide} ${index === currentIndex ? styles.stageActive : ''}`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                    <div className={styles.stageOverlay}></div>
                </div>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className={styles.content}>
                <div className={styles.officialLink}>
                    <p className={styles.linkText}>VISITA SU PÁGINA OFICIAL</p>
                    <a 
                        href="https://www.queenonline.com/es" 
                        target="_blank" 
                        rel="noreferrer" 
                        className={styles.ampButton}
                    >
                        👑 ENTRA AL REINO DE QUEEN 👑
                    </a>
                </div>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>QUEEN</span>
                        <span className={styles.titleMain}>👑 LOS REYES DEL ROCK 👑</span>
                    </h2>
                    <p className={styles.rockText}>
                        Formados en <strong>Londres en 1970</strong>, <strong>Queen</strong> es una de las bandas más icónicas e influyentes de la historia de la música. <strong>Freddie Mercury, Brian May, Roger Taylor y John Deacon</strong> crearon un sonido único que fusionó rock, ópera, pop y glam rock de forma magistral.
                    </p>
                    <p className={styles.rockText}>
                        Con himnos eternos como <em>"Bohemian Rhapsody"</em>, <em>"We Will Rock You"</em>, <em>"We Are the Champions"</em> y <em>"Don't Stop Me Now"</em>, Queen conquistó el mundo entero. Su actuación en <strong>Live Aid 1985</strong> es considerada la mejor actuación en vivo de la historia del rock.
                    </p>
                </section>
            </div>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 👑 QUEEN 👑</p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>👑</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Queen;
