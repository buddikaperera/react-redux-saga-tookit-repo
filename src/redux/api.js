import axios from 'axios';

export const API_ENDPOINT = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

//export const fetchMoview = async (movieName) => {
//return axios.get(`${API_ENDPOINT}&s=${movieName}`);
//};

export const fetchMoview = async (movieName) =>
	axios.get(`${API_ENDPOINT}&s=${movieName}`);
