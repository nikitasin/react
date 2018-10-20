import  {FAVOURITES, DELETEFAV} from '../actions/types'

export const handleClick = movie => ({
  type: FAVOURITES,
  payload: movie
});

export const deleteFromFavourites = movie => ({
  type: DELETEFAV,
  payload: movie
});

// export default (handleClick, deleteFromFavourites);