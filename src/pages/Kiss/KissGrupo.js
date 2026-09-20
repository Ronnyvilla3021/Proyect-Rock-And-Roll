import React from 'react';
import styles from './KissGrupo.module.css';
import KissNav from '../../components/nav/KissNav';

/* IMÁGENES */
import portada from '../../images/kiss/portada.jpg';
import paul from '../../images/kiss/paulstanley.jpg';
import gene from '../../images/kiss/genesimmons.jpg';
import ace from '../../images/kiss/acefrehley.jpg';
import peter from '../../images/kiss/petercriss.jpg';
import ericCarr from '../../images/kiss/ericcarr.jpg';
import vinnie from '../../images/kiss/vinnievincent.jpg';
import bruce from '../../images/kiss/brucekulick.jpg';
import ericSinger from '../../images/kiss/ericsinger.jpg';
import tommy from '../../images/kiss/tommythayer.jpg';
import mark from '../../images/kiss/markstjohn.jpg';

const originals = [
    { name: "Paul Stanley", character: "STARCHILD", icon: "⭐", phrase: "I was made for lovin' you...", className: "starchild", image: paul },
    { name: "Gene Simmons", character: "DEMON", icon: "🔥", phrase: "God of Thunder!", className: "demon", image: gene },
    { name: "Ace Frehley", character: "SPACEMAN", icon: "🚀", phrase: "Shock Me!", className: "spaceman", image: ace },
    { name: "Peter Criss", character: "CATMAN", icon: "🐱", phrase: "Beth, I hear you calling...", className: "catman", image: peter }
];

const warriors = [
    { name: "Eric Carr", years: "1980 - 1991", icon: "🦊", fact: "Creó el personaje The Fox y se convirtió en uno de los miembros más queridos de KISS.", image: ericCarr },
    { name: "Vinnie Vincent", years: "1982 - 1984", icon: "⚡", fact: "Participó en la composición de varios éxitos de la era de los 80.", image: vinnie },
    { name: "Bruce Kulick", years: "1984 - 1996", icon: "🎸", fact: "Fue el guitarrista principal durante toda la era sin maquillaje.", image: bruce },
    { name: "Eric Singer", years: "1991 - Presente", icon: "🥁", fact: "También tocó con Alice Cooper y Black Sabbath.", image: ericSinger },
    { name: "Tommy Thayer", years: "2002 - Presente", icon: "🚀", fact: "Pasó de trabajar detrás de escena a convertirse en el nuevo Spaceman.", image: tommy },
    { name: "Mark St. John", years: "1984", icon: "⚕️", fact: "Su paso por KISS fue breve debido a una enfermedad en sus manos.", image: mark }
];

const KissGrupo = () => {
    return (
        <div className={styles.kissPage} style={{ '--bg-image': `url(${portada})` }}>
            <KissNav active="grupo" />

            <header className={styles.hero}>
                <h1>GRUPO</h1>
                <p>LOS GUERREROS DEL ROCK</p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.bigTitle}>LOS 4 ORIGINALES</h2>
                <p className={styles.sectionSubtitle}>
                    NO FUERON SOLO MÚSICOS.
                    <br />
                    CREARON PERSONAJES INMORTALES.
                </p>

                <div className={styles.originalGrid}>
                    {originals.map(member => (
                        <div
                            key={member.name}
                            className={`${styles.originalCard} ${styles[member.className]}`}
                            style={{ backgroundImage: `url(${member.image})` }}
                        >
                            <div className={styles.overlay}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.originalIcon}>{member.icon}</div>
                                <h3>{member.character}</h3>
                                <h4>{member.name}</h4>
                                <p>{member.phrase}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.bigTitle}>LOS GUERREROS DE KISS</h2>
                <p className={styles.sectionSubtitle}>
                    EL LEGADO CONTINUÓ GRACIAS A ELLOS.
                </p>

                <div className={styles.warriorsGrid}>
                    {warriors.map(member => (
                        <div key={member.name} className={styles.warriorCard}>
                            <img src={member.image} alt={member.name} className={styles.warriorImage} loading="lazy" />
                            <div className={styles.warriorInfo}>
                                <div className={styles.warriorIcon}>{member.icon}</div>
                                <h3>{member.name}</h3>
                                <span>{member.years}</span>
                                <p>{member.fact}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} R.A.V.V • KISS • ROCK AND ROLL</p>
            </footer>
        </div>
    );
};

export default KissGrupo;
