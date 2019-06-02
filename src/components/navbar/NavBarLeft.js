import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styles from '../css/nav.module.css';
import { Link } from 'react-router-dom';

export default class NavBarLeft extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <ul className={styles['nav-ul']} id={styles.left}>
            <Link to={'/summerexample'} className={styles['a']}>
              <li className={`${styles['nav-li']} ${styles['nav-hover']}`}>
                Shop
              </li>
            </Link>
            <li className={`${styles['nav-li']} ${styles['nav-hover']}`}>
              New In
            </li>
            <li className={styles['nav-li']}>
              <i className="fas fa-search" />
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <ul className={styles['nav-ul']}>
            <li className={styles['nav-li']}>Drop Down</li>
            <li className={styles['nav-li']}>
              <i className="fas fa-search" />
            </li>
          </ul>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
