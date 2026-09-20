import React from 'react';
import styles from './historia.module.css';
import AcdcNav from '../../components/nav/AcdcNav';

import portada from "../../images/acdc/portada.jpg";
import img1 from "../../images/acdc/7.jpg";
import img2 from "../../images/acdc/8.jpg";
import img3 from "../../images/acdc/9.jpg";
import img4 from "../../images/acdc/10.jpg";
import img5 from "../../images/acdc/11.jpg";

const Historia = () => {
    return (
        <div className={styles.page} style={{ backgroundImage: `url(${portada})` }}>

            <AcdcNav active="historia" />

            <header className={styles.header}>
                <h1>⚡ HISTORIA AC/DC ⚡</h1>
                <p>El viaje del rock más poderoso del mundo</p>
            </header>

            <section className={styles.timeline}>
                
                <div className={styles.itemLeft}>
                    <div className={styles.timelineImage}>
                        <img src={img1} alt="1973 AC/DC" loading="lazy" />
                    </div>
                    <div className={styles.node}></div>
                    <div className={styles.content}>
                        <h3>⚡ INICIO (1973)</h3>
                        <p>Malcolm y Angus Young forman AC/DC en Australia. Nace la energía cruda del rock.</p>
                    </div>
                </div>

                <div className={styles.itemRight}>
                    <div className={styles.content}>
                        <h3>🔥 ASCENSO (1976–1978)</h3>
                        <p>Giras internacionales y discos como High Voltage. El mundo empieza a escuchar el rugido.</p>
                    </div>
                    <div className={styles.node}></div>
                    <div className={styles.timelineImage}>
                        <img src={img2} alt="Ascenso AC/DC" loading="lazy" />
                    </div>
                </div>

                <div className={styles.itemLeft}>
                    <div className={styles.timelineImage}>
                        <img src={img3} alt="Bon Scott era" loading="lazy" />
                    </div>
                    <div className={styles.node}></div>
                    <div className={styles.content}>
                        <h3>👑 TRAGEDIA Y RENACIMIENTO (1980)</h3>
                        <p>Muere Bon Scott. Entra Brian Johnson. Nace Back in Black.</p>
                    </div>
                </div>

                <div className={styles.itemRight}>
                    <div className={styles.content}>
                        <h3>⚡ GLORIA TOTAL</h3>
                        <p>Back in Black se convierte en leyenda. AC/DC domina estadios del mundo.</p>
                    </div>
                    <div className={styles.node}></div>
                    <div className={styles.timelineImage}>
                        <img src={img4} alt="Gloria AC/DC" loading="lazy" />
                    </div>
                </div>

                <div className={styles.itemLeft}>
                    <div className={styles.timelineImage}>
                        <img src={img5} alt="Actualidad AC/DC" loading="lazy" />
                    </div>
                    <div className={styles.node}></div>
                    <div className={styles.content}>
                        <h3>🎸 LEYENDA VIVA</h3>
                        <p>Power Up y legado eterno del rock. AC/DC nunca muere.</p>
                    </div>
                </div>

            </section>

            <footer className={styles.footer}>
                © {new Date().getFullYear()} AC/DC ⚡ ROCK LEGEND
            </footer>

        </div>
    );
};

export default Historia;
