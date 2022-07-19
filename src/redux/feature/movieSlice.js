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
	},
});

export const { getMovies, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
