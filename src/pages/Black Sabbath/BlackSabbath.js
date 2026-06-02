import React, { useState, useEffect } from 'react';
import styles from './BlackSabbath.module.css';
import { Link } from 'react-router-dom';

const BlackSabbath = () => {
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Black_Sabbath_-_The_End_Tour_2016.jpg/1200px-Black_Sabbath_-_The_End_Tour_2016.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Black_Sabbath_2013.jpg/1200px-Black_Sabbath_2013.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Black_Sabbath_in_1973.jpg/1200px-Black_Sabbath_in_1973.jpg",
    ];

    return (
        <div className={styles.sabbathPage}>
            <nav className={styles.sabbathNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath" className={`${styles.navItem} ${styles.sabbathActive}`}>BLACK SABBATH</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>BLACK<span className={styles.logoSub}>SABBATH</span></h1>
                <p className={styles.tagline}>THE GODFATHERS OF HEAVY METAL</p>
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
                        <span className={styles.titleOutline}>SABBATH</span>
                        <span className={styles.titleMain}>🦇 LOS PADRINOS DEL HEAVY METAL</span>
                    </h2>
                    <p className={styles.rockText}>
                        Formados en 1968 en Birmingham, Inglaterra, <strong>Black Sabbath</strong> inventaron el heavy metal. <strong>Ozzy Osbourne, Tony Iommi, Geezer Butler y Bill Ward</strong> crearon un sonido oscuro, pesado y amenazante que nunca había existido antes, cambiando la música para siempre.
                    </p>
                    <p className={styles.rockText}>
                        Con álbumes icónicos como <em>"Black Sabbath"</em>, <em>"Paranoid"</em> y <em>"Master of Reality"</em>, establecieron las bases del heavy metal, el doom metal y el stoner rock. Su influencia es incalculable: prácticamente todo el rock pesado moderno les debe su existencia.
                    </p>
                </section>
                <div className={styles.officialLink}>
                    <p className={styles.linkText}>VISITA SU PÁGINA OFICIAL</p>
                    <a href="https://www.blacksabbath.com/" target="_blank" rel="noreferrer" className={styles.ampButton}>
                        🦇 ENTRA AL SABBATH 🦇
                    </a>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 🦇 BLACK SABBATH 🦇</p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>🦇</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlackSabbath;