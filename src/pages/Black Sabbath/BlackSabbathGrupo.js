import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlackSabbath.module.css';

const BlackSabbathGrupo = () => {
    const currentMembers = [
        { name: "Tony Iommi", role: "Guitarra", years: "1968–2017", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tony_Iommi_2012.jpg/440px-Tony_Iommi_2012.jpg" },
        { name: "Geezer Butler", role: "Bajo, Letras", years: "1968–2017", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Geezer_Butler_2012.jpg/440px-Geezer_Butler_2012.jpg" },
        { name: "Ozzy Osbourne", role: "Vocalista", years: "1968–1979, 1997–2017", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ozzy_Osbourne_2019.jpg/440px-Ozzy_Osbourne_2019.jpg" },
        { name: "Bill Ward", role: "Batería", years: "1968–1980, 1983, 1992, 1994–1995, 1997–2012", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Bill_Ward_2009.jpg/440px-Bill_Ward_2009.jpg" },
    ];

    const pastMembers = [
        { name: "Ronnie James Dio †", role: "Vocalista (1979–1982, 1991–1992)", note: "Fallecido en 2010" },
        { name: "Ian Gillan", role: "Vocalista (1983)" },
        { name: "Glenn Hughes", role: "Vocalista (1985–1986)" },
        { name: "Ray Gillen", role: "Vocalista (1986–1987)" },
        { name: "Tony Martin", role: "Vocalista (1987–1991, 1993–1996)" },
        { name: "Vinny Appice", role: "Batería (1980–1982, 1991–1992)" },
        { name: "Eric Singer", role: "Batería (1987–1988)" },
        { name: "Cozy Powell †", role: "Batería (1988–1991, 1994–1995)", note: "Fallecido en 1998" },
        { name: "Tommy Clufetos", role: "Batería (2012–2017)" },
    ];

    return (
        <div className={styles.sabbathPage}>
            <nav className={styles.sabbathNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath" className={styles.navItem}>BLACK SABBATH</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/grupo" className={`${styles.navItem} ${styles.sabbathActive}`}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>GRUPO</h1>
                <p className={styles.tagline}>LOS FUNDADORES DEL METAL OSCURO</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>BAND</span>
                        <span className={styles.titleMain}>🦇 FORMACIÓN CLÁSICA 🦇</span>
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
                        <span className={styles.titleMain}>⚡ MIEMBROS ANTERIORES ⚡</span>
                    </h2>
                    <div className={styles.pastMembersList}>
                        {pastMembers.map((m) => (
                            <div key={m.name} className={styles.pastMemberItem}>
                                <span className={styles.pastMemberName}>{m.name}</span>
                                <span className={styles.pastMemberRole}>{m.role}</span>
                                {m.note && <span className={styles.pastMemberNote}>{m.note}</span>}
                            </div>
                        ))}
                    </div>
                </section>
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

export default BlackSabbathGrupo;