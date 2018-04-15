import React from 'react'
import Grid from './BookGrid'

class Shelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <Grid />
                </div>
            </div>
        )
    }
}

export default Shelf
