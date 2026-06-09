import React from 'react';
import styles from './OZZY.module.css';
import { Link } from 'react-router-dom';

import poster1 from '../../images/ozzy/1.jpg';
import poster2 from '../../images/ozzy/2.jpeg';
import poster3 from '../../images/ozzy/3.jpg';

const Ozzy = () => {
    return (
        <div className={styles.ozzyPage}>

            <nav className={styles.ozzyNav}>
                <div className={styles.navContainer}>

                    <Link to="/" className={styles.navItem}>
                        INICIO
                    </Link>

                    <span className={styles.navDivider}>|</span>

                    <Link
                        to="/ozzy"
                        className={`${styles.navItem} ${styles.ozzyActive}`}
                    >
                        OZZY
                    </Link>

                    <span className={styles.navDivider}>|</span>

                    <Link
                        to="/ozzy/historia"
                        className={styles.navItem}
                    >
                        HISTORIA
                    </Link>

                    <span className={styles.navDivider}>|</span>

                    <Link
                        to="/ozzy/albunes"
                        className={styles.navItem}
                    >
                        ÁLBUMES
                    </Link>

                    <span className={styles.navDivider}>|</span>

                    <Link
                        to="/ozzy/grupo"
                        className={styles.navItem}
                    >
                        GRUPO
                    </Link>

                </div>
            </nav>

            {/* LOGO */}

            <div className={styles.logoContainer}>

                <h1 className={styles.logo}>
                    OZZY
                    <span className={styles.logoSub}>
                        OSBOURNE
                    </span>
                </h1>

            </div>

            {/* POSTERS */}

            <section className={styles.posterSection}>

    <div className={styles.posterCard}>

        <img src={poster1} alt="Ozzy curiosity 1" />

        <div className={styles.posterOverlay}>
            <h3>¿SABÍAS ESTO?</h3>

            <p>
                Ozzy tenía dislexia severa y abandonó la escuela muy joven,
                pero aun así terminó convirtiéndose en una de las voces más
                reconocibles del rock mundial.
            </p>
        </div>

    </div>

    <div className={styles.posterCard}>

        <img src={poster2} alt="Ozzy curiosity 2" />

        <div className={styles.posterOverlay}>
            <h3>¿SABÍAS ESTO?</h3>

            <p>
                En varias entrevistas, Ozzy admitió que nunca imaginó vivir
                más de 40 años debido a su estilo de vida extremo.
                Aun así superó ampliamente esa edad.
            </p>
        </div>

    </div>

    <div className={styles.posterCard}>

        <img src={poster3} alt="Ozzy curiosity 3" />

        <div className={styles.posterOverlay}>
            <h3>¿SABÍAS ESTO?</h3>

            <p>
                Su forma de hablar, moverse y cantar en el escenario se volvió
                tan única que muchos lo consideran un “estilo propio” dentro del
                rock, imposible de imitar completamente.
            </p>
        </div>

    </div>

</section>

            {/* FRASE */}

            <section className={styles.quoteSection}>
                <h2 className={styles.quoteText}>
                    THE PRINCE OF DARKNESS
                </h2>
            </section>

            {/* DESCRIPCION */}

            <section className={styles.infoSection}>

                <p className={styles.infoText}>
                    <strong>
                        John Michael Osbourne
                    </strong>,
                    conocido mundialmente como
                    <strong>
                        {' '}Ozzy Osbourne
                    </strong>,
                    nació el 3 de diciembre de
                    1948 en Birmingham,
                    Inglaterra.
                </p>

                <p className={styles.infoText}>
                    Apodado el
                    <em>
                        {' '}“Príncipe de las Tinieblas”
                    </em>,
                    es una de las figuras más
                    influyentes e importantes
                    en la historia del rock y
                    del heavy metal.
                </p>

                <p className={styles.infoText}>
                    Tras décadas de éxitos,
                    giras mundiales y discos
                    legendarios, Ozzy se
                    convirtió en uno de los
                    artistas más reconocidos
                    de todos los tiempos.
                </p>

            </section>

            {/* BOTON */}

            <div className={styles.officialLink}>

                <p className={styles.linkText}>
                    VISITA SU PÁGINA OFICIAL
                </p>

                <a
                    href="https://www.ozzy.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.ampButton}
                >
                    🦇 ENTRA AL REINO OSCURO 🦇
                </a>

            </div>

            {/* EFECTOS */}

            <div className={styles.fog}></div>

            <div className={styles.bat1}>🦇</div>
            <div className={styles.bat2}>🦇</div>
            <div className={styles.bat3}>🦇</div>

            <div className={styles.cross1}>✝</div>
            <div className={styles.cross2}>✝</div>

            {/* FOOTER */}

            <footer className={styles.footer}>

                <div className={styles.footerContent}>

                    <p className={styles.copyright}>
                        © {new Date().getFullYear()}
                        {' '}R.A.V.V
                        {' '}🦇 OZZY OSBOURNE 🦇
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

export default Ozzy;