import React, { useState, useEffect, useRef } from 'react';
import styles from './ACDC.module.css';
import { Link } from 'react-router-dom';

import img1 from "../../images/acdc/1.jpg";
import img2 from "../../images/acdc/2.jpg";
import img3 from "../../images/acdc/3.jpg";
import img4 from "../../images/acdc/4.jpg";
import img5 from "../../images/acdc/5.jpg";
import img6 from "../../images/acdc/6.jpg";

const ACDC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const images = [img1, img2, img3];
    const totalSlides = images.length;
    const intervalRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
        setProgress(0);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setProgress((old) => {
                if (old >= 100) {
                    nextSlide();
                    return 0;
                }
                return old + 2;
            });
        }, 80);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.lightning}></div>
            <div className={styles.lightning2}></div>

            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>INICIO</Link>
                <Link to="/acdc" className={`${styles.link} ${styles.active}`}>AC/DC</Link>
                <Link to="/acdc/historia" className={styles.link}>HISTORIA</Link>
                <Link to="/acdc/albunes" className={styles.link}>ÁLBUMES</Link>
                <Link to="/acdc/grupo" className={styles.link}>GRUPO</Link>
            </nav>

            <header className={styles.hero}>
                <h1 className={styles.logo}>⚡AC<span>/</span>DC⚡</h1>
                <p className={styles.tagline}>HIGH VOLTAGE ROCK EXPERIENCE</p>
                <span className={styles.year}>SINCE 1973</span>
            </header>

            <section className={styles.sliderSection}>
                <div className={styles.slider}>
                    <img src={images[currentIndex]} className={styles.image} alt="acdc" />
                    <div className={styles.controls}>
                        <button onClick={prevSlide}>❮</button>
                        <button onClick={nextSlide}>❯</button>
                    </div>
                    <div className={styles.progressBar}>
                        <div style={{ width: `${progress}%` }} />
                    </div>
                </div>
            </section>

            <section className={styles.info}>
                <h2>LA DESCARGA ELÉCTRICA DEL ROCK</h2>
                <p>AC/DC es pura energía sin filtro. Riffs pesados, actitud callejera y una identidad visual marcada por el rayo y la potencia del hard rock.</p>
                <p>Desde Australia al mundo, su sonido es una explosión constante de electricidad musical.</p>
            </section>

            <section className={styles.cardsGrid}>
                <div className={styles.hoverCard}>
                    <img src={img4} alt="album" />
                    <div className={styles.hoverInfo}>
                        <h3>Back in Black</h3>
                        <p>1980 - Álbum legendario del rock</p>
                    </div>
                </div>
                <div className={styles.hoverCard}>
                    <img src={img5} alt="member" />
                    <div className={styles.hoverInfo}>
                        <h3>Angus Young</h3>
                        <p>Guitarra</p>
                    </div>
                </div>
                <div className={styles.hoverCard}>
                    <img src={img6} alt="member" />
                    <div className={styles.hoverInfo}>
                        <h3>Brian Johnson</h3>
                        <p>Entró en 1980 tras Bon Scott</p>
                    </div>
                </div>
            </section>

            {/* OFFICIAL BUTTON */}
<div className={styles.officialSection}>
    <p className={styles.officialText}>
        VISITA LA PÁGINA OFICIAL DE LA BANDA
    </p>

    <a
        href="https://www.acdc.com"
        target="_blank"
        rel="noreferrer"
        className={styles.officialButton}
    >
        ⚡ ENTRAR A AC/DC ⚡
    </a>
</div>

            <footer className={styles.footer}>
                © {new Date().getFullYear()} AC/DC EXPERIENCE
            </footer>
        </div>
    );
};

export default ACDC;