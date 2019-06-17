import axios from 'axios';
import { getCart } from './cart';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISTER_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const gotUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const registeredUser = user => ({ type: REGISTER_USER, user });
const loggedInUser = user => ({ type: LOGIN_USER, user });

/**
 * THUNK CREATORS
 */

export const me = () => async dispatch => {
  try {
    let accessString = localStorage.getItem('JWT');
    if (accessString === null) {
      dispatch(gotUser(defaultUser));
    } else {
      const res = await axios.get('/api/users/me', {
        headers: { Authorization: `JWT ${accessString}` },
      });
      dispatch(gotUser(res.data));
      // Now we have a user, we can get the cart
      dispatch(getCart(accessString));
    }
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = user => async dispatch => {
  try {
    const { email, password, firstName, lastName, role } = user;
    const res = await axios.post('/api/users/registerUser', {
      email,
      password,
      firstName,
      lastName,
      role: role || 2,
    });
    const token = res.data.token;
    localStorage.setItem('JWT', token);
    dispatch(registeredUser(user));
    dispatch(getCart(token));
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const loginUser = user => async dispatch => {
  try {
    const { email, password } = user;
    const res = await axios.post('/api/users/loginUser', {
      email,
      password,
    });
    const { firstName, lastName, token, error } = res.data;
    if (error) {
      return { error };
    } else {
      localStorage.setItem('JWT', token);
      dispatch(loggedInUser({ email, firstName, lastName }));
      dispatch(getCart(token));
      console.log(res);
      return { firstName, lastName, email };
    }
  } catch (err) {
    console.error(err);
  }
};

export const logoutUser = () => async dispatch => {
  try {
    localStorage.clear();
    dispatch(removeUser());
  } catch (err) {
    console.log(err);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case LOGIN_USER:
      return action.user;
    case REGISTER_USER:
      return action.user;
    default:
      return state;
  }
}
