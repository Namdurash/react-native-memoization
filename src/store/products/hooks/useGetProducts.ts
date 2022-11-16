import * as React from 'react';
import * as Redux from 'react-redux';
import {thunkGetProducts} from '../productsActions';

export const useGetProducts = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(() => {
    dispatch(thunkGetProducts());
  }, [dispatch]);
};
