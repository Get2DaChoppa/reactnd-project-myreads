import React from 'react'
import Book from './Book'

class Grid extends React.Component {
    render() {
        return(
            <ol className="books-grid">
                <li>
                    <Book />
                </li>
            </ol>
        );
    }
}

export default Grid


