import React, { Component } from 'react';
import styles from './css/content.module.css';
import { ProductGrid } from '.';
import { connect } from 'react-redux';
import { getProducts } from '../store/products';

class Collections extends Component {
  async componentDidMount() {
    await this.props.getProducts();
  }
  render() {
    return (
      <div id={styles['content']}>
        <ProductGrid />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(
  null,
  mapDispatchToProps
)(Collections);
