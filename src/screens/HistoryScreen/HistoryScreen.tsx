import { useEffect, useMemo } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { getSavedJokes } from '@storage';
import { jokesSelector, setJokesHistory, toggleLike, useAppDispatch, useAppSelector } from '@store';
import { Joke } from '@types';
import { Header, HistoryJokeCard } from '@components';

import { styles } from './style';

export const HistoryScreen = () => {
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
    <HistoryJokeCard
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
