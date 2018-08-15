import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import icons from '../icons/icon.jsx';
import Icon from '../icons';

const Movie = ({url, title, overview, releaseDate, onAddFavorites}) => (
<div className={styles.movie}>
  <div className={styles.btnblock}>
    <button className={styles.button} onClick={ onAddFavorites }>
        <Icon icon={icons.favorit}/>
    </button>
    <button className={styles.button}>
    <Icon className={styles.info} icon={icons.info}/>
    </button>
</div>
    <img className={styles.img} src={url} alt="IMG"/>
    <div>
    <h2>{title}</h2>
    <p>Release date: {releaseDate}</p>
    <p className={styles.overview}>{overview}</p>
    </div>
</div>
);

Movie.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    onAddFavorites:PropTypes.func.isRequired,
  };
  
  export default Movie;