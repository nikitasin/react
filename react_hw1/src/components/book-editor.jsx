import React, { Component } from 'react';
import Button from './button';
import styles from './book-editor.css';

export default class BookEditor extends Component {
    state = {
      title: '',
      img: '',
      author: '',
      descr: '',
    };
    handleChange = (evt) => {
        const name = evt.target.name;
        this.setState({      
          [name]: evt.target.value,
        });
      };

    handleSubmit = evt => {
        evt.preventDefault();

        const newBook = this.state;

        if (Object.values(newBook).some(value => value.trim() === '')) {
          alert("There are empty fields, try again!");
          return;
        }
        this.props.onSubmit(newBook);

        this.setState({
            title: '',
            img: '',
            author: '',
            descr: '',
          });
    };
  
    render() {
        const { title, img, author, descr } = this.state;
  
      return (
        <form className={ styles.form } onSubmit={this.handleSubmit}>
          <span className={ styles.span }>
            title
            <input 
            type="text"
            value={ title }
            name="title"

            onChange={ this.handleChange }
            />
          </span>
          <span className={ styles.span }>
          img
            <input 
            type="text"
            value={ img }
            name="img"
            onChange={ this.handleChange }
            />
          </span>
          <span className={ styles.span }>
          author
            <input 
            type="text"
            value={ author }
            name="author"
            onChange={ this.handleChange }
            />
          </span>
          <span className={ styles.span }>
          descr
            <input 
            type="text"
            value={ descr }
            name="descr"
            onChange={ this.handleChange }
            />
          </span>
          <Button className={ styles.Button } label="Add book"/>
        </form>
      )
    }
  };