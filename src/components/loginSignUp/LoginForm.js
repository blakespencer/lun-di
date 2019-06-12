import React, { Component } from 'react';
import styles from '../css/login-signup.module.css';
import { Input } from '../index';
import { validate } from './utils';

export default class LoginForm extends Component {
  state = {
    email: {
      typed: false,
      value: '',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'Email Address',
      type: 'email',
      hasErrored: false,
    },
    password: {
      typed: false,
      value: '',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'Password',
      type: 'password',
      hasErrored: false,
    },
  };

  handleChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState({
      [name]: {
        ...this.state[name],
        typed: true,
        value: value,
        ...validate(evt, this.state),
      },
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    const { password, email } = this.state;
    const names = Object.keys(this.state).filter(el => el !== 'isDisabled');
    // This is checking to see if there are errors
    const isDisabled =
      Object.values(this.state).reduce((i, j) => {
        return i.isError || j.isError || !i.value || !j.value;
      }) || password.value.length < 6;

    return (
      <div className={styles['form-container']}>
        <div className={styles['form-title']}>Login</div>
        <form onSubmit={this.handleSubmit} className={styles['form']}>
          {names.map(name => {
            return (
              <Input
                name={name}
                handleChange={this.handleChange}
                data={this.state[name]}
                key={name}
              />
            );
          })}
          <button type="submit" disabled={isDisabled} className={styles['button']}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
