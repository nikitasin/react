import axios from 'axios';

const API_KEY = '734894a8b2924a0c01d7558d620798ec';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = ({ category, onSuccess, onError }) => {
  const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;

  return axios
    .get(url)
    .then(response => response.data.results)
    .then(onSuccess)
    .catch(onError);
};

export const fetchMoviesByTitle = ({ title, onSuccess, onError }) => {
  const url = `${BASE_URL}/search/movie?api_key=` +
  `${API_KEY}&language=en-US&page=1&include_adult=false&query=${title}`;

  return axios
    .get(url)
    .then(response => response.data.results)
    .then(onSuccess)
    .catch(onError);
};

const API_URL = 'https://hn.algolia.com/api/v1/search?query=';

export const fetchArticlesByQuery = (query = 'javascript') => {
  return axios.get(API_URL + query).then(response => response.data.hits);
};