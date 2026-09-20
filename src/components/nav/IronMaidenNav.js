import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IronMaidenNav.module.css';

const LINKS = [
    { key: 'ironmaiden', to: '/ironmaiden', label: 'IRON MAIDEN' },
    { key: 'historia', to: '/ironmaiden/historia', label: 'HISTORIA' },
    { key: 'albunes', to: '/ironmaiden/albunes', label: 'ÁLBUMES' },
    { key: 'grupo', to: '/ironmaiden/grupo', label: 'GRUPO' },
];

const IronMaidenNav = ({ active }) => (
    <header className={styles.header}>
        <nav className={styles.maidenNav}>
            <div className={styles.navContainer}>
                <div className={styles.navLinks}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    {LINKS.map((item) => (
                        <Link
                            key={item.key}
                            to={item.to}
                            className={active === item.key ? `${styles.navItem} ${styles.maidenActive}` : styles.navItem}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className={styles.navLogo}>IRON MAIDEN</div>
            </div>
        </nav>
    </header>
);

export default IronMaidenNav;
