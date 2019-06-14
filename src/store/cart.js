import axios from 'axios';
import { displayCartPopup } from './isDisplayCartPopup';

// ACTION TYPES

const GET_CART = 'GET_CART';
const UPDATE_CART = 'UPDATE_CART';

// INITIAL STATE

const defaultCart = [];

// ACTION CREATROS

const gotCart = payload => ({ type: GET_CART, payload });
const updatedCart = payload => ({ type: UPDATE_CART, payload });

// THUNK CREATORS
export const getCart = accessString => async dispatch => {
  try {
    const res = await axios.get('/api/orders/cart', {
      headers: { Authorization: `JWT ${accessString}` },
    });
    dispatch(gotCart(res.data || defaultCart));
  } catch (err) {
    console.error(err);
  }
};

export const updateCart = (productId, quantity) => async dispatch => {
  try {
    const accessString = localStorage.getItem('JWT');
    const res = await axios.put(
      '/api/orders/cart',
      { productId, quantity },
      {
        headers: { Authorization: `JWT ${accessString}` },
      }
    );
    dispatch(updatedCart(res.data));
    dispatch(displayCartPopup());
  } catch (err) {
    console.log(err);
  }
};

// REDUCER
export default (state = defaultCart, action) => {
  switch (action.type) {
    case GET_CART:
      return action.payload;
    case UPDATE_CART:
      const newState = [];
      let isNew = true;
      state.forEach(el => {
        if (el.productId === action.payload.productId) {
          newState.push(action.payload);
          isNew = false;
        } else {
          newState.push(el);
        }
      });
      if (isNew) {
        newState.push(action.payload);
      }
      return newState;
    default:
      return state;
  }
};
