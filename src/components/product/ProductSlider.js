import React, { Component } from 'react';
import styles from '../css/product-page.module.css';

export default class ProductSlider extends Component {
  state = {
    activeIndex: 0,
  };

  handleClick = (length, isLeft) => {
    let addition = 1;
    if (isLeft) addition = -1;
    const { activeIndex } = this.state;
    if (activeIndex < length && !isLeft) {
      this.setState({ activeIndex: activeIndex + addition });
    } else if (activeIndex > 0 && isLeft) {
      this.setState({ activeIndex: activeIndex + addition });
    }
  };

  render() {
    const imagePaths = [
      require('../../images/product_image.jpg'),
      require('../../images/product_image1.jpg'),
      require('../../images/product_image.jpg'),
      require('../../images/product_image1.jpg'),
      require('../../images/product_image.jpg'),
    ];
    const { activeIndex } = this.state;
    return (
      <div className={styles['slider']}>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            transform: `translateX(-${activeIndex *
              (100 / imagePaths.length)}%)`,
            transition: 'transform 300ms ease-in',
          }}
        >
          {imagePaths.map((img, idx) => {
            return (
              <img className={styles['img']} src={imagePaths[idx]} alt="" />
            );
          })}
        </div>
        <div onClick={() => this.handleClick(imagePaths.length - 1, false)}>
          <i className={`fas fa-chevron-right ${styles['icon-right']}`} />
        </div>
        <div onClick={() => this.handleClick(imagePaths.length - 1, true)}>
          <i className={`fas fa-chevron-left ${styles['icon-left']}`} />
        </div>
      </div>
    );
  }
}
