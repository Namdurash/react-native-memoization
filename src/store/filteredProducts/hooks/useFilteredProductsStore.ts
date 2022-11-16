import {useSelector} from 'react-redux';
import {RootStore} from '../../rootStore';
import {FilteredProductsState} from '../filteredProductsReducer';

const useFilteredProductsStore = () => {
  return useSelector<RootStore, FilteredProductsState>(
    state => state.filteredProducts,
  );
};
