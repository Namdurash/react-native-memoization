import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {useProductItem} from './useProductItem';

export interface ProductItemProps {
  productInfo: ProductEntity.Product;
  onPress?: () => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  productInfo,
  onPress,
}) => {
  const {formattedTitle, formattedDiscount, formattedPrice, price, thumbnail} =
    useProductItem({productInfo});

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{formattedTitle}</Text>
          <Text style={styles.text}>Discount: {formattedDiscount}%</Text>
          <View style={styles.priceBlock}>
            <Text style={styles.text}>Price: {formattedPrice}$</Text>
            <Text style={styles.oldPriceText}>{price}$</Text>
          </View>
        </View>
        <View style={styles.imageBlock}>
          <Image source={{uri: thumbnail}} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
