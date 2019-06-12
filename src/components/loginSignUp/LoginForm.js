import React, { Component } from 'react';
import styles from '../css/login-signup.module.css';
import { Input } from '../index';

export default class LoginForm extends Component {
  state = {
    email: {
      typed: false,
      value: '',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'Email Address',
      type: 'email',
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
    // create a utils folder for this function it is a mess
    let errorMessage = 'This field is required';
    const name = evt.target.name;
    const value = evt.target.value;
    let { isError, hasErrored } = this.state[name];
    if (!value) {
      isError = true;
      hasErrored = true;
    } else if (value.length > 6 && name === 'password') {
      hasErrored = true;
    } else if (name === 'password' && value.length < 6 && hasErrored) {
      isError = true;
      errorMessage = 'Must be atleast 6 characters';
    } else {
      isError = false;
    }

    this.setState({
      [name]: {
        ...this.state[name],
        typed: true,
        value: value,
        errorMessage,
        isError,
        hasErrored,
      },
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    const names = Object.keys(this.state).filter(el => el !== 'isDisabled');
    const isDisabled = Object.values(this.state).reduce(
      (i, j) => i.isError || j.isError
    );
    console.log(isDisabled);
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
          <button type="submit" disabled={isDisabled}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
