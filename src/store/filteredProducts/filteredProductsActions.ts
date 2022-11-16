enum FilteredProductsActions {
  GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS',
}

const actionGetFilteredProducts = (payload: Array<ProductEntity.Product>) => ({
  type: FilteredProductsActions.GET_FILTERED_PRODUCTS,
  payload,
});
