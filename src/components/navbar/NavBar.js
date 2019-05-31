import React, { Component } from 'react';
import styles from '../css/nav.module.css';
import { NavBarLeft, NavBarRight } from './';
export default class NavBar extends Component {
  render() {
    return (
      <header id={styles.header}>
        <nav>
          <div className={styles['nav-container']}>
            <NavBarLeft />
            <ul id={styles.logo} className={`${styles['nav-ul']}`}>
              <li className={styles['nav-li']}>LUN-DI</li>
            </ul>
            <NavBarRight />
          </div>
        </nav>
      </header>
    );
  }
}
