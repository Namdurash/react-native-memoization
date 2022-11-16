import {FilteredProductsActions} from './filteredProductsActions';

interface FilteredProductsState {
  filteredProducts: Array<ProductEntity.Product>;
}

const initialState: FilteredProductsState = {
  filteredProducts: [],
};

const filteredProductsReducer = (
  state = initialState,
  action: ReducerAction<FilteredProductsActions>,
) => {
  switch (action.type) {
    case FilteredProductsActions.GET_FILTERED_PRODUCTS: {
      return {...state, filteredProducts: action.payload};
    }
    default:
      return state;
  }
};
