import axios from 'axios';

// ACTION TYPES

const GET_PRODUCTS = 'GET_PRODUCTS';

// INITIAL STATE

const defaultProducts = [];

// ACTION CREATROS

const gotProducts = payload => ({ type: GET_PRODUCTS, payload });

// THUNK CREATORS
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');
    dispatch(gotProducts(res.data || defaultProducts));
  } catch (err) {
    console.error(err);
  }
};

// REDUCER
export default (state = defaultProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
