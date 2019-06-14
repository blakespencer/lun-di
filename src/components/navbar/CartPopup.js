import React, { Component } from 'react';
import stylesNav from '../css/nav.module.css';
import styles from '../css/cart-popup.module.css';
import { connect } from 'react-redux';
import {
  displayCartPopup,
  hideCartPopup,
} from '../../store/isDisplayCartPopup';
import { CartItemProfile } from '../index';

class CartPopup extends Component {
  handleClick = evt => {
    this.props.hideCartPopup();
  };

  handleHover = evt => {
    if (this.props.isDisplayCartPopup) {
      this.props.hideCartPopup();
    }
  };

  render() {
    const { cart } = this.props;
    this.props.countCart(cart);
    const isEmpty = !cart.length;
    const { isDisplayCartPopup } = this.props;
    return (
      <span
        className={stylesNav['cart-popup']}
        id={isDisplayCartPopup ? stylesNav['cart-popup-visible'] : null}
        ref={node => (this.node = node)}
        onMouseOver={this.handleHover}
      >
        <div>
          <div className={styles['popup-container']}>
            <h3>Your Bag Summary</h3>
            {isEmpty && <div>You're bag is empty</div>}
            {cart.map(item => {
              return <CartItemProfile item={item} key={item.productId} />;
            })}
          </div>
        </div>
      </span>
    );
  }
}

const mapStateToProps = ({ cart, isDisplayCartPopup }) => ({
  cart,
  isDisplayCartPopup,
});

const mapDispatchToProps = dispatch => ({
  displayCartPopup: () => dispatch(displayCartPopup()),
  hideCartPopup: () => dispatch(hideCartPopup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPopup);
