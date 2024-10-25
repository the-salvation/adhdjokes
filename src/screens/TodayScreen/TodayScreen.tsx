import { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector, fetchJoke, toggleLike, jokesSelector, initializeLikedJokes } from '@store';
import { Header, TodayJokeCard } from '@components';
import { COLORS } from '@utils';

const TodayScreen = () => {
  const dispatch = useAppDispatch();
  const { currentJoke, likedJokes } = useAppSelector(jokesSelector);

  useLayoutEffect(() => {
    dispatch(initializeLikedJokes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  if (!currentJoke) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const isLiked = likedJokes[currentJoke.id];

  return (
    <SafeAreaView style={styles.container}>
      <Header text="Today" style={styles.header} />
      <TodayJokeCard
        currentJoke={currentJoke}
        isLiked={isLiked}
        onPress={() => dispatch(toggleLike(currentJoke.id))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingLeft: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: COLORS.darkerGrey,
  },
});

export { TodayScreen };
