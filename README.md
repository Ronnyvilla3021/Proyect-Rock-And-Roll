# 🎸 Rock And Roll

## 🌐 Demo en vivo

- **Panel Web**: https://rock-legends.netlify.app

<p align="center">
  <strong>Una experiencia web dedicada a las bandas más legendarias del rock y el heavy metal.</strong>
</p>

<p align="center">
  Historia · Discografía · Lineup · Multimedia · Reproductor Global
</p>

---

## 📌 Sobre el proyecto

**Rock And Roll** es una aplicación web desarrollada con **React** como proyecto personal, educativo y de entretenimiento. El sitio reúne información sobre seis bandas icónicas del rock y el heavy metal, combinando contenido histórico, discografía, integrantes y una experiencia visual temática para cada artista.

Uno de los elementos principales del proyecto es su **reproductor musical global**, diseñado para mantenerse activo mientras el usuario navega entre las diferentes páginas de la aplicación.

> 🤘 **Long live rock and roll.**

---

## 🎤 Bandas incluidas

| Banda | Secciones | Identidad visual |
|---|---|---|
| ⚡ **AC/DC** | Historia · Álbumes · Grupo | 🔴 Rojo / 🟡 Amarillo |
| 🦇 **Ozzy Osbourne** | Historia · Álbumes · Grupo | ⚪ Blanco / ⚙️ Gris |
| 👅 **KISS** | Historia · Álbumes · Grupo | 🔴 Rojo fuego |
| 🔥 **Iron Maiden** | Historia · Álbumes · Grupo | 🟦 Cian |
| 🦇 **Black Sabbath** | Historia · Álbumes · Grupo | 🟣 Púrpura |
| 👑 **Queen** | Historia · Álbumes · Grupo | 🟡 Dorado |

Cada banda dispone de una página principal y secciones específicas dedicadas a su historia, álbumes y miembros.

---

## ✨ Características principales

### 🏠 Página principal

La Home presenta las seis bandas y funciona como punto de entrada para explorar todo el proyecto.

### 📚 Historia

Cada banda cuenta con una sección dedicada a su trayectoria, evolución y momentos importantes.

### 💿 Discografía

Las páginas de álbumes presentan información musical acompañada de contenido multimedia mediante **embeds de YouTube**.

### 👥 Grupo / Lineup

Se muestran integrantes actuales y pasados de las bandas incluidas en el proyecto.

### 🎵 MiniPlayer global

El reproductor aparece de forma flotante en la esquina inferior izquierda y permite controlar la música desde cualquier sección del sitio.

Incluye:

- ▶️ Play / Pause
- ⏮️ Canción anterior
- ⏭️ Canción siguiente
- 🔀 Shuffle
- 🔁 Repetición
- 🎚️ Barra de progreso interactiva
- 🖼️ Portada asociada a la canción
- 🔽 Modo minimizado
- 🎶 Reproducción continua entre páginas

La reproducción se mantiene gracias a un **Context API** que conserva el elemento `<audio>` mientras el usuario navega por la aplicación.

---

# 🎨 Identidad visual

Una de las características principales de **Rock And Roll** es que cada banda posee una estética propia.

### ⚡ AC/DC

- Rayos animados
- Vinilos giratorios
- Paleta roja y amarilla
- Estética inspirada en el hard rock

### 🦇 Ozzy Osbourne

- Murciélagos animados
- Cruces decorativas
- Efectos de niebla
- Tonos blancos y grises

### 👅 KISS

- Estrella de 8 puntas
- Esfera 3D orbital
- Partículas brillantes
- Estética de espectáculo y escenario

### 🔥 Iron Maiden

- Carrusel 3D de vinilos
- Grid cian
- Iluminación dinámica
- Inspiración visual en el heavy metal clásico

### 🦇 Black Sabbath

- Mandala radial
- Efectos spotlight
- Partículas púrpuras
- Ambiente oscuro y psicodélico

### 👑 Queen

- Corona creada con CSS
- Brillo dorado
- Estética de escenario
- Inspiración en la identidad visual de la banda

---

# 🛠️ Tecnologías utilizadas

