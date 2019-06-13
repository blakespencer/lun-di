import React, { Component } from 'react';
import styles from '../css/nav.module.css';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../store/user';
import { connect } from 'react-redux';

class UserPopup extends Component {
  render() {
    const { isLoggedIn, logoutUser } = this.props;
    return (
      <span id={styles['user-popup']}>
        <ul className={styles['nav-ul']}>
          {isLoggedIn ? (
            <React.Fragment>
              <li className={styles['nav-li-popup']}>My Profile</li>
              <li className={styles['nav-li-popup']}>My Orders</li>
              <li className={styles['nav-li-popup']} onClick={logoutUser}>
                Log Out
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className={styles['nav-li-popup']}>
                <NavLink to="/login" className={styles['a']}>
                  Login
                </NavLink>
              </li>
              <li className={styles['nav-li-popup']}>My Profile</li>
              <li className={styles['nav-li-popup']}>My Orders</li>
            </React.Fragment>
          )}
        </ul>
      </span>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isLoggedIn: !!user.email,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPopup);
