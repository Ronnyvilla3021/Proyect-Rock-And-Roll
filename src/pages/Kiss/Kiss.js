import React, { useState, useEffect } from 'react';
import styles from './Kiss.module.css';
import { Link } from 'react-router-dom';

const Kiss = () => {
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kiss_-_Army_of_Darkness_Tour_2009.jpg/1200px-Kiss_-_Army_of_Darkness_Tour_2009.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/KISS_-_End_of_the_Road_2019.jpg/1200px-KISS_-_End_of_the_Road_2019.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kiss_-_Detroit_Rock_City_Tour_2012.jpg/1200px-Kiss_-_Detroit_Rock_City_Tour_2012.jpg",
    ];

    return (
        <div className={styles.kissPage}>
            <nav className={styles.kissNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss" className={`${styles.navItem} ${styles.kissActive}`}>KISS</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>KISS</h1>
                <p className={styles.tagline}>YOU WANTED THE BEST, YOU GOT THE BEST!</p>
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
                        <span className={styles.titleOutline}>KISS</span>
                        <span className={styles.titleMain}>EL EJÉRCITO MÁS GRANDE DEL ROCK</span>
                    </h2>
                    <p className={styles.rockText}>
                        Formados en <strong>Nueva York en 1973</strong> por <strong>Paul Stanley, Gene Simmons, Ace Frehley y Peter Criss</strong>, KISS revolucionaron el rock con sus icónicos maquillajes, sus espectaculares shows en vivo con fuego y su hard rock directo al corazón.
                    </p>
                    <p className={styles.rockText}>
                        Con himnos como <em>"Rock and Roll All Nite"</em>, <em>"Detroit Rock City"</em> y <em>"I Was Made for Lovin' You"</em>, construyeron uno de los fan-clubs más leales del planeta: el <strong>KISS Army</strong>.
                    </p>
                </section>
                <div className={styles.officialLink}>
                    <p className={styles.linkText}>VISITA SU PÁGINA OFICIAL</p>
                    <a href="https://www.kissonline.com/" target="_blank" rel="noreferrer" className={styles.ampButton}>
                        💋 ÚNETE AL KISS ARMY 💋
                    </a>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 💋 KISS 💋</p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>💋</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Kiss;