import { Joke } from '@types';

export const fetchJokeFromAPI = async (): Promise<Joke> => {
  const url = 'https://v2.jokeapi.dev/joke/Any';
  try {
    const response = await fetch(url);
    const joke: Joke = await response.json();
    console.log(joke);
    return joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw error;
  }
};
