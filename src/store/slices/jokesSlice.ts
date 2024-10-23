// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import { fetchJokeFromAPI } from '../utils/api';

// export interface Joke {
//   id: string;
//   content: string;
//   date: string;
//   liked: boolean;
// }

// interface JokesState {
//   todayJoke: Joke | null;
//   history: Joke[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: JokesState = {
//   todayJoke: null,
//   history: [],
//   loading: false,
//   error: null,
// };

// export const fetchTodayJoke = createAsyncThunk('jokes/fetchTodayJoke', async () => {
//   const joke = await fetchJokeFromAPI();
//   return joke;
// });

// export const loadJokesFromStorage = createAsyncThunk('jokes/loadJokesFromStorage', async () => {
//   const storedJokes = await AsyncStorage.getItem('jokes');
//   return storedJokes ? (JSON.parse(storedJokes) as Joke[]) : [];
// });

// const jokesSlice = createSlice({
//   name: 'jokes',
//   initialState,
//   reducers: {
//     toggleLike(state, action) {
//       const joke = state.history.find(j => j.id === action.payload);
//       if (joke) {
//         joke.liked = !joke.liked;
//         AsyncStorage.setItem('jokes', JSON.stringify(state.history));
//       }
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchTodayJoke.pending, state => {
//         state.loading = true;
//       })
//       .addCase(fetchTodayJoke.fulfilled, (state, action) => {
//         state.loading = false;
//         const today = new Date().toISOString().split('T')[0];
//         const newJoke: Joke = { ...action.payload, date: today, liked: false };
//         state.todayJoke = newJoke;
//         state.history = [newJoke, ...state.history];
//         AsyncStorage.setItem('jokes', JSON.stringify(state.history));
//       })
//       .addCase(fetchTodayJoke.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch joke';
//       })
//       .addCase(loadJokesFromStorage.fulfilled, (state, action) => {
//         state.history = action.payload;
//         const today = new Date().toISOString().split('T')[0];
//         state.todayJoke = state.history.find(j => j.date === today) || null;
//       });
//   },
// });

// export const { toggleLike } = jokesSlice.actions;
// export default jokesSlice.reducer;
