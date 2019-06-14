import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styles from '../css/nav.module.css';
import { Popup, UserPopup, CartPopup } from '../';
class NavBarRight extends Component {
  state = {
    hover: 'none',
    country: 'UK',
    currency: 'GBP',
    cartCount: 0,
  };

  handleHover = type => {
    this.setState({ hover: type });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  countCart = cart => {
    let cartCount = 0;
    cart.forEach(item => {
      cartCount += item.quantity;
    });
    this.setState({
      cartCount,
    });
    console.log('hello');
  };

  render() {
    const { hover, country, currency, cartCount } = this.state;
    return (
      <React.Fragment>
        <MediaQuery maxWidth={1025}>
          <ul className={styles['nav-ul']} id={styles.right}>
            <li className={`${styles['nav-li']}`} id={styles['nav-user']}>
              <i className="far fa-user" />
              <UserPopup />
            </li>
            <li className={styles['nav-li']}>
              <i className="fas fa-shopping-cart" />
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery minWidth={1026}>
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
              {country}{' '}
              {hover === 'country' ? (
                <span className={styles['toggle-icon']}>-</span>
              ) : (
                <span className={styles['toggle-icon']}>+</span>
              )}
              <Popup
                options={[
                  { name: 'UNITED KINGDOM', value: 'UK' },
                  { name: 'UNITED STATES', value: 'US' },
                ]}
                handleChange={this.handleChange}
                checked={country}
                type="country"
              />
            </li>
            <li
              className={`${styles['nav-li']} ${styles['nav-hover']} ${
                styles['nav-popup']
              }`}
              onMouseOver={() => this.handleHover('currency')}
              onMouseOut={() => this.handleHover('none')}
            >
              {currency}{' '}
              {hover === 'currency' ? (
                <span className={styles['toggle-icon']}>-</span>
              ) : (
                <span className={styles['toggle-icon']}>+</span>
              )}
              <Popup
                options={[
                  { name: '£ (GBP)', value: 'GBP' },
                  { name: '$ (USD)', value: 'USD' },
                  { name: '€ (EUR)', value: 'EUR' },
                ]}
                handleChange={this.handleChange}
                checked={currency}
                type="currency"
              />
            </li>
            <li
              className={`${styles['nav-li']} ${styles['nav-hover']}`}
              id={styles['nav-user']}
            >
              <i className="far fa-user" />
              <UserPopup />
            </li>
            <li className={`${styles['nav-li']}`} id={styles['nav-cart']}>
              <i className="fas fa-shopping-cart" />
              {!!cartCount && (
                <div className={styles['cart-count']}>{cartCount}</div>
              )}
              <CartPopup countCart={this.countCart} />
            </li>
          </ul>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
export default NavBarRight;
