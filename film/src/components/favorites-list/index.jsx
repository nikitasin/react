import React, {Component} from 'react';
import { connect } from 'react-redux';
import { IMG_URL } from '../../services/movie-list';
import {deleteFromFavourites} from '../../redux/actions/watch-list';
import icons from '../icons/icon.jsx';
import Icon from '../icons';

import './styles.css';

class FavrList extends Component {
  
	render(){
	  const { favourites, deleteFromFavourites } = this.props;
	  return (
		<ul className="container">
		  <h1 className="watchlist-h1">Watchlist</h1>
		  {favourites.map(movie => (
			<li key={movie.id} className="card">
				<img 
				src={ IMG_URL + movie.poster_path} 
				alt="kartinka"/>
				<div className="data">
				  <h3 className="title">{movie.title}</h3>
				  <p className="text">Released: {movie.release_date}</p>         
					<div className="btnb">
					<button 
					className="btndel" 
					onClick={() => deleteFromFavourites(movie)}>
					<Icon icon={icons.delate} />
					</button>
					<button 
					className="btndel" 
					onClick={() => deleteFromFavourites(movie)}>
					<Icon icon={icons.info} />
					</button>
					</div>
				</div>
			</li>
		  ))}
		</ul>
	  );
	}
  }


  const mapStateToProps = state => ({
	favourites: state.favourites.movies
  });
  
  const mapDispatchToProps = { deleteFromFavourites };
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(FavrList);