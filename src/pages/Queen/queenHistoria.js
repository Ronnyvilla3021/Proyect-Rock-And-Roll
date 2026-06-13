import React from 'react';
import { Link } from 'react-router-dom';
import styles from './queenHistoria.module.css';

const QueenHistoria = () => {
    return (
        <div className={styles.queenPage}>
            {/* EL MENÚ SE QUEDA ARRIBA INTACTO */}
            <nav className={styles.queenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen" className={styles.navItem}>QUEEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/historia" className={`${styles.navItem} ${styles.queenActive}`}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            {/* CONTENEDOR DE LA SECCIÓN DEBAJO DEL NAV */}
            <div className={styles.mainContentContainer}>
                
                {/* ENCABEZADO PRINCIPAL DE LA PÁGINA */}
                <div className={styles.mainLogoContainer}>
                    <h1 className={styles.mainTitle}>HISTORIA</h1>
                    <p className={styles.tagline}>LA ÉPICA HISTORIA DEL REINO DE QUEEN</p>
                </div>

                {/* SECCIÓN DEL MOSAICO DE TARJETAS */}
                <section className={styles.cardsMosaicSection}>
                    <div className={styles.cardsContainer}>
                        
                        {/* 1. Los Orígenes (Cristal) */}
                        <div className={`${styles.card} ${styles.cardGlass} ${styles.cardOrigenes}`}>
                            <h2 className={styles.cardTitle}>Los Orígenes</h2>
                            <p className={styles.cardText}>
                                Queen se formó en Londres en 1970 cuando <strong>Brian May</strong> y <strong>Roger Taylor</strong> (Smile) se unieron al gran <strong>Freddie Mercury</strong>. En 1971 se incorporó <strong>John Deacon</strong>.
                            </p>
                        </div>

                        {/* 2. Rayo Decorativo Superior */}
                        <div className={`${styles.card} ${styles.cardIcon} ${styles.cardRayoTop}`}>
                            <span className={styles.cardIconLarge}>👑</span>
                        </div>

                        {/* 3. Smile Club (Dorado) */}
                        <div className={`${styles.card} ${styles.cardGold} ${styles.cardSmilie}`}>
                            <h2 className={styles.cardTitleSmall}>Smile Club</h2>
                        </div>

                        {/* 4. Bloque central descriptivo (Cristal Esmerilado) */}
                        <div className={`${styles.card} ${styles.cardGlass} ${styles.cardFormoGlass}`}>
                            <h2 className={styles.cardTitle}>Queen se formó.</h2>
                            <p className={styles.cardText}>
                                Mostrando desde el inicio una mezcla única de hard rock, glam rock y melodías elaboradas que los diferenciaría de cualquier otra banda.
                            </p>
                        </div>

                        {/* 5. Trident Studios Pequeño (Dorado) */}
                        <div className={`${styles.card} ${styles.cardGold} ${styles.cardTridentSmall}`}>
                            <h2 className={styles.cardTitleSmall}>Trident Studios</h2>
                        </div>

                        {/* 6. Foto de la Banda */}
                        <div className={`${styles.card} ${styles.cardDark} ${styles.cardBandaPhoto}`}>
                            <span className={styles.cardIconLarge} style={{fontSize: '1.2rem'}}>👑</span>
                            <p className={styles.cardTextPhoto}>Formación Clásica 1971</p>
                        </div>

                        {/* 7. Trident Studios Grande (Dorado) */}
                        <div className={`${styles.card} ${styles.cardGold} ${styles.cardTridentLarge}`}>
                            <h2 className={styles.cardTitleSmall}>🎹 Grabaciones en Trident Studios</h2>
                        </div>

                        {/* 8. Live Aid (Cristal) */}
                        <div className={`${styles.card} ${styles.cardGlass} ${styles.cardLiveAid}`}>
                            <h2 className={styles.cardTitle}>Live Aid 1985</h2>
                            <p className={styles.cardText}>
                                El 13 de julio de 1985, protagonizaron la actuación más memorable de la historia del rock ante 72,000 almas en el Estadio de Wembley.
                            </p>
                        </div>

                        {/* 9. La Era Dorada (Dorado Oscuro) */}
                        <div className={`${styles.card} ${styles.cardGoldDark} ${styles.cardEraDorada}`}>
                            <h2 className={styles.cardTitle} style={{color: '#ffd700'}}>👑 La Era Dorada</h2>
                            <p className={styles.cardText} style={{color: '#e0e0e0'}}>
                                Con <em>"A Night at the Opera"</em> (1975), Queen alcanzó la cima mundial gracias a <em>"Bohemian Rhapsody"</em>, una obra maestra que revolucionó todo.
                            </p>
                        </div>

                        {/* 10. Estadio Wembley (Oscura) */}
                        <div className={`${styles.card} ${styles.cardDark} ${styles.cardWembleyPhoto}`}>
                            <span className={styles.cardIconLarge} style={{fontSize: '1.3rem'}}>👑</span>
                            <p className={styles.cardTextPhoto}>Magic Tour 1986</p>
                        </div>

                        {/* 11. Icono Corona */}
                        <div className={`${styles.card} ${styles.cardIcon} ${styles.cardCrownIcon}`}>
                            <span className={styles.cardIconLarge} style={{fontSize: '3rem', textShadow: '0 0 25px #ffd700'}}>👑</span>
                        </div>

                        {/* 12. Hitos Históricos (Oscuro) */}
                        <div className={`${styles.card} ${styles.cardDark} ${styles.cardFormoDark}`}>
                            <h2 className={styles.cardTitle}>Hitos Históricos</h2>
                            <p className={styles.cardText}>
                                <em>"News of the World"</em> (1977) dejó himnos inmortales del rock como <em>"We Will Rock You"</em> y <em>"We Are the Champions"</em>.
                            </p>
                        </div>

                        {/* 13. Rayo Decorativo Inferior */}
                        <div className={`${styles.card} ${styles.cardIcon} ${styles.cardRayoBottom}`}>
                            <span className={styles.cardIconLarge}>👑</span>
                        </div>

                        {/* 14. El Legado de Freddie (Dorado) */}
                        <div className={`${styles.card} ${styles.cardGold} ${styles.cardFreddieLegacy}`}>
                            <h2 className={styles.cardTitleSmall}>🌹 El Legado Inmortal</h2>
                            <p className={styles.cardText} style={{fontSize: '0.85rem', marginTop: '5px', fontWeight: '600'}}>
                                En 1991, el mundo perdió a Freddie Mercury, pero su voz sigue resonando eterna.
                            </p>
                        </div>

                        {/* 15. Icono Guitarra */}
                        <div className={`${styles.card} ${styles.cardIcon} ${styles.cardGuitarIcon}`}>
                            <span className={styles.cardIconLarge} style={{fontSize: '2.5rem'}}>🎸</span>
                        </div>

                        {/* 16. Bohemian Rhapsody */}
                        <div className={`${styles.card} ${styles.cardDark} ${styles.cardBohemian}`}>
                            <span className={styles.cardIconLarge} style={{fontSize: '1.5rem'}}>🎵</span>
                            <h2 className={styles.cardTitle} style={{fontSize: '1.2rem'}}>Bohemian Rhapsody</h2>
                            <p className={styles.cardText} style={{fontSize: '0.9rem', color: '#aaa'}}>
                                Una obra maestra de casi 6 minutos que rompió las reglas de la radio. Más de 300 millones de discos vendidos.
                            </p>
                        </div>

                    </div>
                </section>
            </div>

            {/* FOOTER */}
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

export default QueenHistoria;