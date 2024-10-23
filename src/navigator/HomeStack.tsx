import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { homeStackScreens } from '@navigator';
import { TodayScreen } from '@screens';

export type HomeStackParams = {
  [homeStackScreens.HOME]: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStack = () => (
  <Stack.Navigator initialRouteName={homeStackScreens.HOME}>
    <Stack.Screen name={homeStackScreens.HOME} component={TodayScreen} />
  </Stack.Navigator>
);
