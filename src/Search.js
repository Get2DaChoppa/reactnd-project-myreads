import React from 'react'
import SearchBooks from './SearchBooks'
import SearchRslt from './SearchRslt'

class Search extends React.Component {
    render() {
        return (
          <div className="search-books">
            <SearchBooks />
            <SearchRslt />
          </div>
        )
    }
}

export default Search