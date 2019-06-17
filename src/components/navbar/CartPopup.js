import React, { Component } from 'react';
import stylesNav from '../css/nav.module.css';
import styles from '../css/cart-popup.module.css';
import { connect } from 'react-redux';
import { hideCartPopup } from '../../store/isDisplayCartPopup';
import { CartItemProfile } from '../index';

class CartPopup extends Component {
  handleHover = evt => {
    const { isDisplayCartPopup, hideCartPopup } = this.props;
    if (isDisplayCartPopup) {
      hideCartPopup();
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  };

  componentDidUpdate(nextProps) {
    if (nextProps.isDisplayCartPopup) {
      document.addEventListener('click', this.handleOutsideClick, false);
    }
  }

  handleOutsideClick = evt => {
    const isAddQuick = !evt.target.className.includes(
      'product-profile_quick-add-text'
    );
    const { isDisplayCartPopup, hideCartPopup } = this.props;
    if (!this.node.contains(evt.target) && isDisplayCartPopup && isAddQuick) {
      hideCartPopup();
    }
  };

  render() {
    const { cart } = this.props;
    this.props.countCart(cart);
    const isEmpty = !cart.length;
    const { isDisplayCartPopup } = this.props;
    const total = cart.reduce((acc, curr) => {
      return acc + curr.product.price * curr.quantity;
    }, 0);
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
            {isEmpty ? (
              <div>Your bag is empty</div>
            ) : (
              <>
                <div className={styles['cart-item-container']}>
                  {cart.map(item => {
                    return <CartItemProfile item={item} key={item.productId} />;
                  })}
                </div>
                <div>
                  <div className={styles['popup-price']}>
                    <div>Subtotal</div>
                    <div>{`$${total}`}</div>
                  </div>
                  <button type="submit" className={styles['btn']}>
                    Checkout
                  </button>
                </div>
              </>
            )}
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
  hideCartPopup: () => dispatch(hideCartPopup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPopup);
