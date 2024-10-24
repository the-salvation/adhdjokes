import React, { JSX } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeStack } from '@navigator';
import { Provider } from 'react-redux';
import store from './store/store'


export const App = () => {
  console.log(store.getState());

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
