import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../store/BookSlice';

const BookTable = ({ queryParams }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.items);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks(queryParams));
  }, [dispatch, queryParams]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{new Date(book.publishedDate).toLocaleDateString()}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
