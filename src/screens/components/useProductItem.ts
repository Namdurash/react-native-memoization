import {ProductItemProps} from './ProductItem';

export const useProductItem = ({productInfo}: ProductItemProps) => {
  const {title, price, discountPercentage} = productInfo;
  const formattedTitle = title.length > 20 ? title.slice(0, 20) + '...' : title;
  const formattedPrice = price - Math.round((price * discountPercentage) / 100);
  const formattedDiscount = Math.round(discountPercentage);

  return {
    formattedTitle,
    formattedPrice,
    formattedDiscount,
    ...productInfo,
  };
};
