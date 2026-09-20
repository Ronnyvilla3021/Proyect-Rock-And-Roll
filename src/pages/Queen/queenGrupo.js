import React from 'react';
import styles from './queenGrupo.module.css';
import QueenNav from '../../components/nav/QueenNav';

// Importación de imágenes
import imgFreddie from '../../images/queen/freddiemercury.jpg';
import imgBrian from '../../images/queen/brianmay.jpg';
import imgRoger from '../../images/queen/rogertaylor.jpg';
import imgDeacon from '../../images/queen/jhondeacon.jpg';

// Definición de datos fuera del componente para evitar recreaciones en cada render
const BAND_MEMBERS = [
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

const QueenGrupo = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.queenPage}>
            <QueenNav active="grupo" />

            <header className={styles.logoContainer}>
                <h1 className={styles.logo}>GRUPO</h1>
                <p className={styles.tagline}>LOS REYES DE LA MÚSICA</p>
            </header>

            <main className={styles.posterContainer}>
                {BAND_MEMBERS.map((member) => (
                    <article key={member.name} className={styles.posterCard}>
                        <div 
                            className={styles.posterImg} 
                            style={{ backgroundImage: `url(${member.img})` }}
                            aria-label={`Imagen de ${member.name}`}
                        />
                        <div className={styles.posterOverlay} />
                        
                        <div className={styles.posterInfo}>
                            <h2 className={styles.posterName}>{member.name}</h2>
                            <p className={styles.posterRole}>{member.role}</p>
                            <p className={styles.posterYears}>{member.years}</p>
                            <p className={styles.posterBio}>{member.bio}</p>
                        </div>
                    </article>
                ))}
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {currentYear} R.A.V.V 👑 QUEEN 👑</p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon} aria-label="Guitarra">🎸</span>
                        <span className={styles.icon} aria-label="Corona">👑</span>
                        <span className={styles.icon} aria-label="Rock">🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default QueenGrupo;
