import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './OzzyGrupo.module.css';

// 📸 IMPORTACIÓN DE IMÁGENES LOCALES (Desde src/images/ozzy/)
import img9 from '../../images/ozzy/9.jpg';
import img10 from '../../images/ozzy/10.jpg';
import img11 from '../../images/ozzy/11.jpg';
import img12 from '../../images/ozzy/12.jpg';
import img13 from '../../images/ozzy/13.jpeg'; // Extensión .jpeg según tu raíz
import img14 from '../../images/ozzy/14.jpg';
import img15 from '../../images/ozzy/15.jpg';
import img16 from '../../images/ozzy/16.jpg';
import img17 from '../../images/ozzy/17.webp'; // Extensión .webp según tu raíz
import img18 from '../../images/ozzy/18.jpg';
import img19 from '../../images/ozzy/19.jpg';

const OzzyGrupo = () => {
    const [selected, setSelected] = useState(null);

    // Mapeo de las imágenes del 9 al 19 asignadas ordenadamente a tus integrantes
    const data = {
        top: [
            {
                name: "Jake E. Lee",
                role: "Guitarra",
                years: "1983–1987",
                img: img9
            },
            {
                name: "Bob Daisley",
                role: "Bajo / compositor",
                years: "1979–1985",
                img: img10
            },
            {
                name: "Lee Kerslake",
                role: "Batería",
                years: "1979–1981",
                img: img11
            }
        ],

        center: {
            name: "OZZY OSBOURNE",
            role: "EL DIOS DEL METAL",
            years: "1979–PRESENTE",
            img: img13,
            note: "The Prince of Darkness"
        },

        sides: [
            {
                name: "Randy Rhoads †",
                role: "Guitarra divina",
                years: "1979–1982",
                img: img12
            },
            {
                name: "Zakk Wylde",
                role: "Guitarra moderna",
                years: "1987–presente",
                img: img14
            }
        ],

        bottom: [
            {
                name: "Gus G",
                role: "Guitarra",
                years: "2009–2017",
                img: img15
            },
            {
                name: "Joe Holmes",
                role: "Guitarra",
                years: "1995–2001",
                img: img16
            },
            {
                name: "Rob Nicholson (Blasko)",
                role: "Bajo",
                years: "2003–presente",
                img: img17
            },
            {
                name: "Mike Inez",
                role: "Bajo",
                years: "1989–1995 / 1996 / 2025",
                img: img18
            },
            {
                name: "Tommy Clufetos",
                role: "Batería",
                years: "2010–presente",
                img: img19
            }
        ]
    };

    const Card = ({ item }) => (
        <div className={styles.card} onClick={() => setSelected(item)}>
            <img src={item.img} alt={item.name} />
            <div className={styles.cardInfo}>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
            </div>
        </div>
    );

    return (
        <div className={styles.page}>

            {/* NAV (NO TOCADO) */}
            <nav className={styles.nav}>
  <div className={styles.navContainer}>

    <Link to="/" className={styles.navItem}>INICIO</Link>
    <span className={styles.navDivider}>|</span>

    <Link to="/ozzy" className={styles.navItem}>OZZY</Link>
    <span className={styles.navDivider}>|</span>

    <Link to="/ozzy/historia" className={styles.navItem}>HISTORIA</Link>
    <span className={styles.navDivider}>|</span>

    <Link to="/ozzy/albunes" className={styles.navItem}>ÁLBUMES</Link>
    <span className={styles.navDivider}>|</span>

    <Link to="/ozzy/grupo" className={styles.active}>GRUPO</Link>

  </div>
</nav>

            {/* TITULO */}
            <header className={styles.hero}>
                <h1>THE LEGACY</h1>
                <p>OZZY OSBOURNE & HIS SHADOWS</p>
            </header>

            {/* 🔥 GRID PRINCIPAL */}
            <div className={styles.layout}>

                {/* 🟥 ARRIBA */}
                <div className={styles.top}>
                    {data.top.map(m => <Card key={m.name} item={m} />)}
                </div>

                {/* 🟦 CENTRO CON LATERALES PEGADOS */}
                <div className={styles.middle}>

                    <div className={styles.side}>
                        <Card item={data.sides[0]} />
                    </div>

                    <div
                        className={styles.center}
                        onClick={() => setSelected(data.center)}
                    >
                        <img src={data.center.img} alt={data.center.name} />
                        <h2>{data.center.name}</h2>
                        <p>{data.center.role}</p>
                    </div>

                    <div className={styles.side}>
                        <Card item={data.sides[1]} />
                    </div>

                </div>

                {/* 🟩 ABAJO */}
                <div className={styles.bottom}>
                    {data.bottom.map(m => <Card key={m.name} item={m} />)}
                </div>

            </div>

            {/* MODAL */}
            {selected && (
                <div className={styles.modal} onClick={() => setSelected(null)}>
                    <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
                        <img src={selected.img} alt={selected.name} style={{ width: '100%', borderRadius: '8px' }} />
                        <h2>{selected.name}</h2>
                        <p>{selected.role}</p>
                        <p>{selected.years}</p>
                        {selected.note && <p><i>{selected.note}</i></p>}
                    </div>
                </div>
            )}

        </div>
    );
};

export default OzzyGrupo;