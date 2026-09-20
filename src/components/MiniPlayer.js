import React, { useState, useMemo } from 'react';
import { useMusic } from '../context/MusicContext';
import styles from './MiniPlayer.module.css';

// Reutilizamos las portadas que YA existen en el proyecto (carpeta Home)
// en vez de importar imágenes nuevas — cero peso extra en el bundle.
import acdcCover from '../images/Home/acdc.jpg';
import ozzyCover from '../images/Home/ozzy.jpeg';
import kissCover from '../images/Home/kiss.jpg';
import ironmaidenCover from '../images/Home/ironmaiden.jpg';
import blacksabbathCover from '../images/Home/blacksabbath.jpg';
import queenCover from '../images/Home/queen.jpg';

const BAND_COVERS = {
    acdc: acdcCover,
    ozzy: ozzyCover,
    kiss: kissCover,
    ironmaiden: ironmaidenCover,
    blacksabbath: blacksabbathCover,
    queen: queenCover,
};

const BAND_NAMES = {
    acdc: 'AC/DC',
    ozzy: 'Ozzy Osbourne',
    kiss: 'Kiss',
    ironmaiden: 'Iron Maiden',
    blacksabbath: 'Black Sabbath',
    queen: 'Queen',
};

function getTrackBandKey(track) {
    if (!track?.title) return null;
    const match = track.title.match(/^([a-z]+)\d+\.mp3$/i);
    return match ? match[1].toLowerCase() : null;
}

function Icon({ name, size = 16 }) {
    const common = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    };

    switch (name) {
        case 'shuffle':
            return (
                <svg {...common}>
                    <polyline points="16 3 21 3 21 8" />
                    <line x1="4" y1="20" x2="21" y2="3" />
                    <polyline points="21 16 21 21 16 21" />
                    <line x1="15" y1="15" x2="21" y2="21" />
                    <line x1="4" y1="4" x2="9" y2="9" />
                </svg>
            );
        case 'prev':
            return (
                <svg {...common} fill="currentColor" stroke="none">
                    <polygon points="19 20 9 12 19 4 19 20" />
                    <rect x="5" y="4" width="2" height="16" rx="1" />
                </svg>
            );
        case 'next':
            return (
                <svg {...common} fill="currentColor" stroke="none">
                    <polygon points="5 4 15 12 5 20 5 4" />
                    <rect x="17" y="4" width="2" height="16" rx="1" />
                </svg>
            );
        case 'play':
            return (
                <svg {...common} fill="currentColor" stroke="none">
                    <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
            );
        case 'pause':
            return (
                <svg {...common} fill="currentColor" stroke="none">
                    <rect x="5" y="3" width="5" height="18" rx="1" />
                    <rect x="14" y="3" width="5" height="18" rx="1" />
                </svg>
            );
        case 'repeat':
            return (
                <svg {...common}>
                    <path d="M17 1l4 4-4 4" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <path d="M7 23l-4-4 4-4" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
            );
        default:
            return null;
    }
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

const MiniPlayer = () => {
    const {
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        shuffle,
        repeatMode,
        togglePlay,
        next,
        prev,
        seek,
        toggleShuffle,
        cycleRepeatMode,
    } = useMusic();

    const [minimized, setMinimized] = useState(false);

    const bandKey = useMemo(() => getTrackBandKey(currentTrack), [currentTrack]);
    const cover = bandKey ? BAND_COVERS[bandKey] : null;
    const bandName = bandKey ? BAND_NAMES[bandKey] : '';

    if (!currentTrack) return null;

    const handleSeek = (e) => {
        seek(Number(e.target.value));
    };

    const progressFraction = duration > 0 ? Math.min(currentTime / duration, 1) : 0;

    if (minimized) {
        return (
            <div className={`${styles.player} ${styles.playerMinimized}`}>
                <button
                    className={styles.minimizedTrack}
                    onClick={() => setMinimized(false)}
                    title="Expandir reproductor"
                >
                    {cover && <img src={cover} alt={bandName} className={styles.miniCover} />}
                    <span className={styles.trackTitle}>{currentTrack.title}</span>
                </button>
                <button onClick={togglePlay} className={styles.playBtn} aria-label={isPlaying ? 'Pausar' : 'Reproducir'}>
                    <Icon name={isPlaying ? 'pause' : 'play'} size={18} />
                </button>
            </div>
        );
    }

    return (
        <div className={styles.player}>
            <button
                className={styles.minimizeBtn}
                onClick={() => setMinimized(true)}
                title="Minimizar"
                aria-label="Minimizar reproductor"
            >
                ▾
            </button>

            <div className={styles.topRow}>
                {cover && <img src={cover} alt={bandName} className={styles.cover} />}
                <div className={styles.trackInfo}>
                    <span className={styles.trackTitle}>{currentTrack.title}</span>
                    {bandName && <span className={styles.trackArtist}>{bandName}</span>}
                </div>
            </div>

            <div className={styles.progressRow}>
                <span className={styles.time}>{formatTime(currentTime)}</span>
                <input
                    type="range"
                    className={styles.progressSlider}
                    min={0}
                    max={duration || 0}
                    step={0.1}
                    value={Math.min(currentTime, duration || 0)}
                    onChange={handleSeek}
                    style={{ '--progress': progressFraction }}
                    aria-label="Progreso de la canción"
                />
                <span className={styles.time}>{formatTime(duration)}</span>
            </div>

            <div className={styles.controls}>
                <button
                    onClick={toggleShuffle}
                    className={`${styles.btn} ${styles.sideBtn} ${shuffle ? styles.toggleActive : ''}`}
                    title="Aleatorio"
                    aria-pressed={shuffle}
                >
                    <Icon name="shuffle" />
                </button>

                <button onClick={prev} className={`${styles.btn} ${styles.sideBtn}`} title="Anterior">
                    <Icon name="prev" />
                </button>

                <button onClick={togglePlay} className={styles.playBtn} aria-label={isPlaying ? 'Pausar' : 'Reproducir'}>
                    <Icon name={isPlaying ? 'pause' : 'play'} size={18} />
                </button>

                <button onClick={next} className={`${styles.btn} ${styles.sideBtn}`} title="Siguiente">
                    <Icon name="next" />
                </button>

                <button
                    onClick={cycleRepeatMode}
                    className={`${styles.btn} ${styles.sideBtn} ${repeatMode !== 'off' ? styles.toggleActive : ''}`}
                    title={
                        repeatMode === 'off' ? 'Repetir: desactivado'
                            : repeatMode === 'all' ? 'Repetir: todo'
                                : 'Repetir: una canción'
                    }
                >
                    <Icon name="repeat" />
                    {repeatMode === 'one' && <span className={styles.repeatOneBadge}>1</span>}
                </button>
            </div>
        </div>
    );
};

export default MiniPlayer;
