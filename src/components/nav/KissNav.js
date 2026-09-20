import React from 'react';
import { Link } from 'react-router-dom';
import styles from './KissNav.module.css';

const LINKS = [
    { key: 'kiss', to: '/kiss', label: 'KISS' },
    { key: 'historia', to: '/kiss/historia', label: 'HISTORIA' },
    { key: 'albunes', to: '/kiss/albunes', label: 'ÁLBUMES' },
    { key: 'grupo', to: '/kiss/grupo', label: 'GRUPO' },
];

const KissNav = ({ active }) => (
    <nav className={styles.kissNav}>
        <div className={styles.navContainer}>
            <Link to="/" className={styles.navItem}>INICIO</Link>
            {LINKS.map((item) => (
                <Link
                    key={item.key}
                    to={item.to}
                    className={active === item.key ? `${styles.navItem} ${styles.kissActive}` : styles.navItem}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    </nav>
);

export default KissNav;
