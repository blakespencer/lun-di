import React, { Component } from 'react';
import styles from '../css/product-page.module.css';

export default class ProductQuantityInput extends Component {
  render() {
    const { quantity, handleClick } = this.props;
    return (
      <div className={styles['quantity-container']}>
        <div className={styles['quantity-btn']} onClick={() => handleClick(-1)}>
          -
        </div>
        <div>{quantity}</div>
        <div className={styles['quantity-btn']} onClick={() => handleClick(1)}>
          +
        </div>
      </div>
    );
  }
}
