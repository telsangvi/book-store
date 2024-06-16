import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../store/BookSlice';

const FilterBooks = () => {
  const dispatch = useDispatch();
  const [genreFilter, setGenreFilter] = useState('');

  const handleFilterChange = (e) => {
    const filterParam = e.target.value;
    setGenreFilter(filterParam);
    const queryParams = filterParam ? { genre: filterParam } : null;
    dispatch(fetchBooks(queryParams));
  };

  return (
    <div>
      <select value={genreFilter} onChange={handleFilterChange}>
        <option value="">Filter by genre...</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Mystery">Mystery</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default FilterBooks;
