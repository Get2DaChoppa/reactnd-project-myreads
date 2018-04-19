import React from 'react'
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

export default SearchRslt