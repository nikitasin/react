import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../movie';
import { IMG_URL } from '../../servises/movie-list';
import styles from './styles.css';


const MovieList = ({ movies, onAddFavorites }) => (
    <ul className={styles.ul}>
        {movies.map(movie => (
            <li className={styles.li} key={movie.id}>
                <Movie 
                    url={IMG_URL + movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                    onAddFavorites={ () => onAddFavorites(movie)}
                />
            </li>
        ))}
    </ul>
);

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    onAddFavorites: PropTypes.func.isRequired,
  };

export default MovieList;