import { ADD_LOCALSTORE } from "../actions/types";

const localstorage = () => next => action => {
    if (action.type === ADD_LOCALSTORE) {
        localstorage.setItem('watchlist', JSON.stringify(action.payload));
    }
    next(action);
};

export default localstorage;


// const thunk = ({ getState, dispatch }) => next => action =>
//   typeof action === 'function' ? action(dispatch, getState) : next(action);

