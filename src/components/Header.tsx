import { FC } from 'react';
import { COLORS } from '@utils';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface HeaderProps {
  text: string;
  style?: StyleProp<ViewStyle>;
}

const Header: FC<HeaderProps> = ({ text, style }) => (
  <View style={[styles.header, style]}>
    <Text style={styles.headerTitle}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
    height: 136,
    justifyContent: 'flex-end',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.black,
  },
});

export { Header };
