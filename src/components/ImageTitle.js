import React, { Component } from 'react';
import styles from './css/content.module.css';

export default class ImageTitle extends Component {
  render() {
    const { text } = this.props;
    return (
      <div
        className={styles['image-container']}
        style={{
          backgroundImage: `url(${require('../images/new-in-image.jpg')})`,
        }}
      >
        <span className={styles['image-text']}>{text}</span>
      </div>
    );
  }
}
