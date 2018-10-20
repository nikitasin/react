import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import { fetchMoviesQuery, changeQuery } from '../../redux/actions/movie-list';


class QueryForm extends Component {
  handleChange = e => {
    this.props.changeQuery(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.fetchMoviesQuery(this.props.value);
    this.props.changeQuery('');
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}
      className="searchBlock"
      >
      <h3 className="titleSearch">Search by title</h3>
        <input
        className="input"
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
    value: state.movies.title,
  });

const mapDispatchToProps = { fetchMoviesQuery, changeQuery };

export default connect(mapStateToProps, mapDispatchToProps)(QueryForm);
