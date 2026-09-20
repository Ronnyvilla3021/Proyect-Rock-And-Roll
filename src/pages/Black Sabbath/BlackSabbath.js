import React, { useMemo } from 'react';
import styles from './BlackSabbath.module.css';
import BlackSabbathNav from '../../components/nav/BlackSabbathNav';
import portada from '../../images/blacksabbath/portada.png';

const BlackSabbath = () => {
    // Generamos las partículas una sola vez para mejorar el rendimiento
    const particles = useMemo(() => [...Array(40)], []);

    return (
        <div
            className={styles.sabbathPage}
            style={{ '--bg-image': `url(${portada})` }}
        >
            {/* EFECTOS AMBIENTALES */}
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.fog}></div>
            <div className={`${styles.spotlight} ${styles.spotlight1}`}></div>
            <div className={`${styles.spotlight} ${styles.spotlight2}`}></div>
            <div className={`${styles.spotlight} ${styles.spotlight3}`}></div>

            <div className={styles.particles}>
                {particles.map((_, i) => (
                    <span
                        key={i}
                        className={styles.particle}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${8 + Math.random() * 8}s`
                        }}
                    />
                ))}
            </div>

            <BlackSabbathNav active="blacksabbath" />

            {/* HERO */}
            <section className={styles.concertHero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.concertTitle}>
                        BLACK <span>SABBATH</span>
                    </h1>
                    <p className={styles.concertSubtitle}>THE GODFATHERS OF HEAVY METAL</p>
                </div>
                <div className={styles.stage}></div>
            </section>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} R.A.V.V 🦇 BLACK SABBATH 🦇
                    </p>
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
