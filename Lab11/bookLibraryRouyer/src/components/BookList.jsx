import React from "react";
import { useBookContext } from "../BookContext";
import { Link } from "react-router-dom";

export const BookList = () => {
  const { books, deleteBook, loading, error } = useBookContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}{" "}
          <Link to={`/edit/${book.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
