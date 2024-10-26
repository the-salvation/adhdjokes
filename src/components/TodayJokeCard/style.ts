import { StyleSheet } from 'react-native';

import { theme as t } from '@theme';

export const styles = StyleSheet.create({
  jokeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: t.medium,
  },
  jokeCard: {
    backgroundColor: t.white,
  },
  jokeText: {
    fontFamily: 'Inter',
    fontSize: t.fontMedium,
    fontWeight: '600',
    lineHeight: t.lineHeightLarge,
    color: t.black,
  },
  deliveryText: {
    fontFamily: 'Inter',
    fontSize: t.fontMedium,
    lineHeight: t.lineHeightLarge,
    color: t.black,
    marginTop: t.xsmall,
  },
  likeButton: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: t.xsmall,
  },
  likeButtonContainer: {
    width: t.sizeLarge,
    height: t.sizeLarge,
    borderRadius: 37,
    backgroundColor: t.purpleish,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButtonContainerActive: {
    backgroundColor: t.purple,
  },
});
