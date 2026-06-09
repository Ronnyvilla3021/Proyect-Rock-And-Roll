import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './OzzyHistoria.module.css';

import img4 from '../../images/ozzy/4.jpg';
import img5 from '../../images/ozzy/5.jpg';
import img6 from '../../images/ozzy/6.jpg';
import img7 from '../../images/ozzy/7.jpg';
import img8 from '../../images/ozzy/8.jpg';

const scenes = [
    {
        year: "1980",
        title: "EL RENACIMIENTO IMPOSIBLE",
        text: [
            "Ozzy vuelve tras ser expulsado de Black Sabbath.",
            "Nadie apuesta por él. Está roto, inestable y casi fuera de la industria.",
            "Pero junto a Randy Rhoads, nace Blizzard of Ozz.",
            "El mundo no esperaba un regreso… pero recibe una revolución."
        ],
        bg: img4
    },
    {
        year: "1981",
        title: "EL SONIDO QUE NO DEBÍA EXISTIR",
        text: [
            "“Crazy Train” cambia todo.",
            "Guitarras clásicas + caos mental + energía extrema.",
            "Ozzy deja de ser “el ex de Sabbath”",
            "y se convierte en una fuerza propia del metal."
        ],
        bg: img6
    },
    {
        year: "1982",
        title: "LA TRAGEDIA DE RANDY RHOADS",
        text: [
            "El guitarrista que definió su nuevo sonido muere en un accidente aéreo.",
            "Ozzy cae en una de sus etapas más oscuras.",
            "Pero decide seguir… aunque destruido emocionalmente."
        ],
        bg: img5
    },
    {
        year: "1986",
        title: "SOBREVIVIR AL CAOS",
        text: [
            "Alcohol, escándalos y problemas legales.",
            "La prensa lo llama “incontrolable”.",
            "Pero álbumes como The Ultimate Sin lo mantienen vivo en la industria.",
            "Ozzy no está bien… pero nunca desaparece."
        ],
        bg: img8
    },
    {
        year: "2002",
        title: "EL ÍCONO GLOBAL",
        text: [
            "“The Osbournes” muestra al mundo al verdadero Ozzy:",
            "caótico, humano, familiar… inesperado.",
            "Ya no es solo un músico.",
            "Es un personaje cultural global."
        ],
        bg: img7
    }
];

const OzzyHistoria = () => {

    const [shake, setShake] = useState(false);

    const [news, setNews] = useState([]);

    const newsSamples = [
    "EL PRÍNCIPE DE LAS TINIEBLAS VUELVE A ROMPER EL SILENCIO",
    "OZZY OSBOURNE CAMBIÓ LA HISTORIA DEL METAL",
    "OZZY OSBOURNE: CAOS, GENIO Y CONTROVERSIA",
    "LA INDUSTRIA NO SABÍA QUÉ HACER CON ÉL",
    "EL ROCK SE VUELVE OSCURO OTRA VEZ",
    "UN HOMBRE, MIL ESCÁNDALOS, UNA LEYENDA",
    "EL METAL NACE DEL DESORDEN DE OZZY"
];

    const prevScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            if (Math.abs(y - prevScroll.current) > 500) {
                setShake(true);
                setTimeout(() => setShake(false), 300);
            }

            prevScroll.current = y;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Math.random().toString(36).substring(2, 9);

            setNews(prev => [
                ...prev,
                {
                    id,
                    text: newsSamples[Math.floor(Math.random() * newsSamples.length)],
                    top: Math.random() * 80 + 10,
                    left: Math.random() * 80 + 10
                }
            ]);

            setTimeout(() => {
                setNews(prev => prev.filter(n => n.id !== id));
            }, 1800);

        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${styles.historiaContainer} ${shake ? styles.shake : ''}`}>

            {/* NAV */}
            <nav className={styles.navbar}>
    <Link className={styles.navLink} to="/">INICIO</Link>
    <span className={styles.separator}>|</span>

    <Link className={styles.navLink} to="/ozzy">OZZY</Link>
    <span className={styles.separator}>|</span>

    <Link className={styles.navLink} to="/ozzy/historia">HISTORIA</Link>
    <span className={styles.separator}>|</span>

    <Link className={styles.navLink} to="/ozzy/albunes">ÁLBUMES</Link>
    <span className={styles.separator}>|</span>

    <Link className={styles.navLink} to="/ozzy/grupo">GRUPO</Link>
</nav>

            {/* ESCENAS */}
            <div className={styles.cinemaContainer}>
                {scenes.map((scene, i) => (
                    <section
                        key={i}
                        className={styles.scene}
                        style={{ backgroundImage: `url(${scene.bg})` }}
                    >
                        <div className={styles.overlay}></div>

                        <span className={styles.sceneNumber}>
                            ESCENA {i + 1}
                        </span>

                        <h1 className={styles.sceneTitle}>
                            {scene.year} — {scene.title}
                        </h1>

                        <div className={styles.sceneText}>
                            {scene.text.map((t, index) => (
                                <p key={index}>{t}</p>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* NOTICIAS */}
            {news.map(n => (
                <div
                    key={n.id}
                    className={styles.newsFlash}
                    style={{
                        top: `${n.top}%`,
                        left: `${n.left}%`
                    }}
                >
                    {n.text}
                </div>
            ))}

        </div>
    );
};

export default OzzyHistoria;