import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../css/product-page.module.css';
import { connect } from 'react-redux';
import { getProduct, removeProduct } from '../../store/product';
import { ProductSlider } from '../';
import { updateCart } from '../../store/cart';

class ProductPage extends Component {
  state = {
    quantity: 1,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProduct(id);
    this.props.removeProduct();
  }

  componentWillUnmount() {
    this.props.removeProduct();
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
    const { quantity } = this.state;
    this.props.updateCart(id, quantity);
  };

  render() {
    const { product } = this.props;
    console.log(product);
    const { name, description, price, brand } = product;
    const brandName = brand && brand.name;

    return (
      <div id={styles['content']}>
        <div className={styles['product-page']}>
          <ProductSlider />
          <div className={styles['product-info']}>
            <div>{brandName}</div>
            <div>{`Product Page ${name}`}</div>
            <div>{`$ ${price}`}</div>
            <div>{`${description}`}</div>

            <button className={styles['btn']} onClick={this.handleAddBag}>
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
  updateCart: (productId, quantity) =>
    dispatch(updateCart(productId, quantity)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductPage)
);
