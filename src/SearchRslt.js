import React from 'react'
import Grid from './BookGrid'

class SearchRslt extends React.Component {
    render(){
        return (
            <div className="search-books-results">
              <ol className="books-grid">
                <Grid />
              </ol>
            </div>
        )
    }
}

export default SearchRslt