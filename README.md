# 🎸 Rock Legends

🌐 Demo en vivo
Panel Web: https://rock-legends.netlify.app


Una página web dedicada a seis de las bandas más grandes de la historia del rock y el metal: **AC/DC, Ozzy Osbourne, Kiss, Iron Maiden, Black Sabbath y Queen**. Cada banda tiene su propio espacio con historia, discografía, integrantes y su identidad visual particular — y todo el sitio comparte un reproductor de música que sigue sonando sin importar por dónde navegues.

---

## 📖 ¿Qué es este proyecto?

Es un sitio web de una sola aplicación (lo que se conoce como *Single Page Application* o SPA) construido con **React**, uno de los frameworks más usados hoy en día para crear interfaces web. Esto significa que, aunque parezca que cambias de "página" cuando haces clic en un link, en realidad nunca se recarga el navegador — la aplicación simplemente intercambia el contenido en pantalla de forma instantánea. Por eso la música nunca se corta al navegar entre secciones.

El sitio tiene **25 pantallas en total**:
- Una página de inicio (Home) con las 6 bandas presentadas como tarjetas.
- 4 pantallas por cada banda: **Inicio de la banda, Historia, Álbumes y Grupo (integrantes)**.

---

## 🛠️ Con qué está construido (la tecnología)

| Herramienta | Para qué sirve, en simple |
|---|---|
| **React** | Es el motor que arma toda la interfaz. En vez de escribir HTML fijo, se construyen "piezas" reutilizables llamadas *componentes* (por ejemplo, el reproductor de música es una pieza, cada nav de banda es otra pieza) que se combinan para formar cada pantalla. |
| **React Router** | Es el encargado de que la URL cambie (`/acdc`, `/kiss/historia`, etc.) y que se muestre la pantalla correcta, sin recargar el navegador. |
| **CSS Modules** | Cada pantalla tiene su propio archivo de estilos (colores, tamaños, animaciones) que no interfiere con el de las demás, aunque usen nombres de clase parecidos. |
| **Create React App** | Es la base/plantilla que organiza cómo se compila y se sirve el proyecto (lo que corre por detrás cuando haces `npm start`). |
| **Google Fonts** | Las tipografías especiales de cada banda (Orbitron para Iron Maiden y Ozzy, Cinzel para Black Sabbath, etc.) se cargan desde Google, no son archivos del proyecto. |

No se usó ninguna librería de diseño externa (como Bootstrap o Material UI) — todo el diseño visual de cada banda fue hecho a mano, en CSS puro, banda por banda, con su propia paleta de colores y estilo.

---

## 🎵 El reproductor de música

Es la pieza más importante que conecta todo el sitio, porque **vive fuera de las pantallas individuales** — está "montado" a nivel de toda la aplicación, así que cuando cambias de banda o de sección, la canción que estabas escuchando sigue sonando sin interrupciones.

**Qué puede hacer:**
- Reproducir, pausar, pasar a la siguiente canción o volver a la anterior.
- Modo **aleatorio** (shuffle): salta canciones al azar en vez de en orden.
- Modo **repetir**: puedes elegir repetir toda la lista en bucle, o solo la canción actual.
- Muestra una **barra de progreso** con el tiempo transcurrido y la duración total, y puedes arrastrarla para saltar a otra parte de la canción.
- Muestra la **carátula** de la banda que corresponde a la canción sonando.
- Se puede **minimizar** a una pequeña píldora (solo el nombre de la canción y play/pausa) para que no estorbe visualmente, y volver a expandir con un toque.

Cada banda tiene sus propias canciones cargadas (AC/DC, Ozzy, Kiss, Iron Maiden, Black Sabbath y Queen), y la playlist completa mezcla canciones de todas ellas.

---

## 🧭 La navegación (el menú de cada banda)

Cada banda tiene un menú de navegación en la parte superior con 5 opciones: **Inicio, [Nombre de la banda], Historia, Álbumes y Grupo**. Este menú:

- Siempre queda **fijo en la parte superior de la pantalla**, sin importar cuánto hagas scroll hacia abajo — así siempre puedes cambiar de sección sin tener que volver a subir.
- Resalta con un color distinto la sección en la que estás parado en ese momento.
- Cada banda tiene su propio menú con el estilo visual de esa banda (colores, tipografía, efectos), pero los 6 funcionan exactamente igual por dentro.

---

## 📱 ¿Funciona bien en celular y tablet?

Sí — el sitio fue revisado y ajustado específicamente para verse y comportarse bien en:

- **Teléfonos Android**
- **iPhones** (incluyendo los que tienen el "notch" o la barra de gestos inferior — el contenido no queda tapado por esos elementos del sistema)
- **Tablets** (tanto en orientación vertical como horizontal)

También se eliminó ese "flash" celeste o azul molesto que a veces aparece al tocar botones en pantallas táctiles (es un comportamiento por defecto del navegador, no algo que se hubiera diseñado así a propósito).

---

## 📂 Estructura del proyecto (organización de carpetas)

