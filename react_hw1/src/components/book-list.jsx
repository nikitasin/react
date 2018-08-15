import React from 'react';
import Book from './book';
import styles from './book-list.css'


const BookList = ({books, onDelete}) => ( 
    <ul className={ styles.ul }>{books.map(book => 
        <li className={ styles.li } key={book.id}>
            <Book {...book} onDelete={ () => onDelete(book.id)}/>
        </li>)}
    </ul>
);

export default BookList;