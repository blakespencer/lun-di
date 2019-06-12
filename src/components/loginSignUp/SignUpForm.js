import React, { Component } from 'react';
import styles from '../css/login-signup.module.css';
import axios from 'axios';
import { Input } from '..';

export default class loginForm extends Component {
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
    isDisabled: false,
  };

  handleChange = evt => {
    // create a utils folder for this function it is a mess
    let errorMessage = 'This field is required';
    const name = evt.target.name;
    const value = evt.target.value;
    let { isError, hasErrored } = this.state[name];
    let { isDisabled } = this.state;
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
    if (isError) {
      isDisabled = true;
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
      isDisabled,
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
    const names = Object.keys(this.state).filter(el => el !== 'isDisabled');
    const { isDisabled } = this.state;
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
          <button
            type="submit"
            className={isDisabled ? styles['disabled'] : null}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
