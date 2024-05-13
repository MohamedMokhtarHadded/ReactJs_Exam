import axios from "axios";

const API_URL = "http://localhost:3000/movies";

function getMovies() {
  return axios.get(API_URL);
}

function getMovieById(id) {
  return axios.get(`${API_URL}/${id}`);
}

function updateRating(id, movie) {
  return axios.put(`${API_URL}/${id}`, movie);
}


export { getMovies, getMovieById, updateRating };