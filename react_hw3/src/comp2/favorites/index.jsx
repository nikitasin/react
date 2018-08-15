import React from 'react';
import PropTypes from 'prop-types';
import { IMG_URL } from '../../servises/movie-list';
import styles from './styles.css';
import icons from '../icons/icon.jsx';
import Icon from '../icons';


const Favorites = ({ movie, onRemoveFavorites }) => (
  <div className={styles.movie}>
    <img
      className={styles.img}
      src={ IMG_URL + (movie.poster_path)}
      alt="IMG"
    />
    <div  >
      <h3 className={styles.title}>{movie.title}</h3>
      <p className={styles.release}>Released: {movie.release_date}</p>
      <div className={styles.btnblock}>
    <button className={styles.button} onClick={ onRemoveFavorites }>
    <Icon icon={icons.delate}/>
    </button>
    <button className={styles.button}>
    <Icon icon={icons.info}/>
    </button>
</div>
    </div>
  </div>
);

Favorites.propTypes = {
  movie: PropTypes.shape.isRequired,
    onRemoveFavorites: PropTypes.func.isRequired,
  };

export default Favorites;