import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StartScreen} from './src/screens/StartScreen';
import {RootProvider} from './src/store/RootProvider';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootProvider>
        <StartScreen />
      </RootProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
