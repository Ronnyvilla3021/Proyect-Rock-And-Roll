import React from 'react';
import { Link } from 'react-router-dom';
import styles from './queenGrupo.module.css';

// Importación de tus imágenes locales según tu árbol de directorios
import imgFreddie from '../../images/queen/freddiemercury.jpg';
import imgBrian from '../../images/queen/brianmay.jpg';
import imgRoger from '../../images/queen/rogertaylor.jpg';
import imgDeacon from '../../images/queen/jhondeacon.jpg'; // Respetando tu escritura 'jhon'

const QueenGrupo = () => {
    const bandMembers = [
        { 
            name: "FREDDIE MERCURY †", 
            role: "Vocalista, Piano (1970–1991)", 
            years: "Fallecido en 1991", 
            bio: "Leyenda e icono mundial, poseedor de una de las voces más potentes y versátiles de la historia del rock.",
            img: imgFreddie
        },
        { 
            name: "BRIAN MAY", 
            role: "Guitarra, Coros", 
            years: "1970–presente", 
            bio: "Compositor brillante y astrofísico, creador del inconfundible sonido de la guitarra 'Red Special'.",
            img: imgBrian
        },
        { 
            name: "ROGER TAYLOR", 
            role: "Batería, Coros", 
            years: "1970–presente", 
            bio: "Poderoso motor rítmico de la banda y compositor de grandes éxitos globales de Queen.",
            img: imgRoger
        },
        { 
            name: "JOHN DEACON", 
            role: "Bajo (1971–1997)", 
            years: "Retirado en 1997", 
            bio: "El arquitecto silencioso de las líneas de bajo más icónicas y reconocibles del mundo.",
            img: imgDeacon
        },
    ];

    return (
        <div className={styles.queenPage}>
            <nav className={styles.queenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen" className={styles.navItem}>QUEEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/grupo" className={`${styles.navItem} ${styles.queenActive}`}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>GRUPO</h1>
                <p className={styles.tagline}>LOS REYES DE LA MÚSICA</p>
            </div>

            {/* Contenedor principal de las cartas gigantes estilo póster */}
            <div className={styles.posterContainer}>
                {bandMembers.map((member) => (
                    <div key={member.name} className={styles.posterCard}>
                        {/* Imagen de fondo local */}
                        <div 
                            className={styles.posterImg} 
                            style={{ backgroundImage: `url(${member.img})` }}
                        />
                        {/* Gradiente dorado oscuro superpuesto inferior */}
                        <div className={styles.posterOverlay} />
                        
                        {/* Textos de la tarjeta */}
                        <div className={styles.posterInfo}>
                            <h2 className={styles.posterName}>{member.name}</h2>
                            <p className={styles.posterRole}>{member.role}</p>
                            <p className={styles.posterYears}>{member.years}</p>
                            <p className={styles.posterBio}>{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 👑 QUEEN 👑</p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>👑</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default QueenGrupo;