import React, { Component } from 'react';
import styles from './css/content.module.css';
import { ImageTitle, ProductGrid } from '.';

class Content extends Component {
  render() {
    return (
      <div id={styles.content}>
        <ImageTitle text="I Love Ruby" imagePath="../images/new-in-image.jpg" />
        <ProductGrid />
      </div>
    );
  }
}

export default Content;
