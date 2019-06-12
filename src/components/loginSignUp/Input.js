import React, { Component } from 'react';
import styles from '../css/login-signup.module.css';

export default class Input extends Component {
  render() {
    const { name, data, handleChange } = this.props;
    let { type, value, placeholder, isError, errorMessage } = data;
    return (
      <React.Fragment>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required
          className={`${isError ? `${styles['warning']}` : null}`}
        />
        <div className={isError ? styles['error'] : styles['no-error']}>
          {errorMessage}
        </div>
      </React.Fragment>
    );
  }
}
