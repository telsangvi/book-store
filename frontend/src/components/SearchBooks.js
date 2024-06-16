import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../store/BookSlice';

const SearchBooks = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const queryParams = searchTerm ? { title: searchTerm } : null;
    dispatch(fetchBooks(queryParams));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBooks;
