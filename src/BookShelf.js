import React from 'react'
import Grid from './BookGrid'

function Shelf(props) {
    const books = props.books;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <Grid books={books} />
            </div>
        </div>
    )
}

export default Shelf
