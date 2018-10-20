import React from 'react';
// import Favorites from '../favorites';
import  Favorites  from "../favorites";
import { IMG_URL } from "../../services/movie-list";
import './styles.css';

const FavList = ({ favorites, onRemoveFavorites }) => (
    <div>
        <h2 className="h2">Favorites</h2>
        {/* {favorites.length > 0 && ( */}
        <ul className="ul">
            {favorites.map(movie => (
                <li className="li" key={movie.id}>
                    <Favorites 
                        title={movie.title}
                        url={IMG_URL + movie.poster_path}
                        releaseDate={movie.release_date}
                        onRemoveFavorites={ () => onRemoveFavorites(movie)}
                    />
                </li>
            ))}
        </ul>
		 {/* ) */}
		 } 
    </div>
);

export default FavList;