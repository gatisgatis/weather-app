import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './nav.module.css';



const Nav: FC = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src="https://icon-library.com/images/cloudy-icon/cloudy-icon-21.jpg" alt="Logo" />
      </div>
      <div className={styles.navWrapper}>
        <NavLink exact to="/" className={styles.navItem} activeClassName={styles.active}>
          Home
        </NavLink>
        <NavLink exact to="/about" className={styles.navItem} activeClassName={styles.active}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
