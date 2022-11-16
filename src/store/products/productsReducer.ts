import {ProductsActions} from './productsActions';

export interface ProductsState {
  products: Array<ProductEntity.Product>;
  initialProducts: Array<ProductEntity.Product>;
}

const initialState: ProductsState = {
  products: [],
  initialProducts: [],
};

export const productsReducer = (
  state = initialState,
  action: ReducerAction<ProductsActions>,
) => {
  switch (action.type) {
    case ProductsActions.GET_PRODUCTS: {
      return {products: action.payload, initialProducts: action.payload};
    }
    case ProductsActions.GET_FILTERED_PRODUCTS: {
      return {...state, products: action.payload};
    }
    default:
      return state;
  }
};
