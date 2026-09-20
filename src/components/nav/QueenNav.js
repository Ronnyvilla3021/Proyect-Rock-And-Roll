import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QueenNav.module.css';

const LINKS = [
    { key: 'queen', to: '/queen', label: 'QUEEN' },
    { key: 'historia', to: '/queen/historia', label: 'HISTORIA' },
    { key: 'albunes', to: '/queen/albunes', label: 'ÁLBUMES' },
    { key: 'grupo', to: '/queen/grupo', label: 'GRUPO' },
];

const QueenNav = ({ active }) => (
    <nav className={styles.queenNav}>
        <div className={styles.navContainer}>
            <Link to="/" className={styles.navItem}>INICIO</Link>
            <span className={styles.navDivider}>|</span>
            {LINKS.map((item, i) => (
                <React.Fragment key={item.key}>
                    <Link
                        to={item.to}
                        className={active === item.key ? `${styles.navItem} ${styles.queenActive}` : styles.navItem}
                    >
                        {item.label}
                    </Link>
                    {i < LINKS.length - 1 && <span className={styles.navDivider}>|</span>}
                </React.Fragment>
            ))}
        </div>
    </nav>
);

export default QueenNav;
