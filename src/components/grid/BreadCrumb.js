import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from '../css/filter-bar.module.css';

class BreadCrumb extends Component {
  render() {
    const urlParams = Object.values(this.props.match.params);
    return (
      <ul className={styles['ul']}>
        <li className={styles['li']}>
          <NavLink to="/" className={styles['a']}>
            Home
          </NavLink>
          <i className={`fas fa-angle-right ${styles['icon']}`} />
        </li>
        {urlParams.map((el, idx) => {
          const linkName = el.replace('-', ' ');
          if (idx === urlParams.length - 1) {
            return (
              <li className={styles['li']} key={el}>
                <NavLink
                  to={`/shop/${urlParams.join('/')}`}
                  className={styles['a']}
                  id={styles['last-a']}
                >
                  {linkName}
                </NavLink>
              </li>
            );
          }
          const path = urlParams.slice(0, idx + 1).join('/');
          return (
            <li className={styles['li']} key={el}>
              <NavLink to={`/shop/${path}`} className={styles['a']}>
                {linkName}
              </NavLink>
              <i className={`fas fa-angle-right ${styles['icon']}`} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default withRouter(BreadCrumb);
