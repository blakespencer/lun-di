import React, { Component } from 'react';
import styles from './css/content.module.css';
import Background from '../images/example_pic.png';

export default class Content extends Component {
  render() {
    return (
      <div id={styles.content}>
        <div
          className={styles['image-container']}
          style={{ backgroundImage: `url(${Background})` }}
        >
          {/* <img className={styles.picture} src={Background} /> */}
          <span className={styles['image-text']}>The Summer Collection</span>
        </div>
        {/* <div styles={{ backgroundImage: `url(${Background})` }} /> */}
      </div>
    );
  }
}
