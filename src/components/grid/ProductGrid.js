import React, { Component } from 'react';
import styles from '../css/product-grid.module.css';
import { connect } from 'react-redux';
import { ProductProfile, FilterBar } from '..';

class ProductGrid extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className={styles['grid-container']}>
        <div className={styles['menu']}>MENU</div>
        <div>
          <FilterBar />
          <div className={styles['grid-items']}>
            {products.map(el => {
              return <ProductProfile {...el} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(ProductGrid);