## Frontend

- **React 19**
- **React Router DOM 7**
- **CSS Modules**
- **JavaScript**
- **HTML5**
- **CSS3**

## Multimedia

- **HTML5 Audio API**
- **YouTube Embed**
- Archivos de audio locales en formato MP3

## Estado

- **React Context API**
- `useRef`
- Hooks de React
- Manejo de eventos nativos del elemento `<audio>`

## Testing

El proyecto incluye dependencias para pruebas:

- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`

## Build

- **Create React App**
- `react-scripts 5.0.1`

---

# 🧠 Arquitectura del reproductor

El estado global de la música se encuentra centralizado en:

```text
src/
└── context/
    └── MusicContext.js
```

El contexto expone información y acciones como:

```js
{
  currentTrack,
  isPlaying,
  currentTime,
  duration,
  shuffle,
  repeatMode,
  play,
  pause,
  togglePlay,
  next,
  prev,
  seek,
  toggleShuffle,
  cycleRepeatMode,
  allTracks
}
```

### 🎧 Flujo de reproducción

```text
Usuario
   │
   ▼
MiniPlayer
   │
   ▼
MusicContext
   │
   ▼
Elemento <audio>
   │
   ├── play / pause
   ├── timeupdate
   ├── loadedmetadata
   └── ended
```

El elemento `<audio>` se crea una sola vez mediante `useRef` con inicialización perezosa. Los listeners nativos se registran con el ciclo de vida de React y cuentan con su correspondiente limpieza.

Esto permite que el reproductor continúe funcionando mientras el usuario cambia de ruta.

---

# 🎵 Playlist

El reproductor incluye **30 canciones** distribuidas entre las seis bandas.

| Banda | Canciones | Archivos |
|---|---:|---|
| ⚡ AC/DC | 7 | `acdc1.mp3` – `acdc7.mp3` |
| 🦇 Ozzy Osbourne | 7 | `ozzy1.mp3` – `ozzy7.mp3` |
| 👅 KISS | 5 | `kiss1.mp3` – `kiss5.mp3` |
| 🔥 Iron Maiden | 5 | `ironmaiden1.mp3` – `ironmaiden5.mp3` |
| 🦇 Black Sabbath | 4 | `blacksabbath1.mp3` – `blacksabbath4.mp3` |
| 👑 Queen | 2 | `queen1.mp3` – `queen2.mp3` |
| **Total** | **30** | — |

### Modos disponibles

**Reproducción normal**
```text
Canción 1 → Canción 2 → Canción 3 → ...
```

**Shuffle**
```text
Canción 1 → Canción 7 → Canción 3 → Canción 12 → ...
```

**Repeat**
```text
OFF  →  ALL  →  ONE
```

---

# 📁 Estructura del proyecto

```text
Proyect-Rock-And-Roll/
│
├── public/
│   ├── index.html
│   ├── _redirects
│   │
│   └── Musicas/
│       ├── acdc1.mp3
│       ├── acdc2.mp3
│       ├── ...
│       ├── blacksabbath1.mp3
│       ├── ...
│       ├── ironmaiden1.mp3
│       ├── ...
│       ├── kiss1.mp3
│       ├── ...
│       ├── ozzy1.mp3
│       ├── ...
│       ├── queen1.mp3
│       └── queen2.mp3
│
└── src/
    │
    ├── App.js
    ├── index.js
    ├── index.css
    │
    ├── components/
    │   ├── MiniPlayer.js
    │   ├── MiniPlayer.module.css
    │   │
    │   └── nav/
    │       ├── AcdcNav.js
    │       ├── AcdcNav.module.css
    │       ├── BlackSabbathNav.js
    │       ├── BlackSabbathNav.module.css
    │       ├── IronMaidenNav.js
    │       ├── IronMaidenNav.module.css
    │       ├── KissNav.js
    │       ├── KissNav.module.css
    │       ├── OzzyNav.js
    │       ├── OzzyNav.module.css
    │       ├── QueenNav.js
    │       └── QueenNav.module.css
    │
    ├── context/
    │   └── MusicContext.js
    │
    ├── images/
    │   ├── acdc/
    │   ├── blacksabbath/
    │   ├── Home/
    │   ├── ironmaiden/
    │   ├── kiss/
    │   ├── ozzy/
    │   └── queen/
    │
    └── pages/
        ├── Home.js
        ├── Home.module.css
        │
        ├── acdc/
        │   ├── ACDC.js
        │   ├── ACDC.module.css
        │   ├── albunes.js
        │   ├── albunes.module.css
        │   ├── historia.js
        │   ├── historia.module.css
        │   ├── grupo.js
        │   └── grupo.module.css
        │
        ├── ozzy/
        │   ├── OZZY.js
        │   ├── OZZY.module.css
        │   ├── OzzyAlbunes.js
        │   ├── OzzyAlbunes.module.css
        │   ├── OzzyHistoria.js
        │   ├── OzzyHistoria.module.css
        │   ├── OzzyGrupo.js
        │   └── OzzyGrupo.module.css
        │
        ├── Kiss/
        │   └── 4 páginas + CSS
        │
        ├── Iron Maiden/
        │   └── 4 páginas + CSS
        │
        ├── Black Sabbath/
        │   └── 4 páginas + CSS
        │
        └── Queen/
            └── 4 páginas + CSS
