import React, { Component } from 'react';
import styles from '../css/product-profile.module.css';
import { updateCart } from '../../store/cart';
import { connect } from 'react-redux';

class ImageHover extends Component {
  handleClick = (evt, productId, skuId) => {
    evt.preventDefault();
    this.props.updateCart(productId, skuId, 1);
  };

  render() {
    const { name, id, skus } = this.props;
    return (
      <div
        className={styles['image-container']}
        style={{
          backgroundImage: `url(${require('../../images/product_image.jpg')})`,
        }}
        id={name}
      >
        <div className={`${styles['quick-add-bar-container']}`}>
          <div className={`${styles['quick-add-bar']}`}>
            <div className={styles['quick-add-text']}>+ Quick Add</div>
          </div>
          <div
            className={`${styles['quick-add-bar-alt']}`}
            // onClick={evt => this.handleClick(evt, id)}
          >
            <div className={styles['quick-add-text']}>
              {skus.map(size => {
                return (
                  <div
                    className={styles['quick-add-size']}
                    onClick={evt => this.handleClick(evt, id, size.id)}
                  >
                    <div>{size.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCart: (productId, skuId, quantity) =>
    dispatch(updateCart(productId, skuId, quantity)),
});

export default connect(
  null,
  mapDispatchToProps
)(ImageHover);
