import React from 'react';
import styles from './IronMaiden.module.css';
import IronMaidenNav from '../../components/nav/IronMaidenNav';

// Asegúrate de que la ruta sea correcta en tu sistema de archivos
import portada from '../../images/ironmaiden/portada.png';

const IronMaiden = () => {
    return (
        <div className={styles.maidenPage}>
            <IronMaidenNav active="ironmaiden" />

            {/* HERO SECTION */}
            <section 
                className={styles.heroSection}
                style={{ backgroundImage: `url(${portada})` }}
            >
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <h2>
                            LA DONCELLA DE HIERRO. <span>LEYENDA DEL HEAVY METAL.</span> 
                            – EXPLORÁ LA DISCOGRAFÍA, LA HISTORIA Y EL LEGADO DE LA BANDA QUE CONQUISTÓ EL MUNDO.
                        </h2> 

                        <a
                            href="https://www.ironmaiden.com"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.ampButton}
                        >
                            VISITA SU PÁGINA OFICIAL
                        </a>
                    </div>
                    <div className={styles.heroSpacer}></div>
                </div>
            </section>
        </div>
    );
};

export default IronMaiden;
