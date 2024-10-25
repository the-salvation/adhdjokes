import { Joke } from '@types';

export const fetchJokeFromAPI = async (): Promise<Joke> => {
  const url = 'https://v2.jokeapi.dev/joke/Programming';
  try {
    const response = await fetch(url);
    const joke: Joke = await response.json();
    return joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw error;
  }
};
