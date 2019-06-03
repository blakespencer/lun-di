import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from '../css/filter-bar.module.css';

class BreadCrumb extends Component {
  render() {
    const arr = this.props.match.path.split('/');
    arr.shift();
    return (
      <ul className={styles['ul']}>
        <li className={styles['li']}>
          <NavLink to="/" className={styles['a']}>
            Home
          </NavLink>
          <i className={`fas fa-angle-right ${styles['icon']}`} />
        </li>
        {arr.map((el, idx) => {
          const linkName = el.replace('-', ' ');
          if (idx === arr.length - 1) {
            return (
              <li className={styles['li']} key={el}>
                <NavLink
                  to={`/${arr.join('/')}`}
                  className={styles['a']}
                  id={styles['last-a']}
                >
                  {linkName}
                </NavLink>
              </li>
            );
          }
          const path = arr.slice(0, idx + 1).join('/');
          return (
            <li className={styles['li']} key={el}>
              <NavLink to={`/${path}`} className={styles['a']}>
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
