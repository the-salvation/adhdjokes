import React, { FC, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { theme } from '@theme';
import { toggleLike } from '../../store/slices/jokesSlice';
import { fetchJoke } from '../../store/slices/jokesSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

const TodayScreen = () => {
  const dispatch = useAppDispatch();
  const { currentJoke, likedJokes } = useAppSelector((state) => state.jokes);

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  if (!currentJoke) {
    return <Text>Loading...</Text>;
  }

  const isLiked = likedJokes[currentJoke.id];

  return (
    <View>
      <Text>{currentJoke.setup || currentJoke.joke}</Text>
      {currentJoke.delivery && <Text>{currentJoke.delivery}</Text>}
      <Button
        title={isLiked ? 'Unlike' : 'Like'}
        onPress={() => dispatch(toggleLike(currentJoke.id))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: theme.small,
  },
});

export { TodayScreen };
