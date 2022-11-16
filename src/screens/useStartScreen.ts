import * as React from 'react';

import {useGetProductsByPrice} from '../store/products/hooks/useGetProductsByPrice';
import {useGetProducts} from '../store/products/hooks/useGetProducts';
import {useProductsStore} from '../store/products/hooks/useProductsStore';

export const useStartScreen = () => {
  const [priceFilter, setPriceFilter] = React.useState(0);
  const getProducts = useGetProducts();
  const products = useProductsStore();
  const getFilteredProducts = useGetProductsByPrice(priceFilter);

  React.useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onFilter = () => {
    getFilteredProducts();
  };

  const onRefresh = () => {
    getProducts();
  };

  const onChangeText = (inputPrice: string) => {
    setPriceFilter(+inputPrice);
  };

  return {products, onChangeText, onFilter, onRefresh};
};
