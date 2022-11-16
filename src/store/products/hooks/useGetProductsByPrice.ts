import * as React from 'react';
import * as Redux from 'react-redux';
import {actionGetFilteredProducts} from '../productsActions';
import {useProductsStore} from './useProductsStore';

export const useGetProductsByPrice = (price: number) => {
  const dispatch = Redux.useDispatch();
  const {initialProducts} = useProductsStore();
  const filteredProducts = initialProducts.filter(el => el.price < price);

  return React.useCallback(() => {
    dispatch(actionGetFilteredProducts(filteredProducts));
  }, [dispatch, filteredProducts]);
};
