import React, { Component } from 'react';
import styles from '../css/product-grid.module.css';
import { connect } from 'react-redux';
import { ProductProfile, FilterBar, LeftNav } from '..';
import MediaQuery from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { getProducts } from '../../store/products';

class ProductGrid extends Component {
  async componentDidMount() {
    const { catagory, productType } = this.props.match.params;
    await this.props.getProducts(catagory, productType);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.productType === prevProps.match.params.productType
    ) {
      return;
    }
    const { catagory, productType } = this.props.match.params;
    await this.props.getProducts(catagory, productType);
  }

  render() {
    const { products } = this.props;
    return (
      <div className={styles['grid-container']}>
        <MediaQuery minWidth={768}>
          <LeftNav />
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

const mapDispatchToProps = dispatch => ({
  getProducts: (catagory, productType) =>
    dispatch(getProducts(catagory, productType)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductGrid)
);
