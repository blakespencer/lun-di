import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styles from '../css/nav.module.css';
import Popup from './Popup';

export default class NavBarRight extends Component {
  state = {
    hover: 'none',
  };

  handleHover = type => {
    this.setState({ hover: type });
  };

  render() {
    const { hover } = this.state;
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <ul className={styles['nav-ul']} id={styles.right}>
            <li className={`${styles['nav-li']} ${styles['nav-hover']}`}>
              About
            </li>
            <li
              className={`${styles['nav-li']} ${styles['nav-hover']} ${
                styles['nav-popup']
              }`}
              onMouseOver={() => this.handleHover('country')}
              onMouseOut={() => this.handleHover('none')}
            >
              UK
              {hover === 'country' ? (
                <span className={styles['toggle-icon']}>-</span>
              ) : (
                <span className={styles['toggle-icon']}>+</span>
              )}
              <Popup
                options={[
                  { name: 'UK', value: 'uk' },
                  { name: 'US', value: 'us' },
                ]}
              />
            </li>
            <li
              className={`${styles['nav-li']} ${styles['nav-hover']} ${
                styles['nav-popup']
              }`}
              onMouseOver={() => this.handleHover('currency')}
              onMouseOut={() => this.handleHover('none')}
            >
              GBP{' '}
              {hover === 'currency' ? (
                <span className={styles['toggle-icon']}>-</span>
              ) : (
                <span className={styles['toggle-icon']}>+</span>
              )}
              <Popup
                options={[
                  { name: '£ (GBP)', value: 'gbp' },
                  { name: '$ (USD)', value: 'usd' },
                  { name: '€ (EUR)', value: 'eur' },
                ]}
              />
            </li>
            <li
              className={`${styles['nav-li']} ${styles['nav-hover']}`}
              id={styles['nav-user']}
            >
              <i className="far fa-user" />
              <span id={styles['user-popup']}>
                <ul className={styles['nav-ul']}>
                  <li className={styles['nav-li-popup']}>Login</li>
                  <li className={styles['nav-li-popup']}>My Profile</li>
                  <li className={styles['nav-li-popup']}>My Orders</li>
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
