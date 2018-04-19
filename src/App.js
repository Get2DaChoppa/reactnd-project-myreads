import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './MainPage'
import Search from './Search'



class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentWillMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll()
    .then(books => this.setState({ books }))
    .catch(() => { alert('Something went wrong with your request.'); });
  }

  handler = (book, e) => {
    BooksAPI.update(book, e)
      .then(() => { this.getBooks(); })
      .catch(() => { alert('Something went wrong with your request.'); })
  }

  render() {
    const books = this.state.books;
    return (
      <div className="app">
        {this.state.showSearchPage ?  <Search books={books} /> : <Home books={books} handler={this.handler}/>}
      </div>
    )
  }
}

export default BooksApp
