import React from 'react';
import styles from './IronMaidenHistoria.module.css';
import IronMaidenNav from '../../components/nav/IronMaidenNav';

// Importaciones
import portada from '../../images/ironmaiden/portada2.jpg';
import earlyEddie from '../../images/ironmaiden/EARLY EDDIE.jpg';
import powerslaveEddie from '../../images/ironmaiden/POWERSLAVE EDDIE.jpg';
import xfactorEddie from '../../images/ironmaiden/X-FACTOR EDDIE.jpg';
import bookOfSoulsEddie from '../../images/ironmaiden/BOOK OF SOULS EDDIE.jpg';
import theFirstTours from '../../images/ironmaiden/THE FIRST TOURS.jpg';
import theNumberOfTheBeast from '../../images/ironmaiden/THE NUMBER OF THE BEAST.jpg';
import theVirtualEra from '../../images/ironmaiden/THE VIRTUAL ERA.jpg';
import theSeventhSonTour from '../../images/ironmaiden/THE SEVENTH SON TOUR.jpg';

const erasData = [
    {
        id: 1,
        subtitulo: "ERA 1:",
        titulo: "LOS ORÍGENES Y EL DEBUT",
        años: "(1975–1981)",
        eddieName: "EARLY EDDIE",
        eddieImg: earlyEddie,
        albumImg: theFirstTours,
        albumTitle: "THE FIRST TOURS",
        resumenAlbum: "El amanecer del NWOBHM. El sonido crudo de los clubs de Londres capturado en un vinilo que cambió la historia del Metal.",
        textoHistoria: "Steve Harris fundó Iron Maiden en 1975 en el East End de Londres. Inspirado por bandas como Deep Purple y Black Sabbath, Harris quería crear algo más agresivo y épico. En 1979 lanzaron 'Running Free' y en 1980 su álbum debut homónimo."
    },
    {
        id: 2,
        subtitulo: "ERA 2:",
        titulo: "LA ERA DORADA ABSOLUTA",
        años: "(1982–1993)",
        eddieName: "POWERSLAVE EDDIE",
        eddieImg: powerslaveEddie,
        albumImg: theNumberOfTheBeast,
        albumTitle: "THE NUMBER OF THE BEAST",
        resumenAlbum: "La llegada de Bruce Dickinson desató un torbellino de óperas metaleras, giras colosales y la consolidación de Eddie como icono.",
        textoHistoria: "Con grabaciones como 'The Number of the Beast' (1982) y 'Powerslave' (1984), la banda rompió récords globales. Sus giras mundiales fueron eventos épicos inmortalizados en el legendario 'Live After Death'."
    },
    {
        id: 3,
        subtitulo: "ERA 3:",
        titulo: "EL PERÍODO OSCURO",
        años: "(1994–1999)",
        eddieName: "X-FACTOR EDDIE",
        eddieImg: xfactorEddie,
        albumImg: theVirtualEra,
        albumTitle: "THE VIRTUAL ERA",
        resumenAlbum: "Una etapa marcada por composiciones densas, atmósferas sombrías y una experimentación digital que desafió a los puristas.",
        textoHistoria: "Tras la salida de Bruce Dickinson en 1993, Blaze Bayley asumió la voz. Grabaron 'The X Factor' (1995) y 'Virtual XI' (1998), álbumes oscuros que demostraron la resiliencia de la composición de Steve Harris."
    },
    {
        id: 4,
        subtitulo: "ERA 4:",
        titulo: "A BRAVE NEW FRONTIER",
        años: "(1999–PRESENTE)",
        eddieName: "BOOK OF SOULS EDDIE",
        eddieImg: bookOfSoulsEddie,
        albumImg: theSeventhSonTour,
        albumTitle: "THE SEVENTH SON TOUR",
        resumenAlbum: "Regreso de los hijos pródigos y alineación de tres guitarras. La leyenda sigue facturando himnos progresivos.",
        textoHistoria: "En 1999, Bruce Dickinson y Adrian Smith regresaron. Con 'Brave New World' (2000) recuperaron su gloria, consolidándose con obras como 'The Book of Souls' (2015) y 'Senjutsu' (2021)."
    }
];

const IronMaidenHistoria = () => {
    return (
        <div className={styles.maidenPage} style={{ backgroundImage: `url(${portada})` }}>
            <IronMaidenNav active="historia" />

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>HISTORIA</h1>
                <p className={styles.tagline}>LA ÉPICA SAGA DE IRON MAIDEN</p>
            </div>

            <main className={styles.timelineContainer}>
                {erasData.map((era) => (
                    <article key={era.id} className={styles.eraBlock}>
                        <div className={styles.eraHeader}>
                            <span className={styles.eraSub}>{era.subtitulo}</span>
                            <h2 className={styles.eraTitle}>{era.titulo}</h2>
                            <span className={styles.eraYears}>{era.años}</span>
                        </div>
                        <div className={styles.eraBody}>
                            <div className={styles.eddieCard}>
                                <div className={styles.avatarWrapper}>
                                    <img src={era.eddieImg} alt={era.eddieName} className={styles.eddieImage} loading="lazy" />
                                    <div className={styles.frameOverlay}></div>
                                </div>
                                <div className={styles.eddieInfoBox}>
                                    <h3>{era.eddieName}</h3>
                                </div>
                            </div>
                            <div className={styles.historyTextContainer}>
                                <p className={styles.historyText}>{era.textoHistoria}</p>
                            </div>
                            <div className={styles.albumCard}>
                                <div className={styles.albumFlex}>
                                    <img src={era.albumImg} alt={era.albumTitle} className={styles.albumCover} loading="lazy" />
                                    <div className={styles.albumMeta}>
                                        <h4>{era.albumTitle}</h4>
                                        <p>{era.resumenAlbum}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {era.id !== erasData.length && (
                            <div className={styles.timelineDivider}>
                                <div className={styles.chainLine}></div>
                                <div className={styles.gearIcon}>⚙️</div>
                                <div className={styles.chainLine}></div>
                            </div>
                        )}
                    </article>
                ))}
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 🔥 IRON MAIDEN 🔥</p>
                    <div className={styles.socialIcons}>
                        <span>🎸</span><span>⚔️</span><span>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default IronMaidenHistoria;