```
src/
├── App.js                    → El punto central: define qué pantalla se muestra según la URL
├── index.js / index.css      → El arranque de la aplicación
│
├── components/                → Piezas reutilizables en todo el sitio
│   ├── MiniPlayer.js/.css      → El reproductor de música flotante
│   ├── ScrollToTop.js          → Hace que cada pantalla nueva empiece arriba del todo
│   └── nav/                    → Un menú de navegación por cada banda (6 en total)
│
├── context/
│   └── MusicContext.js        → El "cerebro" del reproductor: guarda qué canción suena,
│                                  si está en pausa, en aleatorio, etc., y lo comparte con
│                                  toda la aplicación
│
├── images/                    → Todas las fotos, portadas de álbumes y carátulas
│
└── pages/                     → Las 25 pantallas del sitio
    ├── Home.js                 → Página de inicio
    ├── acdc/                   → Las 4 pantallas de AC/DC
    ├── ozzy/                   → Las 4 pantallas de Ozzy
    ├── Kiss/                   → Las 4 pantallas de Kiss
    ├── Iron Maiden/             → Las 4 pantallas de Iron Maiden
    ├── Black Sabbath/           → Las 4 pantallas de Black Sabbath
    └── Queen/                   → Las 4 pantallas de Queen
```

Cada pantalla tiene dos archivos hermanos: uno `.js` (qué contenido y qué comportamiento tiene) y uno `.module.css` (cómo se ve).

---

## ⚙️ Cómo poner el proyecto a correr en tu computadora

Necesitas tener instalado **Node.js** (versión 18, según lo que ya tiene configurado el proyecto).

1. Abre una terminal en la carpeta del proyecto.
2. Instala las dependencias (las librerías que el proyecto necesita para funcionar):
   ```
   npm install
   ```
3. Levanta el proyecto en modo desarrollo:
   ```
   npm start
   ```
   Esto abre el sitio en tu navegador en `http://localhost:3000`, y se va actualizando solo cada vez que guardas un cambio.
4. Cuando quieras generar la versión final lista para subir a internet:
   ```
   npm run build
   ```
   Esto crea una carpeta `build/` con todo optimizado y comprimido, lista para publicar en un servicio como Netlify o Vercel.

---

## 🔧 Todo lo que se revisó, corrigió y optimizó

Durante el desarrollo se hizo un proceso completo de depuración del proyecto. Esto es lo que se trabajó, explicado en simple:

### Rendimiento (que el sitio corra más liviano y fluido)
- Se corrigieron varios casos donde el código recalculaba cosas innecesariamente cada vez que la pantalla se actualizaba (por ejemplo, listas de datos o efectos visuales que se recreaban de cero sin necesidad).
- Se agregó **carga diferida** (`loading="lazy"`) a imágenes y videos que estaban más abajo en la pantalla, para que no se descarguen hasta que el usuario realmente vaya a verlos — esto acelera la carga inicial de cada página.
- Se corrigieron listeners de eventos (como el scroll o el cambio de tamaño de ventana) que se disparaban decenas de veces por segundo sin necesidad, y ahora están controlados para no sobrecargar el navegador.

### Organización del código
- Los 6 menús de navegación, que antes estaban **copiados y pegados** en cada una de las 24 pantallas de banda (con pequeñas inconsistencias entre copias), ahora son **un solo componente reutilizable por banda** — más fácil de mantener y sin duplicación de código.
- Se eliminó CSS que ya no se usaba (clases que quedaron huérfanas después de cambios anteriores en el proyecto).
- Se corrigieron inconsistencias de tipografía que hacían que algunas páginas de una misma banda no cargaran la fuente correcta si el usuario entraba directo a esa página sin pasar antes por otra.

### Errores puntuales corregidos
- Un carrusel de álbumes (Black Sabbath) que se "trababa" en el celular si el usuario tocaba varios álbumes muy rápido seguido.
- Un video que, al hacer clic en un álbum, no bajaba la pantalla automáticamente hasta donde se reproduce (en la sección de Iron Maiden).
- Textos poco legibles por falta de contraste de color en un par de secciones.
- Un pie de página que quedaba prácticamente invisible en algunas pantallas de Kiss por falta de fondo.
- Un espacio vacío que aparecía al final de una página de Black Sabbath por un elemento decorativo que "estiraba" la página más de lo necesario.
- El menú de navegación que en algunas pantallas dejaba de estar fijo en la parte superior al hacer scroll (por un conflicto entre reglas de estilo).
- Que la pantalla no volviera arriba del todo al cambiar de sección (ahora cada cambio de página inicia siempre desde arriba).

---

## 🎨 Sobre el diseño

Cada banda tiene una identidad visual completamente distinta, pensada para reflejar su estilo musical:

- **AC/DC** — rojo y negro, rayos, tipografía agresiva.
- **Ozzy Osbourne** — blanco y negro, ambiente oscuro con murciélagos y niebla.
- **Kiss** — rojo intenso, estrellas, estética de "ejército del rock".
- **Iron Maiden** — cian/negro futurista, con acentos rojos tipo grafiti.
- **Black Sabbath** — morado y negro, atmósfera de niebla, focos de luz y partículas flotantes.
- **Queen** — dorado y negro, estética elegante tipo "realeza".

Ninguno de estos estilos fue modificado durante el proceso de optimización — todo el trabajo de depuración y mejora de rendimiento se hizo cuidando que el diseño se viera exactamente igual que antes.

---

## 👤 Créditos

Proyecto desarrollado por **Ronny** como parte de su portafolio personal.
