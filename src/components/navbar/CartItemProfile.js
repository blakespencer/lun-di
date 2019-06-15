import React, { Component } from 'react';
import styles from '../css/cart-popup.module.css';
import { connect } from 'react-redux';
import { incItem } from '../../store/cart';

class CartItemProfile extends Component {
  handleClick = addition => {
    const productId = this.props.item.product.id;
    this.props.incItem(productId, addition);
  };

  render() {
    const { id, picture, name, description, price } = this.props.item.product;
    const { quantity } = this.props.item;
    return (
      <div className={styles['item-profile-container']}>
        <img
          src={`${require('../../images/product_image2.jpg')}`}
          alt=""
          className={styles['image']}
        />
        <div className={styles['item-info']}>
          <div>{name}</div>
          <div>{`$${price}`}</div>
          <div className={styles['item-quantity']}>
            <div
              className={styles['item-quantity-btn']}
              onClick={() => {
                this.handleClick(-1);
              }}
            >
              -
            </div>
            <div>{quantity}</div>
            <div
              className={styles['item-quantity-btn']}
              onClick={() => {
                this.handleClick(1);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  incItem: (productId, addition) => dispatch(incItem(productId, addition)),
});

export default connect(
  null,
  mapDispatchToProps
)(CartItemProfile);
