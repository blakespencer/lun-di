import React, { Component } from 'react';
import styles from '../css/product-profile.module.css';
import { ImageHover } from '..';
import { NavLink } from 'react-router-dom';

export default class ProductProfile extends Component {
  render() {
    const { name, brand, price, id } = this.props;
    const brandName = brand.name.replace(/-/g, ' ');
    return (
      <NavLink to="/" className={styles['a']}>
        <div className={styles['product-item']}>
          <ImageHover name={name} id={id} />
          <div className={styles['text']}>
            <div className={styles['text-brand']}>{brandName}</div>
            <div className={styles['text-info']}>{name}</div>
            <div className={styles['text-info']}>{`$${price}`}</div>
          </div>
        </div>
      </NavLink>
    );
  }
}
