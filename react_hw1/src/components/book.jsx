import React from 'react';
import styles from './book.css';

const Book = ({img, title, author, descr, onDelete}) => (
    <div>
    <img src={img} alt="Book img"/>
    <div>
        <h3>{title}</h3>
        <p className={ styles.p }>{author}</p>
        <p className={ styles.p }>{descr}</p>
        <button onClick={ onDelete }>
        Delete
      </button>
    </div>
    </div>
);
  


export default Book;