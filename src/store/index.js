import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import products from './products';
import cart from './cart';
import isDisplayCartPopup from './isDisplayCartPopup';
import product from './product';

import catagories from './catagories';

const reducer = combineReducers({
  user,
  products,
  product,
  catagories,
  cart,
  isDisplayCartPopup,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
