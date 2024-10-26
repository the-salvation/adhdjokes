import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { homeStackScreens } from '@navigator';
import { TodayScreen, HistoryScreen } from '@screens';

import { TodayIcon, HistoryIcon } from '@components';
import { COLORS } from '@styles';
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
          borderTopWidth: 1,
          elevation: 0,
          height: 100,
          backgroundColor: COLORS.white,
          paddingBottom: 40,
          paddingTop: 10,
          paddingHorizontal: 100
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === homeStackScreens.TODAY) {
            return <TodayIcon focused={focused} />;
          }
          return <HistoryIcon focused={focused} />;
        },
        tabBarActiveTintColor: COLORS.purple,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarLabelStyle: {
          fontSize: 12,
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
