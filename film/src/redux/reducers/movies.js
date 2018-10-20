import { combineReducers } from 'redux';

import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_BY_QUERY,
} from '../actions/types';

const items = (state=[], { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return true;
    case FETCH_MOVIES_SUCCESS:
    case FETCH_MOVIES_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return null;
    case FETCH_MOVIES_FAILURE:
      return payload;
    default:
      return state;
  }
};

const title = (state = '', { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_BY_QUERY:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  loading,
  error,
  title,
});