import { combineReducers } from 'redux';
import moviesReducer from './movies';
import favouritesReducer from "./watch-list";

const rootReducer = combineReducers({
  movies: moviesReducer,
  favourites: favouritesReducer,
});

export default rootReducer;