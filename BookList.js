import React from "react";

function BookList({ books }) {
  return (
    <ul>
      {books.length > 0 ? (
        books.map((book, index) => <li key={index}>{book}</li>)
      ) : (
        <li>No books found</li>
      )}
    </ul>
  );
}

export default BookList;
