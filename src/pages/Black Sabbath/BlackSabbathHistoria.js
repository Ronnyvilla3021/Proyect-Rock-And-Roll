import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlackSabbath.module.css';

const BlackSabbathHistoria = () => {
    return (
        <div className={styles.sabbathPage}>
            <nav className={styles.sabbathNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath" className={styles.navItem}>BLACK SABBATH</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/historia" className={`${styles.navItem} ${styles.sabbathActive}`}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>HISTORIA</h1>
                <p className={styles.tagline}>EL NACIMIENTO DEL HEAVY METAL</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>ORIGIN</span>
                        <span className={styles.titleMain}>🦇 Los Orígenes (1968–1970)</span>
                    </h2>
                    <p className={styles.rockText}>
                        En 1968, cuatro jóvenes de Birmingham decidieron tocar música diferente, más oscura y pesada que cualquier cosa que existiera. <strong>Tony Iommi</strong> (guitarra), <strong>Geezer Butler</strong> (bajo), <strong>Bill Ward</strong> (batería) y <strong>Ozzy Osbourne</strong> (voz) se unieron primero bajo el nombre Polka Tulk Blues Band y luego Earth.
                    </p>
                    <p className={styles.rockText}>
                        Inspirados por una película de terror de Boris Karloff, decidieron llamarse <strong>Black Sabbath</strong>. En febrero de 1970 lanzaron su álbum debut homónimo, grabado en apenas 12 horas. El riff inicial de <em>"Black Sabbath"</em> es considerado el primer riff del heavy metal.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>GOLDEN</span>
                        <span className={styles.titleMain}>⚡ La Era Dorada con Ozzy (1970–1979)</span>
                    </h2>
                    <p className={styles.rockText}>
                        La banda grabó ocho álbumes con Ozzy en apenas una década. <em>"Paranoid"</em> (1970) fue su mayor éxito comercial y contiene algunos de los riffs más reconocibles de la historia: <em>"Iron Man"</em>, <em>"War Pigs"</em> y la canción que da título al disco.
                    </p>
                    <p className={styles.rockText}>
                        <em>"Master of Reality"</em> (1971), <em>"Sabbath Bloody Sabbath"</em> (1973) y <em>"Heaven and Hell"</em> demostraron la capacidad de la banda para evolucionar sin perder su esencia oscura. Sin embargo, los problemas con el alcohol y las drogas llevaron a la salida de Ozzy en 1979.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>DIO</span>
                        <span className={styles.titleMain}>🎸 La Era Dio y los Cambios (1979–1997)</span>
                    </h2>
                    <p className={styles.rockText}>
                        Con <strong>Ronnie James Dio</strong> como vocalista, Black Sabbath lanzó <em>"Heaven and Hell"</em> (1980) y <em>"Mob Rules"</em> (1981), álbumes que demostraron que la banda podía reinventarse brillantemente. Dio también popularizó el gesto del diablo 🤘 entre los fans del metal.
                    </p>
                    <p className={styles.rockText}>
                        Durante los años 80 y 90, la banda experimentó múltiples cambios de formación con vocalistas como Ian Gillan, Glenn Hughes, Ray Gillen y Tony Martin, manteniendo siempre a Tony Iommi como único miembro constante.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>END</span>
                        <span className={styles.titleMain}>🤘 Reunión y El Final (1997–2017)</span>
                    </h2>
                    <p className={styles.rockText}>
                        En 1997, la formación clásica original se reunió para la gira <strong>Reunion</strong>. En 2013, con Ozzy, Iommi y Butler (Ward no participó por disputas contractuales), lanzaron <em>"13"</em>, su primer álbum con Ozzy en 35 años, que debutó en el número 1 en múltiples países.
                    </p>
                    <p className={styles.rockText}>
                        El <strong>2 de febrero de 2017</strong>, Black Sabbath dio su último concierto en Birmingham, la ciudad que los vio nacer, cerrando casi 50 años de historia. El show se llamó apropiadamente <em>"The End"</em>.
                    </p>
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

export default BlackSabbathHistoria;