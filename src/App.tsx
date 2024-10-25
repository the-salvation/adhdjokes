import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeStack } from '@navigator';
import { Provider } from 'react-redux';
import store from './store/store'

export const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);
