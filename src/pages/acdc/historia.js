import React from 'react';
import { Link } from 'react-router-dom'; // <--- ¡IMPORTANTE! Esta línea faltaba
import styles from './acdc1.css'; // o el css que corresponda

const AcdcHistory = () => {
  return (
    <div className="acdc-history">
      <nav>
        <Link to="/inicio" className="nav-item">INICIO</Link> |
        <Link to="/acdc" className="nav-item">ACDC</Link> |
        <Link to="/historia" className="nav-item">HISTORIA</Link> |
        <Link to="/albumes" className="nav-item">ALBUMES</Link> |
        <Link to="/grupo" className="nav-item">GRUPO</Link>
      </nav>

      <header>
        <h1>👑 HISTORIA 👑</h1>
      </header>

      <section>
        <h2>👑 CONOCE SU HISTORIA PASO A PASO 👑</h2>
        <img
          width="200"
          height="200"
          src="https://cdn.pixabay.com/photo/2021/11/14/15/32/ac-dc-6794857_1280.png"
          alt="Logo de AC/DC"
        />

        <h2>🎸 Primeros años 🎸</h2>
        <p>
          En noviembre de 1973, Malcolm Young y Angus Young formaron AC/DC, reclutando al bajista Larry Van Kriedt, al cantante Dave Evans y al baterista Colin Burgess. Esta formación adoptó una imagen ambigua, en sintonía con la moda del glam-rock. Los primeros ensayos se basaban en clásicos del blues y rhythm and blues.
        </p>
        <p>
          En los festivales de Año Nuevo de 1973, tocaron su primer concierto en el club «Chequers» en Sídney. Luego hubo varios cambios de integrantes, incluyendo la salida de Van Kriedt y Burgess. También surgieron problemas con Dave Evans, quien fue reemplazado después por Bon Scott.
        </p>
        <p>
          En 1974 grabaron su primer sencillo «Can I Sit Next to You Girl». Angus Young adoptó su característico uniforme escolar, idea de su hermana Margaret. Luego, se mudaron a Melbourne y contrataron como representante a Michael Browning, quien impulsó la llegada de Bon Scott.
        </p>
      </section>

      <section>
        <img
          width="200"
          height="200"
          src="https://extrachill.com/wp-content/uploads/2021/12/acdc-high-voltage-logo-1024x1024.jpg"
          alt="Logo High Voltage"
        />
        <h2>🎸 Éxito internacional (1976-1978) 🎸</h2>
        <p>
          En 1975, firmaron con Atlantic Records y realizaron giras en Europa junto a grandes del hard rock como Kiss, Aerosmith y Blue Öyster Cult. Publicaron álbumes como *High Voltage*, *Dirty Deeds Done Dirt Cheap* y *Let There Be Rock*, ganando reconocimiento mundial.
        </p>
      </section>

      <section>
        <img
          width="200"
          height="200"
          src="https://i.pinimg.com/564x/88/bc/bd/88bcbdc772aad1e23e1d2eed710efb02.jpg"
          alt="Foto de Bon Scott"
        />
        <h2>🎸 Muerte de Bon Scott (1980) 🎸</h2>
        <p>
          El 19 de febrero de 1980, Bon Scott falleció en Londres por intoxicación etílica. Su pérdida marcó profundamente a la banda, pero también impulsó su siguiente gran etapa.
        </p>
      </section>

      <section>
        <img
          width="200"
          height="200"
          src="https://s1.eestatic.com/2021/05/08/actualidad/579705129_184596090_1706x1627.jpg"
          alt="Foto de Brian Johnson"
        />
        <h2>🎸 Llegada de Brian Johnson y ascenso a la cúspide (1980-1983) 🎸</h2>
        <p>
          Con Brian Johnson, grabaron *Back in Black* (1980), dedicado a Bon Scott. El disco se convirtió en uno de los más vendidos de la historia. Luego lanzaron *For Those About to Rock (We Salute You)*, consolidándose como leyendas del rock.
        </p>
      </section>

      <section>
        <img
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042022/jpeg_.jpg?nSIbCma.Is0U.QqqmTixSdnDLbsXWrOK&itok=ZRsBDqu9"
          alt="Logo de AC/DC años 80"
        />
        <h2>🎸 La llegada de Wright y el descenso comercial (1983-1987) 🎸</h2>
        <p>
          En 1983, Simon Wright reemplazó a Phil Rudd en la batería. A pesar de nuevos lanzamientos como *Flick of the Switch* y *Fly on the Wall*, la popularidad de la banda decayó en esta etapa.
        </p>
      </section>

      <section>
        <img
          width="400"
          height="200"
          src="https://media.rnztools.nz/rnz/image/upload/s--DC4LOioi--/c_scale,f_auto,q_auto,w_1050/v1643760338/4MJMLYM_image_crop_113241"
          alt="Formación actual de AC/DC"
        />
        <h2>🎸 Actualidad / Power Up (2018-2023) 🎸</h2>
        <p>
          En 2020, AC/DC regresó con *Power Up*, grabado por la formación clásica. El álbum fue un tributo a Malcolm Young. En 2023, anunciaron su participación en el festival Power Trip junto a leyendas como Metallica y Guns N' Roses.
        </p>
      </section>

      <footer>
        <p>© R.A.V.V ⚡ AC/DC ⚡</p>
      </footer>
    </div>
  );
};

export default AcdcHistory;
