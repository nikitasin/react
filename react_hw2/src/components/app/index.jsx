import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { fetchMovies, fetchMoviesByTitle } from '../../servises/api';

import CategorySelector from '../category-selector';
import SearchTitle from '../title-search';
import MovieList from '../movie-list';
import FavList from '../favorites-list';
// import Favorites from '../favorites';

import selectorOptions from '../../selector-options.js';

import styles from './styles.css';


class App extends Component {
  state = {
    movies: [],
    category: null,
    error: null,
    filter: '',
    favorites:[],
  };

  componentDidMount() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.setState({ favorites: JSON.parse(favorites) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
  const { favorites } = this.state;
  localStorage.setItem('favorites', JSON.stringify(favorites));

  const { category } = this.state;

  if (!prevState.category && !category) return;

  if(!prevState.category) {
    fetchMovies({
      category: category.value, 
      onSuccess: this.handleFetchSuccess, 
      onError: this.handleFetchFailure
    });
    return 
  }

  const prevCategory = prevState.category.value;

  if(prevCategory !== category.value){
    fetchMovies({
      category: category.value, 
      onSuccess: this.handleFetchSuccess, 
      onError: this.handleFetchFailure
    });
  }
  };



  changeCategory = category => {
  this.setState({ category });
  };

  changeFilter = ({ target }) => {
  this.setState({ filter: target.value });
  };

  submitFilter = evt => {
    evt.preventDefault();
    const { filter } = this.state;
    fetchMoviesByTitle({
      title: filter,
      onSuccess: this.handleFetchSuccess,
      onError: this.handleFetchFailure,
    });

    this.setState({
      filter: '',
    });
  };



  handleFetchSuccess = movies =>  {
    this.setState({movies});
  };
  

  handleFetchFailure = (error) => {
    this.setState({ error: error.message});
  };
  

 
  addMovie = movie => {
    const { favorites } = this.state;
    const { id } = movie;

    const addmovie = favorites.find(movie => movie.id === id );
    if (addmovie) {
        alert('This movie is already on the list!');
        return;
    }
  
    
    this.setState(prevState => ({
      // favorites: prevState.favorites.find(movie => movie.id === movie.id ),
      
      favorites: [movie, ...prevState.favorites],
    }));
    
    
  };
  RemoveMovie = movie => {
    const { id } = movie;
    this.setState(prevState => ({
      
      favorites: prevState.favorites.filter(movie => movie.id !== id),
    }));
  };
  
  

  render() {
  const { movies, category, filter, favorites } = this.state;
   
    return (
      <div className={styles.wrapper}>
      <aside className={styles.aside}>
          <FavList 
          favorites={favorites}
          onRemoveFavorites={this.RemoveMovie}
          />
        </aside>
        <main className={styles.main}>
        <div className={styles.search}>
        <CategorySelector
          options={selectorOptions}
          value={category}
          onChange={this.changeCategory}
        />
        <SearchTitle 
        onChange={this.changeFilter}
        value={filter}
        onClick={this.submitFilter}
        />
        </div>
        <MovieList 
        movies={movies} 
        onAddFavorites={this.addMovie}
        />
        </main>
      </div>
    );
  }
}


export default hot(module)(App);
