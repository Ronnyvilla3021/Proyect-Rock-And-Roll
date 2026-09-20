import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AcdcNav.module.css';

const LINKS = [
    { key: 'acdc', to: '/acdc', label: 'AC/DC' },
    { key: 'historia', to: '/acdc/historia', label: 'HISTORIA' },
    { key: 'albunes', to: '/acdc/albunes', label: 'ÁLBUMES' },
    { key: 'grupo', to: '/acdc/grupo', label: 'GRUPO' },
];

const AcdcNav = ({ active }) => (
    <nav className={styles.nav}>
        <Link to="/" className={styles.link}>INICIO</Link>
        {LINKS.map((item) => (
            <Link
                key={item.key}
                to={item.to}
                className={active === item.key ? `${styles.link} ${styles.active}` : styles.link}
            >
                {item.label}
            </Link>
        ))}
    </nav>
);

export default AcdcNav;
