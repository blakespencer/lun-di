import React, { Component } from 'react';
import styles from '../css/cart-popup.module.css';
import { connect } from 'react-redux';
import { incItem, deleteItem } from '../../store/cart';

class CartItemProfile extends Component {
  handleClick = addition => {
    const productId = this.props.item.product.id;
    const skuId = this.props.item.skuId;
    const nextQuantity = this.props.item.quantity + addition;
    if (nextQuantity !== 0) {
      this.props.incItem(productId, skuId, addition);
    } else {
      this.props.deleteItem(productId, skuId);
    }
  };

  render() {
    // const { id, picture, name, description, price } = this.props.item.product;
    const { quantity, sku } = this.props.item;
    return (
      <div className={styles['item-profile-container']}>
        <img
          src={`${require('../../images/product_image2.jpg')}`}
          alt=""
          className={styles['image']}
        />
        <div className={styles['item-info']}>
          <div>{sku && `${sku.color.color} ${sku.description}`}</div>
          <div>{`$${sku && sku.price}`}</div>
          <div>{sku && sku.size.value}</div>
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
  incItem: (productId, skuId, addition) =>
    dispatch(incItem(productId, skuId, addition)),
  deleteItem: (productId, skuId) => dispatch(deleteItem(productId, skuId)),
});

export default connect(
  null,
  mapDispatchToProps
)(CartItemProfile);
