import React from 'react';
import './styles.css';
import icons from '../icons/icon.jsx';
import Icon from '../icons';


const Favorites = ({ 
  url,
  title,
  releaseDate, 
  onRemoveFavorites,
}) => (
  <div className="movi">
  <div className="btnblock">
    <button className="button" onClick={ onRemoveFavorites }>
    <Icon icon={icons.delate}/>
    </button>
    <button className="button">
    <Icon icon={icons.info}/>
    </button>
    </div>
      <img
        className="img"
        src={url}
        alt="IMG"
      />
    <div  >
      <h3 className="title">{title}</h3>
      <p className="release">Released: {releaseDate}</p>
      
    </div>
  </div>
);


export default Favorites;