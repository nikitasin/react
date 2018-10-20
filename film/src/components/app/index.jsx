import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../redux/actions/movie-list";
import MovieList from "../movie-list";
// import Routs from "../router/routs";
// import { Route } from "react-router-dom";
// import Home from "../pages/home";

import CategorySelector from '../category-selector';
import  QueryForm  from "../searchtitle";
import FavrList from "../favorites-list";
import './style.css';



class App extends Component {
  render(){
    const {movies, isLoading, error, fetchMovies } = this.props;
    return(
      <div className="wrapper">
      
        <aside className="aside">
        
        {/* <Routs/> */}
        {/* <Route path="/" Component={Home}>Home</Route> */}


          <FavrList />
        </aside>
        <div className="main">
          <div className="search">
            <QueryForm />
            <CategorySelector fetchCategiry={fetchMovies} />
          </div>
          {!error && !isLoading && <MovieList movies={movies} />}
        </div>
      </div>
      
    )
  }
}


const mapStateToProps = state => ({
  movies: state.movies.items,
  isLoading: state.movies.loading,
  error: state.movies.error,
});

const mapDispatchToProps = { fetchMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
