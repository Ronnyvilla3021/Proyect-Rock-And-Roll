import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IronMaiden.module.css';

const IronMaidenGrupo = () => {
    const currentMembers = [
        { name: "Bruce Dickinson", role: "Vocalista", years: "1981–1993, 1999–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bruce_Dickinson_-_Iron_Maiden_-_2011.jpg/440px-Bruce_Dickinson_-_Iron_Maiden_-_2011.jpg" },
        { name: "Steve Harris", role: "Bajo, Coros", years: "1975–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Steve_Harris_-_Iron_Maiden_-_2011.jpg/440px-Steve_Harris_-_Iron_Maiden_-_2011.jpg" },
        { name: "Dave Murray", role: "Guitarra", years: "1976–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dave_Murray_-_Iron_Maiden_-_2011.jpg/440px-Dave_Murray_-_Iron_Maiden_-_2011.jpg" },
        { name: "Adrian Smith", role: "Guitarra, Coros", years: "1980–1990, 1999–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Adrian_Smith_-_Iron_Maiden_-_2011.jpg/440px-Adrian_Smith_-_Iron_Maiden_-_2011.jpg" },
        { name: "Janick Gers", role: "Guitarra", years: "1990–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Janick_Gers_-_Iron_Maiden_-_2011.jpg/440px-Janick_Gers_-_Iron_Maiden_-_2011.jpg" },
        { name: "Nicko McBrain", role: "Batería", years: "1982–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nicko_McBrain_-_Iron_Maiden_-_2011.jpg/440px-Nicko_McBrain_-_Iron_Maiden_-_2011.jpg" },
    ];

    const pastMembers = [
        { name: "Paul Di'Anno", role: "Vocalista (1978–1981)" },
        { name: "Blaze Bayley", role: "Vocalista (1994–1999)" },
        { name: "Dennis Stratton", role: "Guitarra (1979–1980)" },
        { name: "Tony Parsons", role: "Guitarra (1979)" },
        { name: "Clive Burr †", role: "Batería (1979–1982) — Fallecido en 2013" },
        { name: "Doug Sampson", role: "Batería (1977–1979)" },
        { name: "Terry Wapram", role: "Guitarra (1976–1977)" },
        { name: "Bob Sawyer", role: "Guitarra (1976)" },
    ];

    return (
        <div className={styles.maidenPage}>
            <nav className={styles.maidenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden" className={styles.navItem}>IRON MAIDEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden/grupo" className={`${styles.navItem} ${styles.maidenActive}`}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>GRUPO</h1>
                <p className={styles.tagline}>LOS GUERREROS DE EDDIE</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>BAND</span>
                        <span className={styles.titleMain}>⚔️ MIEMBROS ACTUALES ⚔️</span>
                    </h2>
                    <div className={styles.membersGrid}>
                        {currentMembers.map((m) => (
                            <div key={m.name} className={styles.memberCard}>
                                <img src={m.img} alt={m.name} className={styles.memberImg} />
                                <h3 className={styles.memberName}>{m.name}</h3>
                                <p className={styles.memberRole}>{m.role}</p>
                                <p className={styles.memberYears}>{m.years}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>PAST</span>
                        <span className={styles.titleMain}>🔥 MIEMBROS ANTERIORES 🔥</span>
                    </h2>
                    <div className={styles.pastMembersList}>
                        {pastMembers.map((m) => (
                            <div key={m.name} className={styles.pastMemberItem}>
                                <span className={styles.pastMemberName}>{m.name}</span>
                                <span className={styles.pastMemberRole}>{m.role}</span>
                            </div>
                        ))}
                    </div>
                </section>
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

export default IronMaidenGrupo;