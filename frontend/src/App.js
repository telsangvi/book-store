import React from 'react';
import BookTable from './components/BookTable';
import SearchBooks from "./components/SearchBooks";
import SortBooks from "./components/SortBooks";
import FilterBooks from "./components/FilterBooks";

function App() {
  return (
    <div className="App">
      <h1>Book Library</h1>

      <SearchBooks />
      <SortBooks />
      <FilterBooks />

      <BookTable queryParams={null} />
    </div>
  );
}

export default App;
