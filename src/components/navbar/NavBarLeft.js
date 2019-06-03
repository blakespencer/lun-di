import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styles from '../css/nav.module.css';
import { Link } from 'react-router-dom';

export default class NavBarLeft extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery minWidth={1025}>
          <ul className={styles['nav-ul']} id={styles.left}>
            <Link to={'/collections/summer-example'} className={styles['a']}>
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
        <MediaQuery maxWidth={1025}>
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
