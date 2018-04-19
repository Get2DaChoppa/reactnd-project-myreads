import React from 'react'
import { Link } from "react-router-dom"
import Shelf from './BookShelf'


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
                    <Shelf title="Currently Reading" books={currentlyReading} handler={props.handler}/>
                    <Shelf title="Want to Read" books={wantToRead} handler={props.handler}/>
                    <Shelf title="Read" books={read} handler={props.handler}/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default Home