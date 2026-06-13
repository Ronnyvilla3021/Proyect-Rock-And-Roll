import React, { useState, useEffect } from 'react';
import styles from './queen.module.css';
import { Link } from 'react-router-dom';

// Importación de tus imágenes locales desde la carpeta images/queen
import portada1 from '../../images/queen/portada.jpg';
import portada2 from '../../images/queen/portada2.jpg';
import portada3 from '../../images/queen/portada3.jpg';

const Queen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [portada1, portada2, portada3];

    useEffect(() => {
        // Transición automática cada 5 segundos (sincronizada con el CSS)
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className={styles.queenPage}>
            <nav className={styles.queenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen" className={`${styles.navItem} ${styles.queenActive}`}>QUEEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                {/* Corona de CSS Puro Integrada */}
                <div className={styles.crownWrapper}>
                    <div className={styles.crown}></div>
                </div>

                <h1 className={styles.logo}>QUEEN</h1>
                <span className={styles.logoSub}>WE ARE THE CHAMPIONS</span>
                <p className={styles.tagline}>THE GREATEST ROCK BAND OF ALL TIME</p>
            </div>

            {/* PANTALLA TIPO ESCENARIO (Slideshow Automatizado con Zoom y Desvanecimiento) */}
            <div className={styles.stageDisplayContainer}>
                <div className={styles.stageDisplay}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.stageSlide} ${
                                index === currentIndex ? styles.stageActive : ''
                            }`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                    {/* Capa de atmósfera para simular iluminación de concierto */}
                    <div className={styles.stageOverlay}></div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.officialLink}>
                    <p className={styles.linkText}>VISITA SU PÁGINA OFICIAL</p>
                    <a href="https://www.queenonline.com/es" target="_blank" rel="noreferrer" className={styles.ampButton}>
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