// import axios from 'axios';

// // ACTION TYPES

// const GET_PRODUCTS_TYPES = 'GET_PRODUCTS_TYPES';

// // INITIAL STATE

// const defaultProductTypes = [];

// // ACTION CREATROS

// const gotProductTypes = payload => ({ type: GET_PRODUCTS_TYPES, payload });

// // THUNK CREATORS
// export const getProductTypes = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/productTypes');
//     dispatch(gotProductTypes(res.data || defaultProductTypes));
//   } catch (err) {
//     console.error(err);
//   }
// };

// // REDUCER
// export default (state = defaultProductTypes, action) => {
//   switch (action.type) {
//     case GET_PRODUCTS_TYPES:
//       return action.payload;
//     default:
//       return state;
//   }
// };
