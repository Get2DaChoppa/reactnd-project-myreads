import React from 'react'
import PropTypes from 'prop-types'
import BookCtrl from './BookCtrl'

function Book(props) {
    const book = props.book;
    const url = book.imageLinks.thumbnail;
    const title = book.title;
    const authors  = book.authors;

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${url})`
                    }}
                >
                </div>
                <BookCtrl book={book} handler={props.handler}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

Book.propTypes = {
    books: PropTypes.array,
    handler: PropTypes.func.isRequired
};

export default Book