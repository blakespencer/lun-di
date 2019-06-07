import React, { Component } from 'react';
import styles from '../css/login-signup.module.css';

export default class loginForm extends Component {
  state = {
    email: {
      typed: false,
      value: '',
      errorMessage: 'This field is required',
      isError: false,
    },
    password: {
      typed: false,
      value: '',
      errorMessage: 'This field is required',
    },
    firstName: {
      typed: false,
      value: '',
      errorMessage: 'This field is required',
      isError: false,
    },
    lastName: {
      typed: false,
      value: '',
      errorMessage: 'This field is required',
      isError: false,
    },
  };

  handleChange = evt => {
    let isError = false;
    let errorMessage = 'This field is required';
    if (!evt.target.value) {
      isError = true;
    }
    this.setState({
      [evt.target.name]: {
        typed: true,
        value: evt.target.value,
        errorMessage,
        isError,
      },
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <div className={styles['form-container']}>
        <div className={styles['form-title']}>New Member</div>
        <form onSubmit={this.handleSubmit} className={styles['form']}>
          <input
            type="email"
            name="email"
            value={email.value}
            onChange={this.handleChange}
            placeholder="Email Address"
            required
            id={`${email.isError ? `${styles['warning']}` : null}`}
          />
          <div
            className={password.isError ? styles['error'] : styles['no-error']}
          >
            {email.errorMessage}
          </div>
          <input
            type="password"
            name="password"
            value={password.value}
            onChange={this.handleChange}
            placeholder="Password"
            required
            id={`${password.isError ? `${styles['warning']}` : null}`}
          />
          <div
            className={password.isError ? styles['error'] : styles['no-error']}
          >
            {password.errorMessage}
          </div>
          <input
            type="text"
            name="firstName"
            value={firstName.value}
            onChange={this.handleChange}
            placeholder="First Name"
            required
            id={`${firstName.isError ? `${styles['warning']}` : null}`}
          />
          <div
            className={password.isError ? styles['error'] : styles['no-error']}
          >
            {firstName.errorMessage}
          </div>
          <input
            type="text"
            name="lastName"
            value={lastName.value}
            onChange={this.handleChange}
            placeholder="Last Name"
            required
            id={`${lastName.isError ? `${styles['warning']}` : null}`}
          />
          <div
            className={password.isError ? styles['error'] : styles['no-error']}
          >
            {lastName.errorMessage}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
