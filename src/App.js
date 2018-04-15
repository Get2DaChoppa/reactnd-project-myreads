import React from 'react'
//import ReactDOM from 'react-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './MainPage'
import Search from './Search'



class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentWillMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ?  <Search /> : <Home />}
      </div>
    )
  }
}

export default BooksApp
