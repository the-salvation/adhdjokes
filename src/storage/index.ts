import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const saveJoke = async (joke: any) => {
  const jokes = await getSavedJokes();
  jokes.push(joke);
  storage.set('jokes', JSON.stringify(jokes));
};

export const getSavedJokes = async () => {
  const jokesString = storage.getString('jokes');
  return jokesString ? JSON.parse(jokesString) : [];
};

export const saveLikedJokes = (likedJokes: { [key: string]: boolean }) => {
  storage.set('likedJokes', JSON.stringify(likedJokes));
};

export const getLikedJokes = () => {
  const likedJokesString = storage.getString('likedJokes');
  return likedJokesString ? JSON.parse(likedJokesString) : {};
};
