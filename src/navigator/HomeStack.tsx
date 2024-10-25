import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { homeStackScreens } from '@navigator';
import { TodayScreen, HistoryScreen } from '@screens';

import { TodayIcon, HistoryIcon } from '@assets';

export type HomeStackParams = {
  [homeStackScreens.HOME]: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParams>();
const Tab = createBottomTabNavigator();

export const BottomTabNavStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          backgroundColor: '#FFFFFF',
        },
        tabBarIcon: ({ size, focused }) => {
          const color = focused ? '#8866FF' : '#CCCCCC';
          if (route.name === homeStackScreens.TODAY) {
            return <TodayIcon width={24} height={24} fill={color} />;
          }
          return <HistoryIcon width={24} height={24} fill={color} />;
        },
        tabBarActiveTintColor: '#8866FF',
        tabBarInactiveTintColor: '#CCCCCC',
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name={homeStackScreens.TODAY} component={TodayScreen} />
      <Tab.Screen name={homeStackScreens.HISTORY} component={HistoryScreen} />
    </Tab.Navigator>
  );
}

export const HomeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{ headerShown: false }} name={homeStackScreens.HOME} component={BottomTabNavStack} />
    </Stack.Navigator>
  );
}
