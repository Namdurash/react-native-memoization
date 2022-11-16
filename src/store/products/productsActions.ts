export enum ProductsActions {
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS',
}

export const actionGetProducts = (payload: Array<ProductEntity.Product>) => ({
  type: ProductsActions.GET_PRODUCTS,
  payload,
});

export const actionGetFilteredProducts = (
  payload: Array<ProductEntity.Product>,
) => ({
  type: ProductsActions.GET_FILTERED_PRODUCTS,
  payload,
});

export const thunkGetProducts = () => {
  return async (dispatch: ReducerDispatch<ProductsActions>) => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => {
        dispatch(actionGetProducts(json.products));
      });
  };
};
