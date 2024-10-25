import { MMKV } from 'react-native-mmkv';

import { Joke } from '@types';

const storage = new MMKV();

export const saveJoke = async (joke: Joke) => {
  const jokes = await getSavedJokes();
  jokes.push(joke);
  storage.set('jokes', JSON.stringify(jokes));
};

export const getSavedJokes = async (): Promise<Joke[]> => {
  const jokesString = storage.getString('jokes');
  return jokesString ? JSON.parse(jokesString) : [];
};

export const saveLikedJokes = (likedJokes: Record<string, boolean>) => {
  storage.set('likedJokes', JSON.stringify(likedJokes));
};

export const getLikedJokes = (): Record<string, boolean> => {
  const likedJokesString = storage.getString('likedJokes');
  return likedJokesString ? JSON.parse(likedJokesString) : {};
};
