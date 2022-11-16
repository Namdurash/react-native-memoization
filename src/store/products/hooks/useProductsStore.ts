import {useSelector} from 'react-redux';
import {RootStore} from '../../rootStore';
import {ProductsState} from '../productsReducer';

export const useProductsStore = () => {
  return useSelector<RootStore, ProductsState>(state => state.products);
};
