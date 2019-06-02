import React, { Component } from 'react';
import styles from './css/content.module.css';
import Background from '../images/example_pic.jpg';
import axios from 'axios';

export default class Content extends Component {
  async componentDidMount() {
    const res = await axios.get(`/api/products`);
    console.log(res.data);
  }

  render() {
    return (
      <div id={styles.content}>
        <div
          className={styles['image-container']}
          style={{ backgroundImage: `url(${Background})` }}
        >
          {/* <img className={styles.picture} src={Background} /> */}
          <span className={styles['image-text']}>I LOVE RUBY</span>
        </div>
        {/* <div styles={{ backgroundImage: `url(${Background})` }} /> */}
      </div>
    );
  }
}
