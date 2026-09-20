import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ACDC.module.css';
import AcdcNav from '../../components/nav/AcdcNav';

import img1 from "../../images/acdc/1.jpg";
import img2 from "../../images/acdc/2.jpg";
import img3 from "../../images/acdc/3.jpg";
import img4 from "../../images/acdc/4.jpg";
import img5 from "../../images/acdc/5.jpg";
import img6 from "../../images/acdc/6.jpg";

const SLIDER_IMAGES = [img1, img2, img3];

const ACDC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
        setProgress(0);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? SLIDER_IMAGES.length - 1 : prev - 1));
        setProgress(0);
    }, []);

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
    }, [nextSlide]);

    return (
        <div className={styles.page}>
            <div className={styles.lightning}></div>
            <div className={styles.lightning2}></div>

            <AcdcNav active="acdc" />

            <header className={styles.hero}>
                <h1 className={styles.logo}>⚡AC<span>/</span>DC⚡</h1>
                <p className={styles.tagline}>HIGH VOLTAGE ROCK EXPERIENCE</p>
                <span className={styles.year}>SINCE 1973</span>
            </header>

            <section className={styles.sliderSection}>
                <div className={styles.slider}>
                    <img src={SLIDER_IMAGES[currentIndex]} className={styles.image} alt="AC/DC Gallery" />
                    <div className={styles.controls}>
                        <button onClick={prevSlide} aria-label="Anterior">❮</button>
                        <button onClick={nextSlide} aria-label="Siguiente">❯</button>
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
                    <img src={img4} alt="Back in Black" loading="lazy" />
                    <div className={styles.hoverInfo}>
                        <h3>Back in Black</h3>
                        <p>1980 - Álbum legendario del rock</p>
                    </div>
                </div>
                <div className={styles.hoverCard}>
                    <img src={img5} alt="Angus Young" loading="lazy" />
                    <div className={styles.hoverInfo}>
                        <h3>Angus Young</h3>
                        <p>Guitarra</p>
                    </div>
                </div>
                <div className={styles.hoverCard}>
                    <img src={img6} alt="Brian Johnson" loading="lazy" />
                    <div className={styles.hoverInfo}>
                        <h3>Brian Johnson</h3>
                        <p>Entró en 1980 tras Bon Scott</p>
                    </div>
                </div>
            </section>

            <div className={styles.officialSection}>
                <p className={styles.officialText}>VISITA LA PÁGINA OFICIAL DE LA BANDA</p>
                <a
                    href="https://www.acdc.com"
                    target="_blank"
                    rel="noreferrer noopener"
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
