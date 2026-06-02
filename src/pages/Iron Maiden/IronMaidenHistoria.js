import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IronMaiden.module.css';

const IronMaidenHistoria = () => {
    return (
        <div className={styles.maidenPage}>
            <nav className={styles.maidenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden" className={styles.navItem}>IRON MAIDEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden/historia" className={`${styles.navItem} ${styles.maidenActive}`}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/ironmaiden/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>HISTORIA</h1>
                <p className={styles.tagline}>LA ÉPICA SAGA DE IRON MAIDEN</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>IRON</span>
                        <span className={styles.titleMain}>⚔️ Los Orígenes (1975–1980)</span>
                    </h2>
                    <p className={styles.rockText}>
                        <strong>Steve Harris</strong> fundó Iron Maiden en 1975 en el East End de Londres. Inspirado por bandas como Deep Purple y Black Sabbath, Harris quería crear algo más agresivo y épico. Tras años de formaciones cambiantes, la banda comenzó a consolidarse en los clubs de Londres.
                    </p>
                    <p className={styles.rockText}>
                        En 1979 lanzaron su primer sencillo <em>"Running Free"</em> y en 1980 su álbum debut homónimo, que los catapultó al frente del movimiento <strong>NWOBHM</strong> (New Wave of British Heavy Metal).
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>DICKINSON</span>
                        <span className={styles.titleMain}>🔥 La Era Dorada con Dickinson (1981–1993)</span>
                    </h2>
                    <p className={styles.rockText}>
                        La llegada del vocalista <strong>Bruce Dickinson</strong> en 1981 marcó el comienzo de la era más brillante de Iron Maiden. Con él grabaron obras maestras absolutas: <em>"The Number of the Beast"</em> (1982), <em>"Piece of Mind"</em> (1983), <em>"Powerslave"</em> (1984) y <em>"Somewhere in Time"</em> (1986).
                    </p>
                    <p className={styles.rockText}>
                        Sus giras mundiales eran eventos épicos con el gigantesco Eddie apareciendo en el escenario. El álbum en vivo <em>"Live After Death"</em> (1985) es considerado uno de los mejores discos en directo de la historia del rock.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>BLAZE</span>
                        <span className={styles.titleMain}>⚡ El Período Blaze Bayley (1994–1999)</span>
                    </h2>
                    <p className={styles.rockText}>
                        Tras la salida de Bruce Dickinson en 1993, <strong>Blaze Bayley</strong> asumió la voz. Con él grabaron <em>"The X Factor"</em> (1995) y <em>"Virtual XI"</em> (1998), álbumes oscuros y conceptuales que dividieron a los fans pero demostraron la versatilidad de la banda.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>REUNION</span>
                        <span className={styles.titleMain}>🤘 El Regreso Triunfal (2000–Presente)</span>
                    </h2>
                    <p className={styles.rockText}>
                        En 1999, Bruce Dickinson y el guitarrista <strong>Adrian Smith</strong> regresaron a Iron Maiden. Con <em>"Brave New World"</em> (2000) recuperaron toda su gloria. Álbumes posteriores como <em>"A Matter of Life and Death"</em> (2006) y <em>"The Book of Souls"</em> (2015) reafirmaron su estatus de leyenda viva.
                    </p>
                    <p className={styles.rockText}>
                        En 2023 lanzaron <em>"Senjutsu"</em>, una obra épica de casi hora y media que demuestra que Iron Maiden sigue siendo insuperables después de casi 50 años de carrera.
                    </p>
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

export default IronMaidenHistoria;