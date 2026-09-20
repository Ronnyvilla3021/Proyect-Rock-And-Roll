import React from 'react';
import styles from './queenHistoria.module.css';
import QueenNav from '../../components/nav/QueenNav';

const QueenHistoria = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.queenPage}>
            <QueenNav active="historia" />

            {/* CONTENIDO PRINCIPAL */}
            <div className={styles.mainContentContainer}>
                <header className={styles.mainLogoContainer}>
                    <h1 className={styles.mainTitle}>HISTORIA</h1>
                    <p className={styles.tagline}>LA ÉPICA HISTORIA DEL REINO DE QUEEN</p>
                </header>

                <section className={styles.cardsMosaicSection}>
                    <div className={styles.cardsContainer}>
                        
                        <article className={`${styles.card} ${styles.cardGlass} ${styles.cardOrigenes}`}>
                            <h2 className={styles.cardTitle}>Los Orígenes</h2>
                            <p className={styles.cardText}>
                                Queen se formó en Londres en 1970 cuando <strong>Brian May</strong> y <strong>Roger Taylor</strong> (Smile) se unieron al gran <strong>Freddie Mercury</strong>. En 1971 se incorporó <strong>John Deacon</strong>.
                            </p>
                        </article>

                        <div className={`${styles.card} ${styles.cardIcon} ${styles.cardRayoTop}`} aria-hidden="true">
                            <span className={styles.cardIconLarge}>👑</span>
                        </div>

                        <article className={`${styles.card} ${styles.cardGold} ${styles.cardSmilie}`}>
                            <h2 className={styles.cardTitleSmall}>Smile Club</h2>
                        </article>

                        <article className={`${styles.card} ${styles.cardGlass} ${styles.cardFormoGlass}`}>
                            <h2 className={styles.cardTitle}>Queen se formó.</h2>
                            <p className={styles.cardText}>
                                Mostrando desde el inicio una mezcla única de hard rock, glam rock y melodías elaboradas que los diferenciaría de cualquier otra banda.
                            </p>
                        </article>

                        <article className={`${styles.card} ${styles.cardGold} ${styles.cardTridentSmall}`}>
                            <h2 className={styles.cardTitleSmall}>Trident Studios</h2>
                        </article>

                        <article className={`${styles.card} ${styles.cardDark} ${styles.cardBandaPhoto}`}>
                            <span className={styles.cardIconLarge} style={{fontSize: '1.2rem'}}>👑</span>
                            <p className={styles.cardTextPhoto}>Formación Clásica 1971</p>
                        </article>

                        <article className={`${styles.card} ${styles.cardGold} ${styles.cardTridentLarge}`}>
                            <h2 className={styles.cardTitleSmall}>🎹 Grabaciones en Trident Studios</h2>
                        </article>

                        <article className={`${styles.card} ${styles.cardGlass} ${styles.cardLiveAid}`}>
                            <h2 className={styles.cardTitle}>Live Aid 1985</h2>
                            <p className={styles.cardText}>
                                El 13 de julio de 1985, protagonizaron la actuación más memorable de la historia del rock ante 72,000 almas en el Estadio de Wembley.
                            </p>
                        </article>

                        <article className={`${styles.card} ${styles.cardGoldDark} ${styles.cardEraDorada}`}>
                            <h2 className={styles.cardTitle} style={{color: '#ffd700'}}>👑 La Era Dorada</h2>
                            <p className={styles.cardText} style={{color: '#e0e0e0'}}>
                                Con <em>"A Night at the Opera"</em> (1975), Queen alcanzó la cima mundial gracias a <em>"Bohemian Rhapsody"</em>, una obra maestra que revolucionó todo.
                            </p>
                        </article>

                        <article className={`${styles.card} ${styles.cardDark} ${styles.cardWembleyPhoto}`}>
                            <span className={styles.cardIconLarge} style={{fontSize: '1.3rem'}}>👑</span>
                            <p className={styles.cardTextPhoto}>Magic Tour 1986</p>
                        </article>

                        <div className={`${styles.card} ${styles.cardIcon} ${styles.cardCrownIcon}`} aria-hidden="true">
                            <span className={styles.cardIconLarge} style={{fontSize: '3rem', textShadow: '0 0 25px #ffd700'}}>👑</span>
                        </div>

                        <article className={`${styles.card} ${styles.cardDark} ${styles.cardFormoDark}`}>
                            <h2 className={styles.cardTitle}>Hitos Históricos</h2>
                            <p className={styles.cardText}>
                                <em>"News of the World"</em> (1977) dejó himnos inmortales del rock como <em>"We Will Rock You"</em> y <em>"We Are the Champions"</em>.
                            </p>
                        </article>

                        <div className={`${styles.card} ${styles.cardIcon} ${styles.cardRayoBottom}`} aria-hidden="true">
                            <span className={styles.cardIconLarge}>👑</span>
                        </div>

                        <article className={`${styles.card} ${styles.cardGold} ${styles.cardFreddieLegacy}`}>
                            <h2 className={styles.cardTitleSmall}>🌹 El Legado Inmortal</h2>
                            <p className={styles.cardText} style={{fontSize: '0.85rem', marginTop: '5px', fontWeight: '600'}}>
                                En 1991, el mundo perdió a Freddie Mercury, pero su voz sigue resonando eterna.
                            </p>
                        </article>

                        <div className={`${styles.card} ${styles.cardIcon} ${styles.cardGuitarIcon}`} aria-hidden="true">
                            <span className={styles.cardIconLarge} style={{fontSize: '2.5rem'}}>🎸</span>
                        </div>

                        <article className={`${styles.card} ${styles.cardDark} ${styles.cardBohemian}`}>
                            <span className={styles.cardIconLarge} style={{fontSize: '1.5rem'}}>🎵</span>
                            <h2 className={styles.cardTitle} style={{fontSize: '1.2rem'}}>Bohemian Rhapsody</h2>
                            <p className={styles.cardText} style={{fontSize: '0.9rem', color: '#aaa'}}>
                                Una obra maestra de casi 6 minutos que rompió las reglas de la radio. Más de 300 millones de discos vendidos.
                            </p>
                        </article>
                    </div>
                </section>
            </div>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {currentYear} R.A.V.V 👑 QUEEN 👑</p>
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
