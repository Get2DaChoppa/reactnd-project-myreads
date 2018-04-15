import React from 'react'
import Shelf from './BookShelf'
//import { Link } from 'react-router-dom';

function Home(props) {
  const books = props.books;
  const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
  const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
  const read = books.filter((book) => book.shelf === 'read');

    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title="Currently Reading" books={currentlyReading}/>
                <Shelf title="Want to Read" books={wantToRead}/>
                <Shelf title="Read" books={read}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
        </div>
    )
}

export default Home