import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OZZY.module.css';

const OzzyGrupo = () => {
    const currentMembers = [
        { name: "Ozzy Osbourne", role: "Vocalista", years: "1979–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ozzy_Osbourne_2019.jpg/440px-Ozzy_Osbourne_2019.jpg" },
        { name: "Zakk Wylde", role: "Guitarra", years: "1987–1995, 2001–2009, 2017–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Zakk_Wylde_-_2012.jpg/440px-Zakk_Wylde_-_2012.jpg" },
        { name: "Rob Nicholson", role: "Bajo", years: "2003–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rob_Nicholson_2010.jpg/440px-Rob_Nicholson_2010.jpg" },
        { name: "Tommy Clufetos", role: "Batería", years: "2010–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tommy_Clufetos.jpg/440px-Tommy_Clufetos.jpg" },
    ];

    const pastMembers = [
        { name: "Randy Rhoads †", role: "Guitarra (1979–1982)", note: "Fallecido en 1982" },
        { name: "Bob Daisley", role: "Bajo (1979–1980, 1983–1984, 1986–1988)" },
        { name: "Lee Kerslake †", role: "Batería (1979–1981)", note: "Fallecido en 2020" },
        { name: "Tommy Aldridge", role: "Batería (1981–1987, 1992–1994)" },
        { name: "Jake E. Lee", role: "Guitarra (1983–1987)" },
        { name: "Gus G.", role: "Guitarra (2009–2017)" },
    ];

    return (
        <div className={styles.ozzyPage}>
            <nav className={styles.ozzyNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ozzy" className={styles.navItem}>OZZY</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ozzy/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ozzy/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ozzy/grupo" className={`${styles.navItem} ${styles.ozzyActive}`}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>GRUPO</h1>
                <p className={styles.tagline}>LOS MÚSICOS DEL OSCURO REINO</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>BAND</span>
                        <span className={styles.titleMain}>🎸 MIEMBROS ACTUALES 🎸</span>
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
                        <span className={styles.titleMain}>🦇 MIEMBROS ANTERIORES 🦇</span>
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
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 🦇 OZZY OSBOURNE 🦇</p>
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

export default OzzyGrupo;