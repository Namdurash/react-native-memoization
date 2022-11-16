import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {ProductCard} from './components';
import {styles} from './styles';
import {useStartScreen} from './useStartScreen';

interface ProductItemRender {
  item: ProductEntity.Product;
}

const onPress = () => console.log('Pressed');

const renderProductItem = ({item}: ProductItemRender) => {
  return <ProductCard productInfo={item} onPress={onPress} />;
};

export const StartScreen: React.FC = () => {
  const {products, onFilter, onChangeText, onRefresh} = useStartScreen();
  console.log('Render StartScreen');

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder="Enter price for filter"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onFilter} style={styles.button}>
          <Text>Filter list by price</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRefresh} style={styles.button}>
          <Text>Refresh list</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={products.products} renderItem={renderProductItem} />
    </View>
  );
};
