import React, { Component } from 'react';
import stylesContent from '../css/content.module.css';
import styles from '../css/login-signup.module.css';
import { SignUpForm, LoginForm } from '..';

export default class LoginSignUp extends Component {
  state = {};

  render() {
    return (
      <div
        id={stylesContent['content']}
        className={`${styles['forms-container']}`}
      >
        <section className={styles['section']}>
          <div className={`${styles['forms-container']}`}>
            <LoginForm />
            <SignUpForm />
          </div>
        </section>
      </div>
    );
  }
}
