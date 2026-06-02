import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Kiss.module.css';

const KissGrupo = () => {
    const currentMembers = [
        { name: "Paul Stanley", role: "Voz, Guitarra — El Hombre Estrella", years: "1973–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Paul_Stanley_2010.jpg/440px-Paul_Stanley_2010.jpg" },
        { name: "Gene Simmons", role: "Bajo, Voz — El Demonio", years: "1973–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gene_Simmons_2012.jpg/440px-Gene_Simmons_2012.jpg" },
        { name: "Tommy Thayer", role: "Guitarra — El Spaceman", years: "2002–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Tommy_Thayer_2012.jpg/440px-Tommy_Thayer_2012.jpg" },
        { name: "Eric Singer", role: "Batería — El Gato", years: "1991–1994, 1996–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Eric_Singer.jpg/440px-Eric_Singer.jpg" },
    ];

    const pastMembers = [
        { name: "Ace Frehley", role: "Guitarra — El Spaceman (1973–1982, 1996–2002)" },
        { name: "Peter Criss", role: "Batería — El Gato (1973–1980, 1996–2004)" },
        { name: "Vinnie Vincent", role: "Guitarra (1982–1984)" },
        { name: "Mark St. John", role: "Guitarra (1984)" },
        { name: "Bruce Kulick", role: "Guitarra (1984–1996)" },
        { name: "Eric Carr †", role: "Batería (1980–1991) — Fallecido en 1991" },
    ];

    return (
        <div className={styles.kissPage}>
            <nav className={styles.kissNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss" className={styles.navItem}>KISS</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss/grupo" className={`${styles.navItem} ${styles.kissActive}`}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>GRUPO</h1>
                <p className={styles.tagline}>LOS GUERREROS DEL ROCK</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>BAND</span>
                        <span className={styles.titleMain}>💋 MIEMBROS ACTUALES 💋</span>
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

export default KissGrupo;