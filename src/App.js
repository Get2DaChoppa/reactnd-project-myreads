import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './MainPage'
import Search from './Search'



class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage:''
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
        <Route exact path="/search" render={() => (
          <Search
            books={books}
            handler={this.handler}
          />
        )}/>
        <Route exact path="/" render={() => (
          <Home
            books={books}
            handler={this.handler}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