```

---

# 🧭 Rutas de la aplicación

| Ruta | Contenido |
|---|---|
| `/` | 🏠 Home |
| `/acdc` | ⚡ AC/DC |
| `/acdc/historia` | Historia de AC/DC |
| `/acdc/albunes` | Álbumes de AC/DC |
| `/acdc/grupo` | Grupo de AC/DC |
| `/ozzy` | 🦇 Ozzy Osbourne |
| `/ozzy/historia` | Historia de Ozzy |
| `/ozzy/albunes` | Álbumes de Ozzy |
| `/ozzy/grupo` | Grupo de Ozzy |
| `/kiss` | 👅 KISS |
| `/kiss/historia` | Historia de KISS |
| `/kiss/albunes` | Álbumes de KISS |
| `/kiss/grupo` | Grupo de KISS |
| `/ironmaiden` | 🔥 Iron Maiden |
| `/ironmaiden/historia` | Historia de Iron Maiden |
| `/ironmaiden/albunes` | Álbumes de Iron Maiden |
| `/ironmaiden/grupo` | Grupo de Iron Maiden |
| `/blacksabbath` | 🦇 Black Sabbath |
| `/blacksabbath/historia` | Historia de Black Sabbath |
| `/blacksabbath/albunes` | Álbumes de Black Sabbath |
| `/blacksabbath/grupo` | Grupo de Black Sabbath |
| `/queen` | 👑 Queen |
| `/queen/historia` | Historia de Queen |
| `/queen/albunes` | Álbumes de Queen |
| `/queen/grupo` | Grupo de Queen |

---

# 📱 Diseño responsive

El proyecto está diseñado para adaptarse a diferentes tamaños de pantalla.

| Breakpoint | Dispositivo |
|---|---|
| `> 1024px` | 🖥️ Desktop |
| `≤ 1024px` | 💻 Laptop / Tablet horizontal |
| `≤ 768px` | 📱 Tablet vertical / móvil grande |
| `≤ 480px` | 📱 Móvil estándar |
| `≤ 360px` | 📱 Móvil pequeño |

Los estilos se encuentran encapsulados mediante **CSS Modules**, evitando conflictos entre componentes y permitiendo que cada banda mantenga su propia identidad visual.

---

# 🚀 Instalación

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js 18.x o superior**
- **npm** o **yarn**
- Git, si vas a clonar el repositorio

Puedes comprobar las versiones con:

```bash
node --version
npm --version
```

---

## 📥 Clonar el proyecto

```bash
git clone <url-del-repositorio>
cd Proyect-Rock-And-Roll
```

---

## 📦 Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar en desarrollo

```bash
npm start
```

La aplicación estará disponible normalmente en:

```text
http://localhost:3000
```

---

# 🏗️ Build de producción

Para generar una versión optimizada para producción:

```bash
npm run build
```

El resultado se generará dentro de:

```text
build/
```

---

# 🧪 Testing

Para ejecutar el sistema de pruebas:

```bash
npm test
```

Actualmente el proyecto cuenta con las herramientas necesarias para desarrollar pruebas con:

```text
@testing-library/react
@testing-library/jest-dom
@testing-library/user-event
```

---

# 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Ejecuta el proyecto en modo desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm test` | Ejecuta el test runner |
| `npm run eject` | ⚠️ Expone la configuración interna de Create React App |

