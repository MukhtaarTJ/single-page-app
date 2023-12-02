import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={({ isActive }) => isActive ? styles.active : undefined} end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className={({ isActive }) => isActive ? styles.active : undefined}>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
