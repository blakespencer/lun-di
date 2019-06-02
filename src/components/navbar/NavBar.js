import React, { Component } from 'react';
import styles from '../css/nav.module.css';
import { NavBarLeft, NavBarRight } from './';
import { NavLink } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return (
      <header id={styles.header}>
        <nav>
          <div className={styles['nav-container']}>
            <NavBarLeft />
            <ul id={styles.logo} className={`${styles['nav-ul']}`}>
              <NavLink to="/" className={styles['a']}>
                <li className={styles['nav-li']}>LUN-DI</li>
              </NavLink>
            </ul>

            <NavBarRight />
          </div>
        </nav>
      </header>
    );
  }
}
