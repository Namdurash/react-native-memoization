import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginLeft: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    padding: 5,
    margin: 2,
    borderRadius: 50,
    backgroundColor: '#EDA37E',
  },
  input: {
    backgroundColor: '#F2F3A9',
    borderRadius: 50,
    paddingLeft: 10,
    height: 30,
    marginHorizontal: 10,
  },
});
