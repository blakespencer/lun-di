import React, { Component } from 'react';
import styles from '../css/login-signup.module.css';

export default class LoginForm extends Component {
  state = {
    email: { typed: false, value: '' },
    password: { typed: false, value: '' },
    firstName: { typed: false, value: '' },
    lastName: { typed: false, value: '' },
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: { typed: true, value: evt.target.value },
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles['form-container']}>
        <div className={styles['form-title']}>Login</div>
        <form onSubmit={this.handleSubmit} className={styles['form']}>
          <input
            type="email"
            name="email"
            value={email.value}
            onChange={this.handleChange}
            placeholder="Email Address"
            required
            id={`${
              email.typed && !email.value ? `${styles['warning']}` : null
            }`}
          />
          <input
            type="password"
            name="password"
            value={password.value}
            onChange={this.handleChange}
            placeholder="Password"
            required
            id={`${
              password.typed && !password.value ? `${styles['warning']}` : null
            }`}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
