import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { homeStackScreens } from '@navigator';
import { TodayScreen, HistoryScreen } from '@screens';

export type BottomTabNavStackParams = {
  [homeStackScreens.TODAY]: undefined;
  [homeStackScreens.HISTORY]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavStackParams>();

export const BottomTabNavStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          flex: 1,
          textAlign: 'center',
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen name={homeStackScreens.TODAY} component={TodayScreen} />
      <Tab.Screen name={homeStackScreens.HISTORY} component={HistoryScreen} />
    </Tab.Navigator>
  );
}
