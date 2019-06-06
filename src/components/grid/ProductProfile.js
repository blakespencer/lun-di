import React, { Component } from 'react';
import styles from '../css/product-profile.module.css';
import Background from '../../images/example_pic.jpg';
import { ImageHover } from '..';
import { NavLink } from 'react-router-dom';

export default class ProductProfile extends Component {
  render() {
    const { name, brand, price } = this.props;
    const brandName = brand.name.replace(/-/g, ' ');
    return (
      <NavLink to="/" className={styles['a']}>
        <div className={styles['product-item']}>
          <ImageHover name={name} />
          <div className={styles['text']}>
            <div className={styles['text-brand']}>{brandName}</div>
            <div>{name}</div>
            <div>{`$${price}`}</div>
          </div>
        </div>
      </NavLink>
    );
  }
}
