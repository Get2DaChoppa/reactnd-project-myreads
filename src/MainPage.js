import React from 'react'
import Shelf from './BookShelf'
//import { Link } from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <Shelf title="Currently Reading" />
                    <Shelf title="Want to Read" />
                    <Shelf title="Read" />
                  </div>
                </div>
                <div className="open-search">
                  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default Home