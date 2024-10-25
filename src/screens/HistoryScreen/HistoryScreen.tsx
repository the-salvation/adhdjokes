import { useEffect, FC, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { getSavedJokes } from '@storage';
import { setJokesHistory, toggleLike } from '../../store/slices/jokesSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { FavFilledIcon, FavOutlinedIcon } from '@assets';
import { Joke } from '@types';

interface JokeCardProps {
  joke: Joke,
  isLiked: boolean,
  onToggleLike: (id: number) => void
}

const JokeCard: FC<JokeCardProps> = ({ joke, isLiked, onToggleLike }) => (
  <View style={styles.jokeCard}>
    <View style={styles.jokeContent}>
      <Text style={styles.jokeText}>
        {joke.setup || joke.joke}
        {joke.delivery ? '\n\n' + joke.delivery : ''}
      </Text>
    </View>
    <TouchableOpacity
      onPress={() => onToggleLike(joke.id)}
      style={[styles.likeButton, isLiked && styles.likeButtonActive]}
    >
      {isLiked ? (
        <FavFilledIcon width={28} height={28} />
      ) : (
        <FavOutlinedIcon width={28} height={28} />
      )}
    </TouchableOpacity>
  </View>
);


const HistoryScreen = () => {
  const dispatch = useAppDispatch();
  const { jokesHistory, likedJokes } = useAppSelector((state) => state.jokes);

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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>History</Text>
      </View>
      <FlatList
        data={jokesHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        bounces={true}
        overScrollMode="never"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.5,
  },
  listContent: {
    paddingTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  jokeCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  jokeContent: {
    flex: 1,
    paddingRight: 16,
  },
  jokeText: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 22,
    // letterSpacing: -0.3,
  },
  likeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButtonActive: {
    backgroundColor: '#6C4FF6',
  },
});

export { HistoryScreen };
