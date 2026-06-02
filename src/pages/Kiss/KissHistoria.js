import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Kiss.module.css';

const KissHistoria = () => {
    return (
        <div className={styles.kissPage}>
            <nav className={styles.kissNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss" className={styles.navItem}>KISS</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss/historia" className={`${styles.navItem} ${styles.kissActive}`}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/kiss/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>HISTORIA</h1>
                <p className={styles.tagline}>EL ASCENSO DEL EJÉRCITO DE KISS</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>KISS</span>
                        <span className={styles.titleMain}>💋 Formación (1972–1974)</span>
                    </h2>
                    <p className={styles.rockText}>
                        En 1972, <strong>Paul Stanley</strong> y <strong>Gene Simmons</strong> se conocieron en Nueva York y formaron Wicked Lester. Tras disolverse ese proyecto, reclutaron al guitarrista <strong>Ace Frehley</strong> y al baterista <strong>Peter Criss</strong> para crear KISS en enero de 1973.
                    </p>
                    <p className={styles.rockText}>
                        Desde el principio adoptaron sus icónicos maquillajes: el <em>Demonio</em> (Gene), el <em>Hombre Estrella</em> (Paul), el <em>Spaceman</em> (Ace) y el <em>Gato</em> (Peter). En 1974 firmaron con Casablanca Records y lanzaron su álbum debut.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>FAME</span>
                        <span className={styles.titleMain}>🔥 Explosión al Estrellato (1975–1979)</span>
                    </h2>
                    <p className={styles.rockText}>
                        Con <em>"Alive!"</em> (1975), KISS se dispararon a la fama mundial. Sus shows en vivo eran auténticos espectáculos con fuego, sangre y cohetes. <em>"Destroyer"</em> (1976) consolidó su dominio mundial.
                    </p>
                    <p className={styles.rockText}>
                        En 1978 hicieron historia lanzando simultáneamente cuatro álbumes en solitario, uno por cada miembro. La <strong>KISS Army</strong> se convirtió en una de las comunidades de fans más grandes del rock.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>CHANGE</span>
                        <span className={styles.titleMain}>⚡ Cambios y Renacimiento (1980–1996)</span>
                    </h2>
                    <p className={styles.rockText}>
                        En 1983, KISS se quitaron el maquillaje por primera vez. Con <em>"Lick It Up"</em> iniciaron una nueva era. En 1996, la formación original se reunió con maquillaje en la <strong>Reunion Tour</strong>, una de las giras más taquilleras de la historia.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>END</span>
                        <span className={styles.titleMain}>🤘 El Final de la Carretera (1997–2023)</span>
                    </h2>
                    <p className={styles.rockText}>
                        KISS anunció su <strong>"End of the Road World Tour"</strong> en 2018. Tras cinco años de shows épicos en todo el mundo, dieron su último concierto en diciembre de 2023 en Nueva York, cerrando más de 50 años de historia.
                    </p>
                    <p className={styles.rockText}>
                        Inductados al <strong>Rock and Roll Hall of Fame</strong> en 2014, KISS dejan un legado de más de 100 millones de álbumes vendidos.
                    </p>
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

export default KissHistoria;