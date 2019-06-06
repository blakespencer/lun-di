import React, { Component } from 'react';
import styles from '../css/nav.module.css';
import { NavBarLeft, NavBarRight } from './';
import { NavLink } from 'react-router-dom';
export default class NavBar extends Component {
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = evt => {
    let scroll, solid;
    if (window.scrollY === 0) {
      scroll = 'solid-header';
      solid = 'scroll-header';
    } else {
      scroll = 'scroll-header';
      solid = 'solid-header';
    }
    const navbar = document.getElementsByClassName(scroll)[0];
    if (navbar) {
      navbar.className = navbar.className.replace(scroll, solid);
    }
  };

  render() {
    return (
      <header className={`${styles.header} nav-header scroll-header`}>
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
