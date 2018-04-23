import React from 'react'
import PropTypes from 'prop-types'


function BookCtrl(props) {
    return (
        <div className="book-shelf-changer">
            <select
                value={props.book.shelf}
                onChange={event => props.handler(props.book, event.target.value)}
            >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookCtrl.propTypes = {
    books: PropTypes.array,
    handler: PropTypes.func.isRequired
};

export default BookCtrl

