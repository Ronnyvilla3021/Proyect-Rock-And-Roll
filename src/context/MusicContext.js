import { createContext, useContext, useRef, useState, useCallback, useEffect } from 'react';

const MusicContext = createContext();

// Tu playlist original, ahora con objetos {title, src}
const ALL_TRACKS = [
  { title: 'acdc1.mp3', src: '/Musicas/acdc1.mp3' },
  { title: 'acdc2.mp3', src: '/Musicas/acdc2.mp3' },
  { title: 'acdc3.mp3', src: '/Musicas/acdc3.mp3' },
  { title: 'acdc4.mp3', src: '/Musicas/acdc4.mp3' },
  { title: 'acdc5.mp3', src: '/Musicas/acdc5.mp3' },
  { title: 'acdc6.mp3', src: '/Musicas/acdc6.mp3' },
  { title: 'acdc7.mp3', src: '/Musicas/acdc7.mp3' },

  { title: 'queen1.mp3', src: '/Musicas/queen1.mp3' },
  { title: 'queen2.mp3', src: '/Musicas/queen2.mp3' },

  { title: 'ozzy1.mp3', src: '/Musicas/ozzy1.mp3' },
  { title: 'ozzy2.mp3', src: '/Musicas/ozzy2.mp3' },
  { title: 'ozzy3.mp3', src: '/Musicas/ozzy3.mp3' },
  { title: 'ozzy4.mp3', src: '/Musicas/ozzy4.mp3' },
  { title: 'ozzy5.mp3', src: '/Musicas/ozzy5.mp3' },
  { title: 'ozzy6.mp3', src: '/Musicas/ozzy6.mp3' },
  { title: 'ozzy7.mp3', src: '/Musicas/ozzy7.mp3' },

  { title: 'kiss1.mp3', src: '/Musicas/kiss1.mp3' },
  { title: 'kiss2.mp3', src: '/Musicas/kiss2.mp3' },
  { title: 'kiss3.mp3', src: '/Musicas/kiss3.mp3' },
  { title: 'kiss4.mp3', src: '/Musicas/kiss4.mp3' },
  { title: 'kiss5.mp3', src: '/Musicas/kiss5.mp3' },

  { title: 'ironmaiden1.mp3', src: '/Musicas/ironmaiden1.mp3' },
  { title: 'ironmaiden2.mp3', src: '/Musicas/ironmaiden2.mp3' },
  { title: 'ironmaiden3.mp3', src: '/Musicas/ironmaiden3.mp3' },
  { title: 'ironmaiden4.mp3', src: '/Musicas/ironmaiden4.mp3' },
  { title: 'ironmaiden5.mp3', src: '/Musicas/ironmaiden5.mp3' },

  { title: 'blacksabbath1.mp3', src: '/Musicas/blacksabbath1.mp3' },
  { title: 'blacksabbath2.mp3', src: '/Musicas/blacksabbath2.mp3' },
  { title: 'blacksabbath3.mp3', src: '/Musicas/blacksabbath3.mp3' },
  { title: 'blacksabbath4.mp3', src: '/Musicas/blacksabbath4.mp3' },
];

export const MusicProvider = ({ children }) => {
  // Inicialización perezosa: el objeto Audio se crea UNA sola vez,
  // no en cada render (antes: useRef(new Audio()) evaluaba new Audio() en cada render).
  const audioRef = useRef(null);
  if (audioRef.current === null) {
    audioRef.current = new Audio();
  }

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  // 'off' | 'all' | 'one'
  const [repeatMode, setRepeatMode] = useState('all');

  // Refs "espejo" para poder leer el valor más reciente desde dentro
  // de listeners nativos del <audio> sin recrearlos en cada cambio de estado.
  const currentTrackRef = useRef(currentTrack);
  const shuffleRef = useRef(shuffle);
  const repeatModeRef = useRef(repeatMode);

  useEffect(() => { currentTrackRef.current = currentTrack; }, [currentTrack]);
  useEffect(() => { shuffleRef.current = shuffle; }, [shuffle]);
  useEffect(() => { repeatModeRef.current = repeatMode; }, [repeatMode]);

  // Reproducir una canción específica
  const play = useCallback((track) => {
    if (!track) return;
    if (currentTrackRef.current?.src !== track.src) {
      audioRef.current.src = track.src;
      setCurrentTrack(track);
    }
    audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  const pause = useCallback(() => {
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else if (currentTrackRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isPlaying, pause]);

  const next = useCallback(() => {
    const current = currentTrackRef.current;
    if (!current) return;

    if (repeatModeRef.current === 'one') {
      play(current);
      return;
    }

    const idx = ALL_TRACKS.findIndex((t) => t.src === current.src);

    if (shuffleRef.current && ALL_TRACKS.length > 1) {
      let randomIdx;
      do {
        randomIdx = Math.floor(Math.random() * ALL_TRACKS.length);
      } while (randomIdx === idx);
      play(ALL_TRACKS[randomIdx]);
      return;
    }

    let nextIdx = idx + 1;
    if (nextIdx >= ALL_TRACKS.length) {
      if (repeatModeRef.current === 'off') {
        pause();
        return;
      }
      nextIdx = 0;
    }
    play(ALL_TRACKS[nextIdx]);
  }, [play, pause]);

  const prev = useCallback(() => {
    const current = currentTrackRef.current;
    if (!current) return;
    const idx = ALL_TRACKS.findIndex((t) => t.src === current.src);
    const prevIdx = (idx - 1 + ALL_TRACKS.length) % ALL_TRACKS.length;
    play(ALL_TRACKS[prevIdx]);
  }, [play]);

  const toggleShuffle = useCallback(() => {
    setShuffle((s) => !s);
  }, []);

  // Ciclo: off -> all -> one -> off ...
  const cycleRepeatMode = useCallback(() => {
    setRepeatMode((mode) => (mode === 'off' ? 'all' : mode === 'all' ? 'one' : 'off'));
  }, []);

  const seek = useCallback((time) => {
    if (Number.isFinite(time)) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  // Listeners nativos del <audio>, montados UNA sola vez.
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => next();
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
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
    allTracks: ALL_TRACKS,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
