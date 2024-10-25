import { FC } from 'react';
import { COLORS } from '@utils';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  text: string;
}
const Header: FC<HeaderProps> = ({ text }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});

export { Header };
