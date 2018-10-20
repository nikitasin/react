import React from "react";
import  Movie  from "../movie";
import { IMG_URL } from "../../services/movie-list";
import './styles.css';
import {connect} from 'react-redux';
import { handleClick } from '../../redux/actions/watch-list';

const MovieList = ({movies, handleClick: addToWatch}) => (
    <ul className="ul">
       {movies.map(movie => (
           <li key={movie.id} className="li">
                <Movie 
                    title={movie.title}
                    url={IMG_URL + movie.poster_path}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                    onClickAdd={ () => addToWatch(movie)}
                />
           </li>
       ))} 
    </ul>
);

const mapDispatchToProps = {handleClick};


export default connect(null,mapDispatchToProps)(MovieList);

