import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../store/BookSlice';

const SortBooks = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (e) => {
    const sortParam = e.target.value;
    setSortBy(sortParam);
    const queryParams = sortParam ? { sort: sortParam } : null;
    dispatch(fetchBooks(queryParams));
  };

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Sort by...</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="publishedDate">Published Date</option>
      </select>
    </div>
  );
};

export default SortBooks;
