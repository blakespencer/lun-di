import React, { Component } from 'react';
import styles from './css/content.module.css';
import Background from '../images/example_pic.jpg';

export default class ImageTitle extends Component {
  render() {
    const { imagePath, text } = this.props;
    return (
      <div
        className={styles['image-container']}
        style={{
          backgroundImage: `url(${require('../images/example_pic.jpg')})`,
        }}
      >
        <span className={styles['image-text']}>{text}</span>
      </div>
    );
  }
}