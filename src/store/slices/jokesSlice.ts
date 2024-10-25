import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { saveJoke } from '@storage';
import { fetchJokeFromAPI } from '@utils';

import { RootState } from '../store';

export interface JokeState {
  currentJoke: any;
  jokesHistory: any[];
  likedJokes: Record<string, boolean>;
  lastFetchDate: string;
}

const initialState: JokeState = {
  currentJoke: null,
  jokesHistory: [],
  likedJokes: {},
  lastFetchDate: '',
};

export const fetchJoke = createAsyncThunk('joke/fetchJoke', async (_, { getState }) => {
  const state = getState() as RootState;
  const lastFetchDate = state.jokes.lastFetchDate;
  const today = new Date().toDateString();

  if (lastFetchDate === today && state.jokes.currentJoke) {
    return state.jokes.currentJoke;
  } else {
    const joke = await fetchJokeFromAPI();
    await saveJoke(joke);
    return joke;
  }
});

const jokeSlice = createSlice({
  name: 'joke',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const jokeId = action.payload;
      state.likedJokes[jokeId] = !state.likedJokes[jokeId];
    },
    setJokesHistory: (state, action) => {
      state.jokesHistory = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchJoke.fulfilled, (state, action) => {
      state.currentJoke = action.payload;
      state.lastFetchDate = new Date().toDateString();
    });
  },
});

export const { toggleLike, setJokesHistory } = jokeSlice.actions;
export default jokeSlice.reducer;
