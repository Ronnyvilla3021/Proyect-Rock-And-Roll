// Importa React para usar JSX
import React from 'react';
// Importa los estilos como un objeto
import styles from './Home.module.css';


// =====================
// Componente Card
// =====================

// Define un componente funcional llamado `Card`
const Card = ({ title, image, link }) => (
    <a href={link} className={styles.card}> {/* Enlace que usa styles.card */}
        <img src={image} alt={title} className={styles.card__img} /> {/* Imagen que usa styles.card__img */}
        <span className={styles.card__footer}> {/* Pie de imagen que usa styles.card__footer */}
            <span>{title}</span> {/* Título de la banda */}
        </span>
        <span className={styles.card__action}> {/* Botón de acción que usa styles.card__action */}
            <svg viewBox="0 0 448 512" title="play"> {/* Icono de "play" */}
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
        </span>
    </a>
);

// =====================
// Componente Principal: Home
// =====================

const Home = () => {
    // Lista de bandas (datos para las tarjetas)
    const bands = [
        { title: "⚡AC/DC⚡", image: "https://w1.pngwing.com/pngs/821/327/png-transparent-child-logo-acdc-badge-red-text.png", link: "/acdc" },
        { title: "🦇Ozzy Osbourne🦇", image: "https://thumbs.dreamstime.com/b/logotipo-vectorial-de-ozzy-osbourne-aislado-en-fondo-blanco-306334145.jpg", link: "/Ozzy Osbourne" },
        { title: "👅Kiss👅", image: "https://cdn11.bigcommerce.com/s-c9a80/images/stencil/1280x1280/products/12978/44885/kiss_chunky_magnet__22190.1649795023.png?c=2", link: "/Kiss" },
        { title: "🔥Iron Maiden🔥", image: "https://mussica.info/wp-content/uploads/2021/09/iron-maiden-intro.jpeg", link: "/Iron Maiden" },
        { title: "🦇Black Sabbath🦇", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIexR8SNEIi24ZwWfCk5UY2oVwHZTHTpNBw&s", link: "/Black Sabbath" },
    ];

    return (
        <div className={styles.page}> {/* Contenedor principal que usa styles.page */}

            {/* ===================== */}
            {/* Sección: Barra de navegación */}
            {/* ===================== */}
            <nav className={styles.mainNav}> {/* Barra de navegación que usa styles.mainNav */}
                <ul className={styles.bandList}> {/* Lista de bandas que usa styles.bandList */}
                    <li><a href="/acdc" className={`${styles.navItem} ${styles.acdc}`}>AC/DC</a></li> {/* Enlace AC/DC */}
                    <li><a href="/ozzy" className={`${styles.navItem} ${styles.ozzy}`}>Ozzy Osbourne</a></li> {/* Enlace Ozzy */}
                    <li><a href="/Kiss" className={`${styles.navItem} ${styles.kiss}`}>Kiss</a></li> {/* Enlace Kiss */}
                    <li><a href="/Iron Maiden" className={`${styles.navItem} ${styles.ironMaiden}`}>Iron Maiden</a></li> {/* Enlace Iron Maiden */}
                    <li><a href="/Black Sabbath" className={`${styles.navItem} ${styles.blackSabbath}`}>Black Sabbath</a></li> {/* Enlace Black Sabbath */}
                </ul>
            </nav>

            {/* ===================== */}
            {/* Sección: Hero */}
            {/* ===================== */}
            <section className={styles.heroSection}> {/* Sección principal que usa styles.heroSection */}
                <div className={styles.heroContent}> {/* Contenido del héroe que usa styles.heroContent */}
                    <h1>¡Explora el impacto del Rock!</h1> {/* Título principal */}
                    <p>Descubre la historia y la música de bandas legendarias que han marcado el género del rock.</p> {/* Descripción */}
                </div>
            </section>

            {/* ===================== */}
            {/* Sección: Tarjetas de bandas */}
            {/* ===================== */}
            <section className={styles.cardSection}> {/* Contenedor de tarjetas que usa styles.cardSection */}
                {bands.map((band, index) => (
                    <Card
                        key={index} // Clave única por tarjeta
                        title={band.title} // Título de la banda
                        image={band.image} // Imagen de la banda
                        link={band.link} // Enlace a la banda
                    />
                ))}
            </section>

            {/* ===================== */}
            {/* Sección: Pie de página */}
            {/* ===================== */}
            <footer className={styles.siteFooter}> {/* Pie de página que usa styles.siteFooter */}
                <div className={styles.footerContent}> {/* Contenido del footer que usa styles.footerContent */}
                    <p>© {new Date().getFullYear()} R.A.V.V 🎸 Long Live Rock and Roll 🎸</p> {/* Mensaje de derechos de autor */}
                </div>
            </footer>

        </div>
    );
};

// Exporta el componente `Home` por defecto
export default Home;
