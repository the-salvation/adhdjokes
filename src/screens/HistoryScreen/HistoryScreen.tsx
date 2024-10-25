import { useEffect, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { getSavedJokes } from '@storage';
import { jokesSelector, setJokesHistory, toggleLike, useAppDispatch, useAppSelector } from '@store';
import { Joke } from '@types';
import { COLORS } from '@utils';
import { Header, JokeCard } from '@components';

const HistoryScreen = () => {
  const dispatch = useAppDispatch();
  const { jokesHistory, likedJokes } = useAppSelector(jokesSelector);

  useEffect(() => {
    const loadJokes = async () => {
      const jokes = await getSavedJokes();
      dispatch(setJokesHistory(jokes));
    };
    loadJokes();
  }, [dispatch]);

  const renderItem = useMemo(() => ({ item }: { item: Joke }) => (
    <JokeCard
      joke={item}
      isLiked={likedJokes[item.id]}
      onToggleLike={(id) => dispatch(toggleLike(id))}
    />
  ), [likedJokes]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header text="History" style={styles.header} />
        <FlatList
          data={jokesHistory}
          keyExtractor={(item, idx) => item.id.toString() + idx}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          bounces={true}
          overScrollMode="never"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    marginBottom: 40,
  },
  header: {
    paddingLeft: 24,
  },
  listContent: {
    paddingTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.lightGray,
  },
  jokeCard: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  jokeContent: {
    flex: 1,
    paddingRight: 16,
  },
  jokeText: {
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 22,
  },
  likeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.purpleish,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButtonActive: {
    backgroundColor: COLORS.purple,
  },
});

export { HistoryScreen };
