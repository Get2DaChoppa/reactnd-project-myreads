import React from 'react'
import SearchBooks from './SearchBooks'
import SearchRslt from './SearchRslt'

function Search(props) {
    return (
      <div className="search-books">
        <SearchBooks />
        <SearchRslt books={props.books} handler={props.handler}/>
      </div>
    )
}

export default Search