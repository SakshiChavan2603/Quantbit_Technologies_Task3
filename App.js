import React, { useState } from "react";

function App() {
  // Initial list of books
  const [books] = useState([
    "The Great Gatsby",
    "1984",
    "To Kill a Mockingbird",
    "The Catcher in the Rye",
    "The Hobbit",
    "Pride and Prejudice",
    "Harry Potter and the Sorcerer's Stone",
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered books based on the search query
  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Book List</h1>
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => <li key={index}>{book}</li>)
        ) : (
          <li>No books found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
