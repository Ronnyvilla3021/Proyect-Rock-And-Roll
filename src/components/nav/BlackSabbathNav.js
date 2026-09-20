import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlackSabbathNav.module.css';

const LINKS = [
    { key: 'blacksabbath', to: '/blacksabbath', label: 'BLACK SABBATH' },
    { key: 'historia', to: '/blacksabbath/historia', label: 'HISTORIA' },
    { key: 'albunes', to: '/blacksabbath/albunes', label: 'ÁLBUMES' },
    { key: 'grupo', to: '/blacksabbath/grupo', label: 'GRUPO' },
];

const BlackSabbathNav = ({ active }) => (
    <nav className={styles.sabbathNav}>
        <div className={styles.navContainer}>
            <Link to="/" className={styles.navItem}>INICIO</Link>
            <span className={styles.navDivider}>|</span>
            {LINKS.map((item, i) => (
                <React.Fragment key={item.key}>
                    <Link
                        to={item.to}
                        className={active === item.key ? `${styles.navItem} ${styles.sabbathActive}` : styles.navItem}
                    >
                        {item.label}
                    </Link>
                    {i < LINKS.length - 1 && <span className={styles.navDivider}>|</span>}
                </React.Fragment>
            ))}
        </div>
    </nav>
);

export default BlackSabbathNav;
