import { combineReducers } from 'redux';
import moviesReducer from './movies';
// import favouritesReducer from './watchlist';
// import searchReducer from './query';

const rootReducer = combineReducers({
  movies: moviesReducer,
  // favourites: favouritesReducer,
  // search: searchReducer
});

export default rootReducer;