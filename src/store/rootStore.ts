import * as Redux from 'redux';
import thunk from 'redux-thunk';

import {productsReducer} from './products/productsReducer';

const reducers = {
  products: productsReducer,
};

const rootReducer = Redux.combineReducers(reducers);

export type RootStore = ReturnType<typeof rootReducer>;

export const rootStore = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(thunk),
);
