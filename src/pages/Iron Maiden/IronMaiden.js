import React, { useState, useEffect } from 'react';
import styles from './IronMaiden.module.css';
import { Link } from 'react-router-dom';

const IronMaiden = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);
    const totalSlides = 3;

    useEffect(() => {
        setIsAnimated(true);
        const timer = setTimeout(() => setIsAnimated(false), 1000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    const nextSlide = () => setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Iron_Maiden_-_Ullevi_2011.jpg/1200px-Iron_Maiden_-_Ullevi_2011.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Iron_Maiden_-_Ozzfest_2005.jpg/1200px-Iron_Maiden_-_Ozzfest_2005.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Iron_Maiden_-_Donington_2007.jpg/1200px-Iron_Maiden_-_Donington_2007.jpg",
    ];

    return (
        <div className={styles.maidenPage}>
            <nav className={styles.maidenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden" className={`${styles.navItem} ${styles.maidenActive}`}>IRON MAIDEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>IRON<span className={styles.logoSub}>MAIDEN</span></h1>
                <p className={styles.tagline}>UP THE IRONS! — EDDIE LIVES!</p>
            </div>

            <div className={styles.sliderContainer}>
                <div className={`${styles.sliderWrapper} ${isAnimated ? styles.slideAnimation : ''}`}>
                    <img className={styles.sliderItem} src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                </div>
                <button className={styles.prevButton} onClick={prevSlide}><span>❮</span></button>
                <button className={styles.nextButton} onClick={nextSlide}><span>❯</span></button>
                <div className={styles.slideIndicator}>
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <span key={i} className={`${styles.indicatorDot} ${i === currentIndex ? styles.activeDot : ''}`} onClick={() => setCurrentIndex(i)} />
                    ))}
                </div>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>MAIDEN</span>
                        <span className={styles.titleMain}>⚔️ LOS REYES DEL HEAVY METAL BRITÁNICO</span>
                    </h2>
                    <p className={styles.rockText}>
                        Fundada en 1975 en Leyton, Londres, por el bajista <strong>Steve Harris</strong>, <strong>Iron Maiden</strong> es considerada una de las bandas más influyentes de la historia del heavy metal. Con su mascota <em>Eddie</em> y su sonido épico e instrumental, conquistaron el mundo entero.
                    </p>
                    <p className={styles.rockText}>
                        Álbumes como <em>"The Number of the Beast"</em>, <em>"Piece of Mind"</em> y <em>"Powerslave"</em> son obras maestras del género. Con más de 100 millones de discos vendidos y décadas de giras legendarias, Iron Maiden sigue siendo una fuerza imparable.
                    </p>
                </section>
                <div className={styles.officialLink}>
                    <p className={styles.linkText}>VISITA SU PÁGINA OFICIAL</p>
                    <a href="https://www.ironmaiden.com/" target="_blank" rel="noreferrer" className={styles.ampButton}>
                        ⚔️ UP THE IRONS ⚔️
                    </a>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 🔥 IRON MAIDEN 🔥</p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>⚔️</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default IronMaiden;