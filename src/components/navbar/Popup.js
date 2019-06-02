import React, { Component } from 'react';
import styles from '../css/nav.module.css';

export default class Popup extends Component {
  render() {
    const { type, checked } = this.props;
    return (
      <span className={`${styles['popup']} ${styles['toolbox-user']}`}>
        <ul className={styles['nav-ul']}>
          {this.props.options.map(el => (
            <li className={styles['nav-li-popup']} key={el.name}>
              <input
                type="radio"
                name={type}
                value={el.value}
                checked={checked === el.value}
                onChange={this.props.handleChange}
              />
              {el.name}
            </li>
          ))}
        </ul>
      </span>
    );
  }
}
