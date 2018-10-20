import React from 'react';
import icons from '../icons/icon.jsx';
import Icon from '../icons';
import './styles.css';

const Movie = ({
  url,
  title,
  releaseDate,
  overview,
  onClickAdd,
  onClickInfo,
}) => (
  <div className="movie">
    <div className="btnblock"> 
       <button className="button" onClick={onClickAdd}>
        <Icon icon={icons.favorit} />
      </button> 
      <button className="button" onClick={onClickInfo}>
        <Icon className="info" icon={icons.info} />
      </button> 
     </div>

    <img className="img" src={url} alt="IMG" />
    <div className="wrap">
    <h2>{title}</h2>
    <p>Release date: {releaseDate}</p>
    <p className="overview">{overview}</p>
    </div>
  </div>
);

export default Movie;
