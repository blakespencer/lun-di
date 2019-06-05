import React, { Component } from 'react';
import styles from '../css/productProfile.module.css';

export default class QuickAddBar extends Component {
  render() {
    return (
      <div className={styles['quick-add-bar']}>
        <div className={styles['quick-add-text']}>
          <span className={styles['span']}>+</span> Quick Add
        </div>
      </div>
    );
  }
}
