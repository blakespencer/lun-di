import React, { Component } from 'react';
import styles from '../css/login-signup.module.css';
import { Input } from '../index';
import { validate, isDisabledButton } from './utils';
import { connect } from 'react-redux';
import { loginUser } from '../../store/user';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    email: {
      typed: false,
      value: 'me@me.com',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'Email Address',
      type: 'email',
      hasErrored: false,
    },
    password: {
      typed: false,
      value: 'soccer',
      errorMessage: 'This field is required',
      isError: false,
      placeholder: 'Password',
      type: 'password',
      hasErrored: false,
    },
    error: '',
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
    const { email, password } = this.state;
    try {
      const res = await this.props.loginUser({
        email: email.value,
        password: password.value,
      });
      if (!res.error) {
        this.props.history.goBack();
      } else {
        this.setState({
          error: res.error,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const names = Object.keys(this.state).filter(name => name !== 'error');
    // This is checking to see if there are errors
    const isDisabled = isDisabledButton(this.state);
    const { error } = this.state;
    return (
      <div className={styles['form-container']}>
        <div className={styles['form-title']}>Login</div>
        <form onSubmit={this.handleSubmit} className={styles['form']}>
          {error && <div className={styles['server-error']}>{error}</div>}
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
          <button
            type="submit"
            disabled={isDisabled}
            className={styles['button']}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LoginForm)
);
