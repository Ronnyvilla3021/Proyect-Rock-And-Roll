import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Al cambiar de ruta, React Router no resetea el scroll por defecto.
 * Este componente no renderiza nada: solo escucha el cambio de ruta
 * (pathname) y sube la página al inicio cada vez que navegas.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
