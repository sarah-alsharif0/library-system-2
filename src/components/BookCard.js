import React from 'react'
import '../assets/styles/BookCard.css'

export const BookCard = (props) => {
    const book = props.book;
    return (
        <div className="book-card">
            <img alt="" src={book.image} className="book-image"/>
            <h3 className="book-title">
                {book.title}
            </h3>
            <h4 className="book-author">
                {book.author}
            </h4>
            <p className="book-description">
            {book.description}
            </p>  
            </div>
    )
}
