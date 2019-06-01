import React, { Component } from 'react';
import styles from '../css/nav.module.css';

export default class Popup extends Component {
  state = {
    selected: 'uk',
  };

  handleChange = evt => {
    this.setState({
      selected: evt.target.name,
    });
  };

  render() {
    return (
      <span className={`${styles['popup']} ${styles['toolbox-user']}`}>
        <ul className={styles['nav-ul']}>
          {this.props.options.map(el => (
            <li className={styles['nav-li-popup']}>
              <input
                type="radio"
                name={el.name}
                value={el.value}
                checked={this.state.selected === el.name}
                onChange={this.handleChange}
              />
              {el.name}
            </li>
          ))}
        </ul>
      </span>
    );
  }
}
