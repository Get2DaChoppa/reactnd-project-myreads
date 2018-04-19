import React from 'react'
import Book from './Book'

function Grid(props) {
    return(
        <ol className="books-grid">
            {props.books.map((book) => (
                <li key={book.id}>
                    <Book book={book} handler={props.handler}/>
                </li>
            ))}
        </ol>
    );
}

export default Grid


