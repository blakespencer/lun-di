import React, { Component } from 'react';
import styles from '../css/login-signup.module.css';
import { Input } from '..';
import { validate, isDisabledButton } from './utils';
import { connect } from 'react-redux';
import { registerUser } from '../../store/user';
import { withRouter } from 'react-router-dom';

class SignUpForm extends Component {
  state = {
    email: {
      typed: false,
      value: 'me@me.com',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'Email Address',
      type: 'email',
      hasErrored: false,
      serverError: false,
    },
    password: {
      typed: false,
      value: 'soccer',
      errorMessage: 'This field is required',
      placeholder: 'Password',
      isError: false,
      type: 'password',
      hasErrored: false,
    },
    firstName: {
      typed: false,
      value: 'b',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'First Name',
      type: 'text',
      hasErrored: false,
    },
    lastName: {
      typed: false,
      value: 's',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'Last Name',
      type: 'text',
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

  handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const { email, password, firstName, lastName } = this.state;
      const res = await this.props.registerUser({
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
      });
      if (res.data.status === 400) {
        this.setState({
          email: { ...email, serverError: true },
        });
      } else {
        this.setState({
          email: { ...email, serverError: false },
        });
        this.props.history.goBack();
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { email } = this.state;
    const names = Object.keys(this.state);
    const isDisabled = isDisabledButton(this.state);
    return (
      <div className={styles['form-container']}>
        <div className={styles['form-title']}>New Member</div>
        <form onSubmit={this.handleSubmit} className={styles['form']}>
          {email.serverError ? <div>Email already Exists</div> : <div />}
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
            disabled={isDisabled}
            className={styles['button']}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignUpForm)
);
