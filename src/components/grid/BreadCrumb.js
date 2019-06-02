import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/breadcrumb.module.css';

export default class BreadCrumb extends Component {
  render() {
    console.log(this.props);
    return (
      <ul className={styles['ul']}>
        <li className={styles['li']}>
          <NavLink to="/" className={styles['a']}>
            Home
          </NavLink>
          <i className="fas fa-angle-right" />
        </li>
        <li className={styles['li']}>
          <NavLink to="/collections" className={styles['a']}>
            Collections
          </NavLink>
          <i className="fas fa-angle-right" />
        </li>
        <li className={styles['li']}>
          <NavLink to="/summerexample" className={styles['a']}>
            New
          </NavLink>
        </li>
      </ul>
    );
  }
}
