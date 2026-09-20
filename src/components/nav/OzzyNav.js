import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OzzyNav.module.css';

const LINKS = [
    { key: 'ozzy', to: '/ozzy', label: 'OZZY' },
    { key: 'historia', to: '/ozzy/historia', label: 'HISTORIA' },
    { key: 'albunes', to: '/ozzy/albunes', label: 'ÁLBUMES' },
    { key: 'grupo', to: '/ozzy/grupo', label: 'GRUPO' },
];

const OzzyNav = ({ active }) => (
    <nav className={styles.ozzyNav}>
        <div className={styles.navContainer}>
            <Link to="/" className={styles.navItem}>INICIO</Link>
            <span className={styles.navDivider}>|</span>
            {LINKS.map((item, i) => (
                <React.Fragment key={item.key}>
                    <Link
                        to={item.to}
                        className={active === item.key ? `${styles.navItem} ${styles.ozzyActive}` : styles.navItem}
                    >
                        {item.label}
                    </Link>
                    {i < LINKS.length - 1 && <span className={styles.navDivider}>|</span>}
                </React.Fragment>
            ))}
        </div>
    </nav>
);

export default OzzyNav;
