import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParams } from '@navigator';
import { theme } from '@theme';

type ITodayScreenProps = NativeStackScreenProps<HomeStackParams, 'Home'>;

export const TodayScreen: FC<ITodayScreenProps> = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Put your code here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: theme.small,
  },
});
