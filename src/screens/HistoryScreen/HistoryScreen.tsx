import { getSavedJokes } from '@storage';
import React, { useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { setJokesHistory, toggleLike } from '../../store/slices/jokesSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

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

  const renderItem = ({ item }: { item: any }) => {
    const isLiked = likedJokes[item.id];

    return (
      <View>
        <Text>{item.setup || item.joke}</Text>
        {item.delivery && <Text>{item.delivery}</Text>}
        <Button
          title={isLiked ? 'Unlike' : 'Like'}
          onPress={() => dispatch(toggleLike(item.id))}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={jokesHistory}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export { HistoryScreen };