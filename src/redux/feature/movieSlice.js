import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	movieList: [],
	movie: {},
};

const movieSlice = createSlice({
	name: 'movie',
	initialState: INITIAL_STATE,
	//reducers: {
	//[ActionType]: (state, action) => {},
	//},
});

export default movieSlice.reducer;
