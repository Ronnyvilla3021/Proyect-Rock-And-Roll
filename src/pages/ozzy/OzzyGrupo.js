import React, { useState } from 'react';
import styles from './OzzyGrupo.module.css';
import OzzyNav from '../../components/nav/OzzyNav';

/* IMPORTACIÓN DE IMÁGENES */
import img9 from '../../images/ozzy/jakeelee.jpg';
import img10 from '../../images/ozzy/bobdaisley.jpg';
import img11 from '../../images/ozzy/leekerslake.jpg';
import img12 from '../../images/ozzy/randyrhoads.jpg';
import img13 from '../../images/ozzy/ozzyosbourne.jpeg';
import img14 from '../../images/ozzy/zakkwylde.jpg';
import img15 from '../../images/ozzy/gusg.jpg';
import img16 from '../../images/ozzy/joeholmes.jpg';
import img17 from '../../images/ozzy/robnicholsonblasko.webp';
import img18 from '../../images/ozzy/mikeinez.jpg';
import img19 from '../../images/ozzy/tommyclufetos.jpg';

const allMembers = [
    { name: "OZZY OSBOURNE", role: "EL DIOS DEL METAL", years: "1979–2026", img: img13 },
    { name: "Randy Rhoads †", role: "Guitarra divina", years: "1979–1982", img: img12 },
    { name: "Jake E. Lee", role: "Guitarra", years: "1983–1987", img: img9 },
    { name: "Bob Daisley", role: "Bajo / compositor", years: "1979–1985", img: img10 },
    { name: "Lee Kerslake", role: "Batería", years: "1979–1981", img: img11 },
    { name: "Zakk Wylde", role: "Guitarra moderna", years: "1987–presente", img: img14 },
    { name: "Gus G", role: "Guitarra", years: "2009–2017", img: img15 },
    { name: "Joe Holmes", role: "Guitarra", years: "1995–2001", img: img16 },
    { name: "Rob Nicholson (Blasko)", role: "Bajo", years: "2003–presente", img: img17 },
    { name: "Mike Inez", role: "Bajo", years: "1989–1995", img: img18 },
    { name: "Tommy Clufetos", role: "Batería", years: "2010–presente", img: img19 }
];

const OzzyGrupo = () => {
    const [page, setPage] = useState(0);

    return (
        <div className={styles.page}>
            <OzzyNav active="grupo" />

            {/* LIBRO DE MIEMBROS */}
            <div className={styles.bookWrapper}>
                <button 
                    className={styles.navBtn} 
                    onClick={() => setPage(p => Math.max(0, p - 2))} 
                    disabled={page === 0}
                >
                    ❮
                </button>
                
                <div className={styles.book}>
                    <div className={styles.bookBindingCenter}></div>
                    
                    {/* PÁGINA IZQUIERDA */}
                    <div className={styles.pageLeft}>
                        {allMembers[page] && (
                            <>
                                <img src={allMembers[page].img} alt={allMembers[page].name} loading="lazy" />
                                <h3>{allMembers[page].name}</h3>
                                <p>{allMembers[page].role}</p>
                                <span className={styles.years}>{allMembers[page].years}</span>
                            </>
                        )}
                    </div>
                    
                    {/* PÁGINA DERECHA */}
                    <div className={styles.pageRight}>
                        {allMembers[page + 1] ? (
                            <>
                                <img src={allMembers[page + 1].img} alt={allMembers[page + 1].name} loading="lazy" />
                                <h3>{allMembers[page + 1].name}</h3>
                                <p>{allMembers[page + 1].role}</p>
                                <span className={styles.years}>{allMembers[page + 1].years}</span>
                            </>
                        ) : (
                            <div className={styles.emptyPage}></div>
                        )}
                    </div>
                </div>

                <button 
                    className={styles.navBtn} 
                    onClick={() => setPage(p => Math.min(allMembers.length - 2, p + 2))} 
                    disabled={page >= allMembers.length - 2}
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default OzzyGrupo;
