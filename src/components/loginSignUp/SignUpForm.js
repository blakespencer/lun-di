import React, { Component } from 'react';
import styles from '../css/login-signup.module.css';
import axios from 'axios';
import { Input } from '..';
import { validate } from './utils';

export default class loginForm extends Component {
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
      placeholder: 'Password',
      type: 'password',
      hasErrored: false,
    },
    firstName: {
      typed: false,
      value: '',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'First Name',
      type: 'text',
    },
    lastName: {
      typed: false,
      value: '',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'Last Name',
      type: 'text',
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

  handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const { email, password, firstName, lastName } = this.state;
      axios.post('/api/users/registerUser', {
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { password, email } = this.state;
    const names = Object.keys(this.state).filter(el => el !== 'isDisabled');
    const isDisabled =
    Object.values(this.state).reduce((i, j) => {
      return i.isError || j.isError || !i.value || !j.value;
    }) || password.value.length < 6;
      // ||  /\S+@\S+\.\S+/.test(email.value)
    return (
      <div className={styles['form-container']}>
        <div className={styles['form-title']}>New Member</div>
        <form onSubmit={this.handleSubmit} className={styles['form']}>
          {names.map(name => {
            return (
              <Input
                name={name}
                handleChange={this.handleChange}
                data={this.state[name]}
                key={`sign-up-${name}`}
              />
            );
          })}
          <button type="submit" disabled={isDisabled} className={styles['button']}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
