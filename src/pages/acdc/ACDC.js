import React, { useState, useEffect } from 'react';
import styles from './ACDC.module.css';
import { Link } from 'react-router-dom';
import img1 from "../../images/acdc/1.jpg";
import img2 from "../../images/acdc/2.jpg";
import img3 from "../../images/acdc/3.jpg";

const ACDC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);
    const totalSlides = 3;

    useEffect(() => {
        setIsAnimated(true);
        const timer = setTimeout(() => setIsAnimated(false), 1000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const images = [img1, img2, img3];

    return (
        <div className={styles.acdcPage}>
            {/* Efecto de rayos */}
            <div className={`${styles.lightning} ${styles.lightning1}`}></div>
            <div className={`${styles.lightning} ${styles.lightning2}`}></div>
            
            {/* Navbar con estilo rockero */}
            <nav className={styles.acdcNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={`${styles.navItem} ${styles.inicio}`}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/acdc" className={`${styles.navItem} ${styles.acdcActive}`}>AC/DC</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/historia" className={`${styles.navItem} ${styles.historia}`}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/albunes" className={`${styles.navItem} ${styles.albunes}`}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/grupo" className={`${styles.navItem} ${styles.grupo}`}>GRUPO</Link>
                </div>
            </nav>

            {/* Logo AC/DC animado */}
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>AC<span className={styles.logoSlash}>/</span>DC</h1>
                <p className={styles.tagline}>HIGH VOLTAGE ROCK 'N' ROLL</p>
            </div>

            {/* Carrusel con efecto de chispas */}
            <div className={styles.sliderContainer}>
                <div className={`${styles.sliderWrapper} ${isAnimated ? styles.slideAnimation : ''}`}>
                    <img 
                        className={styles.sliderItem} 
                        src={images[currentIndex]} 
                        alt={`Slide ${currentIndex + 1}`} 
                    />
                </div>
                <button className={styles.prevButton} onClick={prevSlide}>
                    <span className={styles.buttonIcon}>❮</span>
                </button>
                <button className={styles.nextButton} onClick={nextSlide}>
                    <span className={styles.buttonIcon}>❯</span>
                </button>
                <div className={styles.slideIndicator}>
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <span 
                            key={index} 
                            className={`${styles.indicatorDot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Contenido principal con efecto de letras de rock */}
            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>AC/DC</span>
                        <span className={styles.titleMain}>LA DESCARGA ELÉCTRICA DEL ROCK</span>
                    </h2>
                    <p className={styles.rockText}>
                        Desde los suburbios de Sídney hasta conquistar escenarios mundiales, <strong>AC/DC</strong> ha 
                        sido sinónimo de energía pura y rock sin filtros. Fundada en 1973 por los hermanos 
                        <strong> Angus y Malcolm Young</strong>, esta legendaria banda australiana electrificó el 
                        hard rock con riffs demoledores y actitud callejera.
                    </p>
                    <p className={styles.rockText}>
                        Con himnos como <em>"Back in Black"</em>, <em>"Highway to Hell"</em> y <em>"Thunderstruck"</em>, 
                        su sonido ha traspasado generaciones, consolidándolos como íconos del género. 
                        A pesar de los cambios y pérdidas, AC/DC sigue demostrando que el rock nunca muere... 
                        ¡solo se recarga!
                    </p>
                    <div className={styles.guitarRiff}></div>
                </section>

                {/* Enlace oficial con efecto de botón de amplificador */}
                <div className={styles.officialLink}>
                    <p className={styles.linkText}>VISITA SU PÁGINA OFICIAL</p>
                    <a 
                        href="https://www.acdc.com/home/" 
                        target="_blank" 
                        rel="noreferrer"
                        className={styles.ampButton}
                    >
                        ⚡ ENCIENDE EL ROCK ⚡
                    </a>
                </div>
            </div>

            {/* Footer con estilo de pedal de distorsión */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V ⚡ AC/DC ⚡</p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>⚡</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ACDC;