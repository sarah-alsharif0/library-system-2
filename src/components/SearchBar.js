import React, {useState, useEffect} from 'react';
import { BookList } from './BookList';
import {getBooks} from '../services/books.js';
import '../assets/styles/SearchBar.css';

export const SearchBar = () => {
    const [books,setBooks] = useState([]);
    const [filteredBooks,setFilteredBooks] = useState(books);

    useEffect(() => {
        if(books.length === 0)
         getBooks().then((tmpBooks) => {
           setBooks(tmpBooks.data);
         });
         console.log(books);
         setFilteredBooks(books);
       },[books]);

    const filterBooks = (books, query) => {
        if (query==="") {
            return books;
        }
        return books.filter((book) => {
            const bookTitle = book.title.toLowerCase();
            return bookTitle.includes(query);
        });
    };
    
    const handleChange = (e) => {
        const query = e.target.value;
        setFilteredBooks(filterBooks(books, query));
    }
    return (
        <div className="content-container">
        <div className="header-container">
        <span className="span-text">
            List of books in our library
        </span>
        <form >
            <input
                type="text"
                id="header-search"
                placeholder="Search for book title"
                name="search"
                onChange={handleChange}
                className="search-box"
            />
        </form>
        </div>
        <BookList books={filteredBooks}/>
        </div>
    )
}
