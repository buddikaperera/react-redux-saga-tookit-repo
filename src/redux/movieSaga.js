import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { getMovies, setMovies, getMovie, setMovie } from './feature/movieSlice';
//import { fetchMoview } from '../redux/api';
import { fetchMoviews, fetchMovie } from './api';

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

function* onLoadMovieAsync({ payload }) {
	try {
		const movieId = payload;
		const response = yield call(fetchMovie, movieId);

		if (response.status === 200) {
			yield put(setMovie({ ...response.data })); ///DISPATCH aCTION
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

function* onLoadMovie() {
	//// generator function
	yield takeLatest(getMovie.type, onLoadMovieAsync);
}

export const movieSaga = [fork(onLoadMovies), fork(onLoadMovie)];
