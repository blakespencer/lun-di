import axios from 'axios';

// ACTION TYPES

const GET_CATAGORIES = 'GET_CATAGORIES';

// INITIAL STATE

const defaultProducts = [];

// ACTION CREATROS

const gotCatagories = payload => ({ type: GET_CATAGORIES, payload });

// THUNK CREATORS
export const getCatagories = () => async dispatch => {
  try {
    const res = await axios.get('/api/catagories');
    dispatch(gotCatagories(res.data || defaultProducts));
  } catch (err) {
    console.error(err);
  }
};

// REDUCER
export default (state = defaultProducts, action) => {
  switch (action.type) {
    case GET_CATAGORIES:
      return action.payload;
    default:
      return state;
  }
};
