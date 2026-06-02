// Importa las herramientas necesarias de React
import React, { useState, useRef } from 'react';
// Importa el componente Link para navegar entre páginas
import { Link } from 'react-router-dom';
// Importa los estilos CSS para este componente
import styles from './albunes.module.css';

// Componente principal que muestra los álbumes
const Albunes = () => {
    // Guarda el video que se está mostrando actualmente
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/zjx0D1Ivy-Q?si=WDFG_ga7jbx1Yk6N");
    
    // Referencia para hacer scroll hasta el video
    const videoRef = useRef(null);

    // Lista de videos de YouTube para cada álbum
    const albumVideos = {
        "High Voltage": "https://www.youtube.com/embed/Nnjh-zp6pP4",
        "T.N.T": "https://www.youtube.com/embed/2Kk3KLvJHkY",
        "Dirty Deeds Done Dirt Cheap": "https://www.youtube.com/embed/kFbqw2NvQlM",
        "Let There Be Rock": "https://www.youtube.com/embed/L_jWHffIx5E",
        "If You Want Blood You've Got It": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Powerage": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Highway to Hell": "https://www.youtube.com/embed/l482T0yNkeo",
        "Back in Black": "https://www.youtube.com/embed/pAgnJDJN4VA",
        "For Those About to Rock": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Flick of the Switch": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Jailbreak": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Fly on the Wall": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Who Made Who": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Blow Up Your Video": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "The Razors Edge": "https://www.youtube.com/embed/v2AC41dglnM",
        "Ballbreaker": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Stiff Upper Lip": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Black Ice": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Rock or Bust": "https://www.youtube.com/embed/6x7Bk0QrNQY",
        "Power Up": "https://www.youtube.com/embed/6x7Bk0QrNQY"
    };

    // Función que se ejecuta al hacer click en un álbum
    const handleAlbumClick = (albumName) => {
        // Cambia el video al del álbum seleccionado
        setCurrentVideo(albumVideos[albumName] || "https://www.youtube.com/embed/zjx0D1Ivy-Q?si=WDFG_ga7jbx1Yk6N");
        
        // Hace scroll suave hasta el video
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        // Contenedor principal con estilos
        <div className={styles.rockContainer}>
            {/* Barra de navegación */}
            <nav className={styles.rockNav}>
                <Link to="/" className={styles.rockNavItem}>INICIO</Link> |
                <Link to="/acdc" className={styles.rockNavItem}>ACDC</Link> |
                <Link to="/historia" className={styles.rockNavItem}>HISTORIA</Link> |
                <Link to="/albunes" className={`${styles.rockNavItem} ${styles.rockActive}`}>ÁLBUMS</Link> |
                <Link to="/grupo" className={styles.rockNavItem}>GRUPO</Link>
            </nav>

            {/* Encabezado de la página */}
            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>💽 ÁLBUMES 💽</h1>
                {/* Línea decorativa */}
                <div className={styles.guitarRiff}></div>
            </header>

            {/* Sección principal del contenido */}
            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>📀 CONOCE TODA SU DISCOGRAFÍA 📀</h2>

                {/* Contenedor del video de YouTube */}
                <div className={styles.rockVideoContainer} ref={videoRef}>
                    <iframe
                        width="560"
                        height="315"
                        src={currentVideo}
                        title="AC/DC Discografía"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.rockVideo}
                    ></iframe>
                </div>

                {/* Grid que contiene todas las tarjetas de álbumes */}
                <div className={styles.rockAlbumsGrid}>
                    {/* Tarjeta para el álbum High Voltage */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("High Voltage")}>
                        <h3 className={styles.rockAlbumTitle}>High Voltage</h3>
                        <p className={styles.rockAlbumInfo}>17 de febrero de 1975 (Australia)<br />30 de abril de 1975 (USA)</p>
                        <img src="https://mariskalrock.com/wp-content/uploads/2020/04/acdc-int-4.jpg" alt="High Voltage" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum T.N.T */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("T.N.T")}>
                        <h3 className={styles.rockAlbumTitle}>T.N.T</h3>
                        <p className={styles.rockAlbumInfo}>1 de diciembre de 1975<br />Albert Productions</p>
                        <img src="https://i.ebayimg.com/images/g/5qAAAOSw0Ptfy-FR/s-l1200.webp" alt="T.N.T" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Dirty Deeds Done Dirt Cheap */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Dirty Deeds Done Dirt Cheap")}>
                        <h3 className={styles.rockAlbumTitle}>Dirty Deeds Done Dirt Cheap</h3>
                        <p className={styles.rockAlbumInfo}>12 de diciembre de 1976<br />(Europa)</p>
                        <img src="https://m.media-amazon.com/images/I/91XAS0WKhJL._UF894,1000_QL80_.jpg" alt="Dirty Deeds Done Dirt Cheap" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Let There Be Rock */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Let There Be Rock")}> 
                        <h3 className={styles.rockAlbumTitle}>Let There Be Rock</h3>
                        <p className={styles.rockAlbumInfo}>23 de julio de 1977<br />Atlantic Records</p>
                        <img src="https://i.discogs.com/xL-lzegVpuALakEw4832pPAcblMs2_E2O-RdWBK4quA/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNDE2/MzY3LTE1NTQxNDEy/MjQtODgwNy5qcGVn.jpeg" alt="Let There Be Rock" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum If You Want Blood You've Got It */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("If You Want Blood You've Got It")}>
                        <h3 className={styles.rockAlbumTitle}>If You Want Blood You've Got It</h3>
                        <p className={styles.rockAlbumInfo}>30 de abril de 1978<br />(En directo) Atlantic Records</p>
                        <img src="https://i2.wp.com/www.scienceofnoise.net/wp-content/uploads/2018/10/71vsHNHr-KL._SL1500_.jpg" alt="If You Want Blood You've Got It" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Powerage */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Powerage")}>
                        <h3 className={styles.rockAlbumTitle}>Powerage</h3>
                        <p className={styles.rockAlbumInfo}>25 de mayo de 1978<br />Atlantic Records</p>
                        <img src="https://i.discogs.com/d90nM4iMtoNLz6KJKLhcSB4Q0A-hOcCAxBy3chkrt2w/rs:fit/g:sm/q:90/h:583/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTcy/NDItMTQ1MzUyNTYz/Mi00ODkzLmpwZWc.jpeg" alt="Powerage" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Highway to Hell */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Highway to Hell")}>
                        <h3 className={styles.rockAlbumTitle}>Highway to Hell</h3>
                        <p className={styles.rockAlbumInfo}>27 de julio de 1979<br />Epic Records</p>
                        <img src="https://diablorock.com/wp-content/uploads/2019/07/highway-to-hell-diablorock-768x506.jpg" alt="Highway to Hell" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Back in Black */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Back in Black")}>
                        <h3 className={styles.rockAlbumTitle}>Back in Black</h3>
                        <p className={styles.rockAlbumInfo}>25 de julio de 1980<br />Atlantic Records</p>
                        <img src="https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg" alt="Back in Black" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum For Those About to Rock */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("For Those About to Rock")}>
                        <h3 className={styles.rockAlbumTitle}>For Those About to Rock</h3>
                        <p className={styles.rockAlbumInfo}>23 de noviembre de 1981<br />Atlantic Records</p>
                        <img src="https://i2.wp.com/www.scienceofnoise.net/wp-content/uploads/2021/11/ACDC_For-Those-About-to-Rock.jpg" alt="For Those About to Rock" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Flick of the Switch */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Flick of the Switch")}>
                        <h3 className={styles.rockAlbumTitle}>Flick of the Switch</h3>
                        <p className={styles.rockAlbumInfo}>15 de agosto de 1983<br />Atlantic Records</p>
                        <img src="https://mariskalrock.com/wp-content/uploads/2023/08/ac-dc-flick-of-the-switch-portada.jpg" alt="Flick of the Switch" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Jailbreak */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Jailbreak")}>
                        <h3 className={styles.rockAlbumTitle}>Jailbreak</h3>
                        <p className={styles.rockAlbumInfo}>15 de octubre de 1984<br />Atco Records</p>
                        <img src="https://toxicrock.files.wordpress.com/2013/10/15octubre74jailbreak.jpg?w=640" alt="Jailbreak" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Fly on the Wall */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Fly on the Wall")}>
                        <h3 className={styles.rockAlbumTitle}>Fly on the Wall</h3>
                        <p className={styles.rockAlbumInfo}>28 de junio de 1985<br />Atlantic Records</p>
                        <img src="https://www.spirit-of-metal.com/cover.php?id_album=732" alt="Fly on the Wall" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Who Made Who */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Who Made Who")}>
                        <h3 className={styles.rockAlbumTitle}>Who Made Who</h3>
                        <p className={styles.rockAlbumInfo}>24 de mayo de 1986<br />Atlantic Records</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGwW-y3KqRWXd04wWYThNo4m2UfYb4AWgfA&s" alt="Who Made Who" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Blow Up Your Video */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Blow Up Your Video")}>
                        <h3 className={styles.rockAlbumTitle}>Blow Up Your Video</h3>
                        <p className={styles.rockAlbumInfo}>1 de febrero de 1988<br />Epic Records</p>
                        <img src="https://www.tonevendor.com/cdn/shop/products/2588798-3257390062a1e5b2de8bc62a1e5b2de8bd165477726662a1e5b2de8c2.jpg?v=1680461849&width=1445" alt="Blow Up Your Video" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum The Razors Edge */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("The Razors Edge")}>
                        <h3 className={styles.rockAlbumTitle}>The Razors Edge</h3>
                        <p className={styles.rockAlbumInfo}>24 de septiembre de 1990<br />Atlantic Records</p>
                        <img src="https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/09/the-razors-edge-5339df5f351f9.jpg" alt="The Razors Edge" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Ballbreaker */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Ballbreaker")}>
                        <h3 className={styles.rockAlbumTitle}>Ballbreaker</h3>
                        <p className={styles.rockAlbumInfo}>22 de septiembre de 1995<br />Elektra Records</p>
                        <img src="https://solorockuruguay.files.wordpress.com/2020/10/tapa.jpg?w=352&h=351" alt="Ballbreaker" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Stiff Upper Lip */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Stiff Upper Lip")}>
                        <h3 className={styles.rockAlbumTitle}>Stiff Upper Lip</h3>
                        <p className={styles.rockAlbumInfo}>25 de febrero de 2000<br />EMI</p>
                        <img src="https://www.acdcbrasil.net/wp-content/uploads/acdc-capa-stiff-upper-lip-2000.jpg" alt="Stiff Upper Lip" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Black Ice */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Black Ice")}>
                        <h3 className={styles.rockAlbumTitle}>Black Ice</h3>
                        <p className={styles.rockAlbumInfo}>17 de octubre de 2008<br />Columbia Records</p>
                        <img src="https://static.wixstatic.com/media/377898_f29ccd76d8a642f19e63a093494e7a27.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/377898_f29ccd76d8a642f19e63a093494e7a27.jpg" alt="Black Ice" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Rock or Bust */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Rock or Bust")}>
                        <h3 className={styles.rockAlbumTitle}>Rock or Bust</h3>
                        <p className={styles.rockAlbumInfo}>28 de noviembre de 2014<br />Columbia Records</p>
                        <img src="https://i.discogs.com/Ugqqgm9qF1V6f5rhjrePDgnaah1C5YXH2V8jRI-35nI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzNTMw/NDktMTQxNzE3MjM1/OC04NjQ2LmpwZWc.jpeg" alt="Rock or Bust" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>

                    {/* Tarjeta para el álbum Power Up */}
                    <div className={styles.rockAlbumCard} onClick={() => handleAlbumClick("Power Up")}>
                        <h3 className={styles.rockAlbumTitle}>Power Up</h3>
                        <p className={styles.rockAlbumInfo}>13 de noviembre de 2020<br />Columbia Records</p>
                        <img src="https://1.bp.blogspot.com/-GimZxB_5JXU/X6tkVj9UukI/AAAAAAAAIJc/kRXEfErIM90COOxLJ65X1enkO25RhWYrQCLcBGAsYHQ/s1280/AC-DC-PWR-UP.jpg" alt="Power Up" className={styles.rockAlbumCover} />
                        <div className={styles.rockAlbumOverlay}>⚡</div>
                    </div>
                </div>
            </section>

            {/* Pie de página */}
            <footer className={styles.rockFooter}>
                <p className={styles.rockFooterText}>© {new Date().getFullYear()} R.A.V.V ⚡ AC/DC ⚡</p>
            </footer>
        </div>
    );
};

// Exporta el componente para que pueda ser usado en otras partes
export default Albunes;