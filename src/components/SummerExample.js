import React, { Component } from 'react';
import styles from './css/content.module.css';
import Background from '../images/example_pic.png';

export default class Content extends Component {
  render() {
    return (
      <div id={styles.content}>
        <img className={styles.picture} src={Background} />
        <div styles={{ backgroundImage: `url(${Background})` }} />
      </div>
    );
  }
}
