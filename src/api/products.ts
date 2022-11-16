import axios from 'axios';

interface ProductsResponse {
  products: Array<ProductEntity.Product>;
}

export const getProducts = (): Promise<ProductsResponse> => {
  return axios.get('https://dummyjson.com/products');
};
