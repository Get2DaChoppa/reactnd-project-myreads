import React from 'react'
import PropTypes from 'prop-types'
import Grid from './BookGrid'

function SearchRslt(props) {
    return (
        <div className="search-books-results">
          <ol className="books-grid">
            <Grid books={props.books} handler={props.handler}/>
          </ol>
        </div>
    )
}

SearchRslt.propTypes = {
    books: PropTypes.array,
    handler: PropTypes.func.isRequired
};

export default SearchRslt