import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from 'styles/Layout.module.css';

function Layout() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Math Magicians</h1>
        <ul aria-label="navbar" className={styles.navbar}>
          <li>
            <Link to="/" className={styles.navButton}>
              Home
            </Link>
          </li>
          <li>
            <Link to="calculator" className={styles.navButton}>
              Calculator
            </Link>
          </li>
          <li>
            <Link to="quote" className={styles.navButton}>
              Quote
            </Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
