import { StyleSheet } from 'react-native';

import { theme as t } from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: t.white,
  },
  content: {
    flex: 1,
    marginBottom: 40,
  },
  header: {
    paddingLeft: t.medium,
  },
  listContent: {
    paddingTop: t.smallest,
  },
  separator: {
    height: 1,
    backgroundColor: t.lightGray,
  },
  jokeCard: {
    backgroundColor: t.white,
    flexDirection: 'row',
    padding: t.xsmall,
  },
  jokeContent: {
    flex: 1,
    paddingRight: t.small,
  },
  jokeText: {
    fontSize: t.fontSmall,
    color: t.black,
    lineHeight: t.lineHeightSmall,
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
