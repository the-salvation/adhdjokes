import { StyleSheet } from 'react-native';

import { theme as t } from '@theme';

export const styles = StyleSheet.create({
  jokeCard: {
    backgroundColor: t.white,
    flexDirection: 'row',
    padding: t.medium,
  },
  jokeContent: {
    flex: 1,
    paddingRight: t.small,
  },
  jokeText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: t.fontSmall,
    fontWeight: 'bold',
    color: t.black,
    lineHeight: t.lineHeightMedium,
  },
  likeButton: {
    width: t.sizeSmall,
    height: t.sizeSmall,
    borderRadius: t.medium,
    backgroundColor: t.purpleish,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButtonActive: {
    backgroundColor: t.purple,
  },
});
