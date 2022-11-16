import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#D4FFF3',
    borderRadius: 20,
    flexDirection: 'row',
  },
  textBlock: {
    width: '75%',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 7,
  },
  text: {
    fontSize: 15,
    marginBottom: 7,
  },
  oldPriceText: {
    opacity: 0.5,
    fontSize: 13,
    textDecorationLine: 'line-through',
    marginLeft: 5,
    marginTop: 1,
  },
  priceBlock: {
    flexDirection: 'row',
  },
  imageBlock: {
    width: '25%',
  },
  image: {
    marginLeft: 10,
    width: 66,
    height: 66,
    borderRadius: 10,
  },
});
