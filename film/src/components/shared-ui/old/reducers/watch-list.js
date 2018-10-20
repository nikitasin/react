// import {FAVOURITES, DELETEFAV} from '../actions/types';

// const addFilm = (state = initialState, payload) => {
//     if(state.movies.includes(payload)) {
//       alert("Вы уже добавили этот фильм в избранное");
//     }
//     return console.log('da');
//   };
  
//   const dataFromStorage = localStorage.getItem('favFilms');
  
//   const initialState = {
//     movies: dataFromStorage ? JSON.parse(dataFromStorage) : [],
//   };
  
//   export default function favouritesReducer(state = initialState, {type, payload}){
//       switch(type){
//         case FAVOURITES:
//         // if(state.movies.includes(payload)) {
//         //   alert("Вы уже добавили этот фильм в избранное");
//           return addFilm(payload);
//         // } else {
//         //       return{
//         //         movies: [...state.movies, payload]
//         //       }
//         // }
  
//         case DELETEFAV:
//           return {
//             movies: [...state.movies.filter(film => film !== payload)]
//           };
    
//         default:
//           return state;
//       }
//     }

//     //   const initState = JSON.parse(localStorage.getItem('watchlist')) || [];

// //   const watchlistReducer = (state = initState, {type, payload}) => {
// //       switch(type) {
// //           case FAVOURITES:
// //           if(state.find(movie => movie.id === payload.id)) return state;
// //           return [payload, ...state];
// //           case DELETEFAV:
// //           return state.filter(movie => movie.id !== payload);
// //           default: return state;
// //       }
// //   };

// //   export default watchlistReducer;