import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OZZY.module.css';

const OzzyHistoria = () => {
    return (
        <div className={styles.ozzyPage}>
            <nav className={styles.ozzyNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ozzy" className={styles.navItem}>OZZY</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ozzy/historia" className={`${styles.navItem} ${styles.ozzyActive}`}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ozzy/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ozzy/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>HISTORIA</h1>
                <p className={styles.tagline}>LA LEYENDA DEL PRÍNCIPE DE LAS TINIEBLAS</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>OZZY</span>
                        <span className={styles.titleMain}>🦇 Los Primeros Años (1948–1968)</span>
                    </h2>
                    <p className={styles.rockText}>
                        <strong>John Michael Osbourne</strong> nació el 3 de diciembre de 1948 en Aston, Birmingham, en una familia obrera. Desde pequeño tuvo problemas en la escuela y fue diagnosticado con dislexia. A los 15 años abandonó los estudios y trabajó en varios oficios antes de descubrir su pasión por la música.
                    </p>
                    <p className={styles.rockText}>
                        Inspirado por <em>The Beatles</em>, Ozzy decidió convertirse en músico. En 1968 formó junto a <strong>Tony Iommi, Geezer Butler y Bill Ward</strong> la banda que primero se llamó Earth y luego se renombraría como <strong>Black Sabbath</strong>, cambiando la historia del rock para siempre.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>SABBATH</span>
                        <span className={styles.titleMain}>🎸 Black Sabbath (1968–1979)</span>
                    </h2>
                    <p className={styles.rockText}>
                        Con Black Sabbath, Ozzy grabó ocho álbumes de estudio y ayudó a crear el sonido del <strong>heavy metal</strong>. Álbumes como <em>"Paranoid"</em> (1970), <em>"Master of Reality"</em> (1971) y <em>"Sabbath Bloody Sabbath"</em> (1973) son pilares fundamentales del género.
                    </p>
                    <p className={styles.rockText}>
                        Sin embargo, sus problemas con el alcohol y las drogas llevaron a su expulsión de la banda en 1979. Lejos de hundirse, Ozzy decidió reinventarse con una carrera en solitario que lo catapultaría a cotas aún mayores.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>SOLO</span>
                        <span className={styles.titleMain}>⚡ Carrera en Solitario (1980–1995)</span>
                    </h2>
                    <p className={styles.rockText}>
                        En 1980, con el guitarrista <strong>Randy Rhoads</strong> a su lado, Ozzy lanzó <em>"Blizzard of Ozz"</em>, un disco que redefinió el heavy metal. La trágica muerte de Randy Rhoads en 1982 fue un golpe devastador, pero Ozzy continuó adelante.
                    </p>
                    <p className={styles.rockText}>
                        Álbumes como <em>"Diary of a Madman"</em> (1981), <em>"Bark at the Moon"</em> (1983) y <em>"No Rest for the Wicked"</em> (1988) lo mantuvieron en la cima del rock mundial.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>LEGEND</span>
                        <span className={styles.titleMain}>🤘 Legado y Actualidad (1996–Presente)</span>
                    </h2>
                    <p className={styles.rockText}>
                        En 2002, Ozzy protagonizó junto a su familia el reality show <em>"The Osbournes"</em>. Fue inductado al <strong>Rock and Roll Hall of Fame</strong> en 2006 como miembro de Black Sabbath.
                    </p>
                    <p className={styles.rockText}>
                        En 2019 reveló que padece <strong>Parkinson</strong>. En 2020 lanzó <em>"Ordinary Man"</em> y en 2022 <em>"Patient Number 9"</em>, demostrando que el Príncipe de las Tinieblas sigue reinando.
                    </p>
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

export default OzzyHistoria;