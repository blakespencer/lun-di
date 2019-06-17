import axios from 'axios';
import { displayCartPopup } from './isDisplayCartPopup';

// ACTION TYPES

const GET_CART = 'GET_CART';
const UPDATE_CART = 'UPDATE_CART';
const INC_ITEM = 'INC_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// INITIAL STATE

const defaultCart = [];

// ACTION CREATROS

const gotCart = payload => ({ type: GET_CART, payload });
const updatedCart = payload => ({ type: UPDATE_CART, payload });
const incrementedItem = payload => ({ type: INC_ITEM, payload });
const deletedItem = payload => ({ type: DELETE_ITEM, payload });

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

export const incItem = (productId, addition) => async dispatch => {
  try {
    const accessString = localStorage.getItem('JWT');
    const res = await axios.put(
      '/api/orders/cart/inc',
      { productId, addition },
      {
        headers: { Authorization: `JWT ${accessString}` },
      }
    );
    dispatch(incrementedItem(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteItem = productId => async dispatch => {
  try {
    const accessString = localStorage.getItem('JWT');
    const res = await axios.delete('/api/orders/cart/item', {
      headers: { Authorization: `JWT ${accessString}` },
      params: { productId },
    });
    dispatch(deletedItem(res.data));
    dispatch(displayCartPopup());
  } catch (err) {
    console.log(err);
  }
};

const updateHelper = (state, action) => {
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
    newState.unshift(action.payload);
  }
  return newState;
};

const deleteHelper = (state, action) => {
  const newState = [];
  state.forEach(el => {
    if (el.productId !== +action.payload.productId) {
      newState.push(el);
    }
  });
  return newState;
};

// REDUCER
export default (state = defaultCart, action) => {
  switch (action.type) {
    case GET_CART:
      return action.payload;
    case UPDATE_CART:
      return updateHelper(state, action);
    case INC_ITEM:
      return updateHelper(state, action);
    case DELETE_ITEM:
      return deleteHelper(state, action);
    default:
      return state;
  }
};
