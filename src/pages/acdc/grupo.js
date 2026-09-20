import React, { useState } from 'react';
import styles from './grupo.module.css';
import AcdcNav from '../../components/nav/AcdcNav';

// IMÁGENES
import g1 from "../../images/acdc/grupo1.jpg";
import g2 from "../../images/acdc/grupo2.jpg";
import g3 from "../../images/acdc/grupo3.jpg";
import g4 from "../../images/acdc/grupo4.jpg";
import g5 from "../../images/acdc/grupo5.jpg";
import g6 from "../../images/acdc/grupo6.jpg";
import g7 from "../../images/acdc/grupo7.jpg";
import g8 from "../../images/acdc/grupo8.jpg";
import g9 from "../../images/acdc/grupo9.jpg";
import g10 from "../../images/acdc/grupo10.jpg";
import g11 from "../../images/acdc/grupo11.jpg";
import g12 from "../../images/acdc/grupo12.jpg";

const MEMBERS_DATA = {
    originales: [
        { name: "Dave Evans", role: "Vocalista", years: "1973–1974", img: g1, info: "Primer vocalista de AC/DC antes de Bon Scott." },
        { name: "Angus Young", role: "Guitarra solista", years: "1973–presente", img: g2, info: "Icono principal de la banda." },
        { name: "Malcolm Young", role: "Guitarra rítmica", years: "1973–2014", img: g3, info: "Creador del sonido base de AC/DC." },
        { name: "George Young", role: "Bajo / Producción", years: "1973–1975", img: g4, info: "Apoyo clave en estudio." }
    ],
    pasajeros: [
        { name: "Bon Scott", role: "Vocalista", years: "1974–1980", img: g5, info: "Voz clásica del rock." },
        { name: "Mark Evans", role: "Bajo", years: "1975–1977", img: g6, info: "Bajista de la etapa inicial." },
        { name: "Simon Wright", role: "Batería", years: "1983–1989", img: g7, info: "Batería de transición." },
        { name: "Chris Slade", role: "Batería", years: "1990–1995 / 2015–2020", img: g8, info: "Potente baterista en giras." }
    ],
    actuales: [
        { name: "Brian Johnson", role: "Vocalista", years: "1980–2016 / 2020–presente", img: g9, info: "Voz de Back in Black." },
        { name: "Stevie Young", role: "Guitarra rítmica", years: "2014–presente", img: g10, info: "Reemplazo de Malcolm." },
        { name: "Cliff Williams", role: "Bajo", years: "1977–2016 / 2020–presente", img: g11, info: "Base sólida del sonido." },
        { name: "Phil Rudd", role: "Batería", years: "1975–1983 / 1995–2015 / 2020–presente", img: g12, info: "Groove clásico de AC/DC." }
    ]
};

const AcdcGrupo = () => {
    const [selected, setSelected] = useState(null);

    const renderSection = (title, list) => (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <div className={styles.grid}>
                {list.map((m) => (
                    <div
                        key={m.name}
                        className={styles.poster}
                        onClick={() => setSelected(m)}
                    >
                        <img src={m.img} alt={m.name} loading="lazy" />
                        <div className={styles.overlay}>
                            <h3>{m.name}</h3>
                            <p>{m.role}</p>
                            <span>{m.years}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className={styles.page}>
            <AcdcNav active="grupo" />

            <header className={styles.header}>
                <h1>⚡ AC/DC ARCHIVO COMPLETO ⚡</h1>
                <p>13 miembros en la historia de la banda</p>
            </header>

            {renderSection("🔥 ORIGINALES", MEMBERS_DATA.originales)}
            {renderSection("💀 PASAJEROS", MEMBERS_DATA.pasajeros)}
            {renderSection("⚡ ACTUALES", MEMBERS_DATA.actuales)}

            {selected && (
                <div className={styles.modal} onClick={() => setSelected(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={selected.img} alt={selected.name} />
                        <div>
                            <h2>{selected.name}</h2>
                            <h4>{selected.role}</h4>
                            <p>{selected.years}</p>
                            <p>{selected.info}</p>
                        </div>
                    </div>
                </div>
            )}

            <footer className={styles.footer}>
                © {new Date().getFullYear()} AC/DC ⚡ ROCK LEGEND
            </footer>
        </div>
    );
};

export default AcdcGrupo;
