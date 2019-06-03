import React, { Component } from 'react';
import styles from './css/content.module.css';
import { connect } from 'react-redux';
import { getProducts } from '../store/products';
import { ImageTitle, ProductGrid } from './';

class Content extends Component {
  async componentDidMount() {
    await this.props.getProducts();
  }

  render() {
    console.log(this.props);
    return (
      <div id={styles.content}>
        <ImageTitle text="I Love Ruby" imagePath="../images/example_pic.jpg" />
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
)(Content);
