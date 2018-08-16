import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const SearchTitle = ({filter, onChange, onClick}) => (
    <div className={styles.searchBlock}>
        <h3 className={styles.titleSearch}>Search by title</h3>
        {/* <div className={styles.wrapInput}> */}
            <input 
                className={styles.input}
                value={filter}
                onChange={onChange}
                type="text"
                />
            <button 
                onClick={onClick}>
                Search
            </button>
        {/* </div> */}
    </div>
);

SearchTitle.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  export default SearchTitle;