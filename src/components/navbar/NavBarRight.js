import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styles from '../css/nav.module.css';

export default class NavBarRight extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <ul className={styles['nav-ul']} id={styles.right}>
            <li className={`${styles['nav-li']} ${styles['nav-hover']}`}>
              About
            </li>
            <li className={`${styles['nav-li']} ${styles['nav-hover']}`}>UK</li>
            <li className={`${styles['nav-li']} ${styles['nav-hover']}`}>
              GBP
            </li>
            <li
              className={`${styles['nav-li']} ${styles['nav-hover']}`}
              id={styles['nav-user']}
            >
              <i className="far fa-user" />
              {/* <hr /> */}
              <span
                id={styles['user-popup']}
                className={styles['toolbox-user']}
              >
                <ul className={styles['nav-ul']}>
                  <li className={styles['nav-li']}>Login</li>
                  <li className={styles['nav-li']}>My Profile</li>
                  <li className={styles['nav-li']}>My Orders</li>
                </ul>
              </span>
            </li>
            <li className={styles['nav-li']}>
              <i className="fas fa-shopping-cart" />
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <ul className={styles['nav-ul']}>
            <li>
              <i className="far fa-user" />
            </li>
            <li>
              <i className="fas fa-shopping-cart" />
            </li>
          </ul>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
