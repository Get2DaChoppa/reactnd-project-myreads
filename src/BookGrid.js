import React from 'react'
import PropTypes from 'prop-types'
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

Grid.propTypes = {
    books: PropTypes.array,
    handler: PropTypes.func.isRequired
};

export default Grid


