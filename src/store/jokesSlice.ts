// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { saveJoke } from '@storage';
// import { fetchJokeFromAPI } from '@utils';

// import { RootState } from './store';

// export interface JokeState {
//   currentJoke: any;
//   jokesHistory: any[];
//   likedJokes: Record<string, boolean>;
//   lastFetchDate: string;
// }

// const initialState: JokeState = {
//   currentJoke: null,
//   jokesHistory: [],
//   likedJokes: {},
//   lastFetchDate: '',
// };

// export const fetchJoke = createAsyncThunk('joke/fetchJoke', async (_, { getState }) => {
//   const state = getState() as RootState;
//   const lastFetchDate = state.jokes.lastFetchDate;
//   const today = new Date().toDateString();

//   if (lastFetchDate === today && state.jokes.currentJoke) {
//     return state.jokes.currentJoke;
//   } else {
//     const joke = await fetchJokeFromAPI();
//     await saveJoke(joke);
//     return joke;
//   }
// });

// const jokeSlice = createSlice({
//   name: 'joke',
//   initialState,
//   reducers: {
//     toggleLike: (state, action) => {
//       const jokeId = action.payload;
//       state.likedJokes[jokeId] = !state.likedJokes[jokeId];
//     },
//     setJokesHistory: (state, action) => {
//       state.jokesHistory = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder.addCase(fetchJoke.fulfilled, (state, action) => {
//       state.currentJoke = action.payload;
//       state.lastFetchDate = new Date().toDateString();
//     });
//   },
// });

// export const { toggleLike, setJokesHistory } = jokeSlice.actions;
// export default jokeSlice.reducer;

// export const jokesSelector = (state: RootState) => state.jokes;
// jokeSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLikedJokes, saveJoke, saveLikedJokes } from '@storage';
import { fetchJokeFromAPI } from '@utils';

import { RootState } from './store';

export interface JokeState {
  currentJoke: any;
  jokesHistory: any[];
  likedJokes: Record<string, boolean>;
  lastFetchDate: string;
}

const initialState: JokeState = {
  currentJoke: null,
  jokesHistory: [],
  likedJokes: getLikedJokes(),
  lastFetchDate: '',
};

export const fetchJoke = createAsyncThunk('joke/fetchJoke', async (_, { getState }) => {
  console.log('FETCH JOKE');

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
      saveLikedJokes(state.likedJokes);
    },
    setJokesHistory: (state, action) => {
      state.jokesHistory = action.payload;
    },
    initializeLikedJokes: state => {
      const likedJokes = getLikedJokes();
      console.log('LIKED JOKES', likedJokes);

      state.likedJokes = likedJokes;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchJoke.fulfilled, (state, action) => {
      state.currentJoke = action.payload;
      state.lastFetchDate = new Date().toDateString();
    });
  },
});

export const { toggleLike, setJokesHistory, initializeLikedJokes } = jokeSlice.actions;
export default jokeSlice.reducer;

export const jokesSelector = (state: RootState) => state.jokes;
