import React, {Component} from 'react';
import v4 from 'uuid/v4';
import BookEditor from './book-editor';
import books from './books';
import BookList from './book-list';
import SearchBar from './search-bar';
import { getVisibleBooks } from '../services/selectors';
import './index.css'
import styles from './app.css';




export default class App extends Component {

  state = {
    books,
    filter: ''
  };
  
  changeFilter = evt => {
    this.setState({filter: evt.target.value});
  };

addBook = newBook => {
  const book = {
    id: v4(),
    ...newBook
  };
  
this.setState(prevState =>({
  books: [book, ...prevState.books],
}))
};

deleteBook = id => {
  this.setState(prevState => ({
    books: prevState.books.filter(book => book.id !== id),
  }));
};

render() {
  const { books, filter } = this.state;
  const visibleBooks = getVisibleBooks(books, filter);

  return (
    <div>
      <main className={ styles.main }>
        <div>
        <BookEditor className={ styles.wrapper } onSubmit={this.addBook}/>
        <SearchBar value={filter} onChange={this.changeFilter}/>
        </div>
         
         <BookList books={ visibleBooks } onDelete={this.deleteBook}/>
         
      </main>
    </div>
  )
}
}