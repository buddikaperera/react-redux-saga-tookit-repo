import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	movieList: [],
	movie: {},
};

const movieSlice = createSlice({
	name: 'movie',
	initialState: INITIAL_STATE,
	reducers: {
		getMovies(name) {
			return name;
		},
		setMovies: (state, action) => {
			state.movieList = action.payload;
		},
		///Get a single movie
		getMovie(id) {
			return id;
		},
		setMovie: (state, action) => {
			state.movie = action.payload;
		},
	},
});

export const { getMovies, setMovies, getMovie, setMovie } = movieSlice.actions;

export default movieSlice.reducer;
