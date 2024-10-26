import { StyleSheet } from 'react-native';

import { theme as t } from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: t.white,
  },
  header: {
    paddingLeft: t.medium,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: t.fontSmall,
    color: t.darkerGrey,
  },
});
