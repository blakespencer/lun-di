import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../css/product-page.module.css';
import { connect } from 'react-redux';
import { getProduct, removeProduct } from '../../store/product';
import { ProductSlider, ProductQuantityInput, ProductSize } from '../';
import { updateCart } from '../../store/cart';
import _ from 'lodash';

class ProductPage extends Component {
  state = {
    quantity: 1,
    size: 'Select Size',
    valueSequence: 1,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProduct(id);
    this.props.removeProduct();
  }

  componentWillUnmount() {
    this.props.removeProduct();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state)
    );
  }

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

  handleAddBag = () => {
    const { id } = this.props.match.params;
    const { quantity, skuId } = this.state;
    this.props.updateCart(id, skuId, quantity);
  };

  handleQuantityClick = addition => {
    const quantity = addition + this.state.quantity;
    if (quantity >= 1) {
      this.setState({
        quantity,
      });
    }
  };

  handleChange = (skuId, size) => {
    this.setState({ size: size, skuId: skuId });
  };

  render() {
    const { product } = this.props;
    const { name, description, price, brand } = product;
    const brandName = brand && brand.name;
    const { quantity, size } = this.state;
    return (
      <div id={styles['content']}>
        <div className={styles['product-page']}>
          <ProductSlider />
          <div className={styles['product-info']}>
            <div>{brandName}</div>
            <div>{`Product Page ${name}`}</div>
            <div>{`$ ${price}`}</div>
            <div>{`${description}`}</div>
            <div className={styles['inputs-container']}>
              <ProductSize
                handleChange={this.handleChange}
                product={product}
                size={size}
              />
              <ProductQuantityInput
                quantity={quantity}
                handleClick={this.handleQuantityClick}
              />
            </div>
            <button
              className={styles['btn']}
              onClick={this.handleAddBag}
              disabled={size === 'Select Size'}
            >
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => ({
  product,
});

const mapDispatchToProps = dispatch => ({
  getProduct: productId => dispatch(getProduct(productId)),
  removeProduct: () => dispatch(removeProduct()),
  updateCart: (productId, skuId, quantity) =>
    dispatch(updateCart(productId, skuId, quantity)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductPage)
);
