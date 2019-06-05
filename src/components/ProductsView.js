import React, { Component } from 'react';
import styles from './css/content.module.css';
import { connect } from 'react-redux';
import { getProducts } from '../store/products';
import { ImageTitle, ProductGrid } from '.';
import { withRouter } from 'react-router-dom';

class Content extends Component {
  async componentDidMount() {
    const { catagory, productType } = this.props.match.params;
    await this.props.getProducts(catagory, productType);
  }

  render() {
    return (
      <div id={styles.content}>
        <ImageTitle text="I Love Ruby" imagePath="../images/example_pic.jpg" />
        <ProductGrid />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProducts: (catagory, productType) =>
    dispatch(getProducts(catagory, productType)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Content)
);
