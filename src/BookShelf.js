import React from 'react'
import PropTypes from 'prop-types'
import Grid from './BookGrid'

function Shelf(props) {
    const books = props.books;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <Grid books={books} handler={props.handler}/>
            </div>
        </div>
    )
}

Shelf.propTypes = {
    books: PropTypes.array,
    handler: PropTypes.func.isRequired
};

export default Shelf
