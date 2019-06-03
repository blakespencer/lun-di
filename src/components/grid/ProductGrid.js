import React, { Component } from 'react';
import styles from '../css/product-grid.module.css';
import { connect } from 'react-redux';
import { ProductProfile, FilterBar } from '..';
import MediaQuery from 'react-responsive';

class ProductGrid extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className={styles['grid-container']}>
        <MediaQuery query="(min-device-width: 1224px)">
          <div className={styles['menu']}>MENU</div>
        </MediaQuery>
        <div>
          <FilterBar />
          <div className={styles['grid-items']}>
            {products.map(el => {
              return <ProductProfile {...el} key={el.id} />;
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
