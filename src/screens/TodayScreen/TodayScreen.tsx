import { useEffect, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector, fetchJoke, toggleLike, jokesSelector, initializeLikedJokes } from '@store';
import { Header, TodayJokeCard } from '@components';
import { RefreshableWrapper } from '@navigator';

import { styles } from './style';

export const TodayScreen = () => {
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
    <RefreshableWrapper>
      <SafeAreaView style={styles.container}>
        <Header text="Today" style={styles.header} />
        <TodayJokeCard
          currentJoke={currentJoke}
          isLiked={isLiked}
          onPress={() => dispatch(toggleLike(currentJoke.id))}
        />
      </SafeAreaView>
    </RefreshableWrapper>
  );
};
