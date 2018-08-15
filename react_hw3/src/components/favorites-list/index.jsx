import React from 'react';
import PropTypes from 'prop-types';
import Favorites from '../favorites';
import styles from './styles.css';

const FavList = ({ favorites, onRemoveFavorites }) => (
    <div>
        <h2 className={styles.h2}>Favorites</h2>
        {favorites.length > 0 && (
        <ul className={styles.ul}>
            {favorites.map(movie => (
                <li className={styles.li} key={movie.id}>
                    <Favorites 
                        movie={movie}
                        onRemoveFavorites={ () => onRemoveFavorites(movie)}
                    />
                </li>
            ))}
        </ul>
         )} 
    </div>
);

FavList.propTypes = {
    favorites: PropTypes.shape.isRequired,
    onRemoveFavorites: PropTypes.func.isRequired,
  };

export default FavList;