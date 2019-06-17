import axios from 'axios';

// ACTION TYPES

const GET_PRODUCT = 'GET_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

// INITIAL STATE

const defaultProduct = {};

// ACTION CREATROS

const gotProduct = payload => ({ type: GET_PRODUCT, payload });
export const removeProduct = payload => ({ type: REMOVE_PRODUCT });

// THUNK CREATORS
export const getProduct = productId => async dispatch => {
  try {
    const res = await axios.get(`/api/product/${productId}`);
    dispatch(gotProduct(res.data || defaultProduct));
  } catch (err) {
    console.error(err);
  }
};

// REDUCER
export default (state = defaultProduct, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return action.payload;
    case REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};