> ⚠️ `npm run eject` es una operación irreversible. En la mayoría de los casos no es necesario utilizarla.

---

# 🔮 Próximas mejoras

El proyecto está preparado para seguir evolucionando. Entre las mejoras previstas se encuentran:

- [ ] 🚀 Migración de **Create React App → Vite**
- [ ] ⚡ Implementación de **Code Splitting**
- [ ] 💤 Uso de `React.lazy` para cargar las bandas bajo demanda
- [ ] 🧪 Tests automatizados para `MusicContext`
- [ ] 🧪 Tests automatizados para `MiniPlayer`
- [ ] 🧩 Unificación de las seis barras de navegación en componentes reutilizables
- [ ] ✨ Transiciones animadas entre rutas
- [ ] 🌓 Modo oscuro / claro alternativo
- [ ] 📱 Mejoras adicionales de accesibilidad
- [ ] 🎵 Ampliación de la biblioteca musical

---

# 🎯 Objetivos del proyecto

Este proyecto fue creado con varios objetivos:

1. Practicar el desarrollo de interfaces modernas con **React**.
2. Aplicar **React Router** para crear una SPA con múltiples rutas.
3. Trabajar con **Context API** para manejar estado global.
4. Integrar la **HTML5 Audio API**.
5. Crear componentes visuales reutilizables.
6. Experimentar con animaciones y efectos utilizando CSS.
7. Construir interfaces responsive.
8. Integrar contenido multimedia externo mediante YouTube.
9. Organizar un proyecto React de varias páginas y componentes.
10. Crear una experiencia temática alrededor de la música rock.

---

# 🧩 Conceptos técnicos destacados

### Context API

Permite compartir el estado del reproductor entre las diferentes páginas sin necesidad de pasar manualmente las propiedades por múltiples niveles de componentes.

### CSS Modules

Cada componente puede mantener sus propios estilos encapsulados:

```text
MiniPlayer.js
MiniPlayer.module.css
```

Esto reduce el riesgo de colisiones entre clases CSS.

### React Router

La navegación se realiza como una **Single Page Application**, evitando recargas completas del documento al cambiar de sección.

### HTML5 Audio API

El reproductor utiliza un elemento `<audio>` para controlar:

- Reproducción
- Pausa
- Progreso
- Duración
- Cambio de pista
- Eventos de finalización

### YouTube Embed

Las secciones de discografía integran videos de YouTube directamente dentro de las páginas.

---

# ⚠️ Créditos y contenido multimedia

Este proyecto utiliza contenido relacionado con artistas y bandas reconocidas con fines **educativos, demostrativos y de entretenimiento**.

- 🖼️ Portadas de álbumes: material relacionado con las bandas utilizado con fines ilustrativos.
- ▶️ Videos: contenido integrado mediante YouTube.
- 🎵 Música: archivos MP3 utilizados como parte de la demostración del reproductor.

Los derechos de las marcas, imágenes, canciones y demás materiales pertenecen a sus respectivos propietarios.

---

# 📄 Licencia

Proyecto personal desarrollado con fines **educativos y de entretenimiento**.

No se pretende reclamar propiedad sobre las marcas, nombres, canciones, imágenes o demás material perteneciente a terceros.

---

# 👤 Autor

<p align="center">

### **R.A.V.V**

Proyecto personal desarrollado por hobby y pasión por el rock.

</p>

---

# 🤘 Rock And Roll

<p align="center">

**AC/DC · Ozzy Osbourne · KISS · Iron Maiden · Black Sabbath · Queen**

<br>

🎸 **Música, historia y código en un solo lugar.**

<br><br>

**Long live rock and roll! 🤘**

</p>
