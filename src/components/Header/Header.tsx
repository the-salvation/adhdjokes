import { FC } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import { styles } from './style';

interface HeaderProps {
  text: string;
  style?: StyleProp<ViewStyle>;
}

export const Header: FC<HeaderProps> = ({ text, style }) => (
  <View style={[styles.header, style]}>
    <Text style={styles.headerTitle}>{text}</Text>
  </View>
);


