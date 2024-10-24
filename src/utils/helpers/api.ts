interface Joke {
  error: boolean;
  category: string;
  type: string;
  setup: string;
  delivery: string;
  flags: Flags;
  id: number;
  safe: false;
  lang: string;
}

interface Flags {
  nsfw: boolean;
  religious: false;
  political: false;
  racist: false;
  sexist: false;
  explicit: true;
}

export const fetchJokeFromAPI = async () => {
  const url = 'https://v2.jokeapi.dev/joke/Any';
  try {
    const response = await fetch(url);
    const joke = await response.json();
    console.log(joke);
    return joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw error;
  }
};
