import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { getMovies, setMovies } from './feature/movieSlice';
import { fetchMoview } from '../redux/api';
import { fetchMoviews } from './api';

function* onLoadMoviesAsync({ payload }) {
	try {
		const movieName = payload;
		const response = yield call(fetchMoviews, movieName);

		if (response.status === 200) {
			yield put(setMovies({ ...response.data })); ///DISPATCH aCTION
		} else {
		}
	} catch (error) {
		console.log(error);
	}
}

function* onLoadMovies() {
	//// generator function
	yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

export const movieSaga = [fork(onLoadMovies)];
