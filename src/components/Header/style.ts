import { StyleSheet } from 'react-native';

import { theme as t } from '@theme';

export const styles = StyleSheet.create({
  header: {
    paddingVertical: t.xsmall,
    backgroundColor: t.white,
    borderBottomWidth: 1,
    borderBottomColor: t.lightGrey,
    height: 136,
    justifyContent: 'flex-end',
  },
  headerTitle: {
    fontSize: t.fontLarge,
    fontWeight: '700',
    color: t.black,
  },
});
