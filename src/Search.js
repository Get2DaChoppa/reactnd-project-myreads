import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SearchRslt from './SearchRslt'
import * as BooksAPI from "./BooksAPI";

class Search extends React.Component {

    state= {
        query: [],
        results: []
    }

    handleChange(event) {
        const query = event.target.value;
        this.setState({query: query});
        this.searchBooks(query)
    }

    searchBooks(query) {
      query = query.trim()
      if (query) {
        BooksAPI.search(query).then((books) => {
            if (books.error) {
                books = []
            }
            this.setState({ results: books });
        })
      } else {
            this.setState({ results: [] });
      }
    }

    render(){
        const books = this.state.results;
        return (
          <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={event => this.handleChange(event)}
              />
            </div>
          </div>
            <SearchRslt books={books} handler={this.props.handler}/>
          </div>
        )
    }
}

Search.propTypes = {
    books: PropTypes.array,
    handler: PropTypes.func.isRequired
};

export default Search