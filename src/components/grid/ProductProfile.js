import React, { Component } from 'react';
import styles from '../css/product-grid.module.css';
import Background from '../../images/example_pic.jpg';

export default class ProductProfile extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <div className={styles['product-item']}>
        <div
          className={styles['image-container']}
          style={{
            backgroundImage: `url(${require('../../images/product_image.jpg')})`,
          }}
        />
        <div>{name}</div>
        <div>{description}</div>
      </div>
    );
  }
}
