import React, { useState } from "react";
import { useBookContext } from "../BookContext";
import { EditBookForm } from "./EditBookForm";

export const BookList = () => {
  const { books, deleteBook, loading, error } = useBookContext();
  const [editingBookId, setEditingBookId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {editingBookId === book.id ? (
            <EditBookForm book={book} setEditingBookId={setEditingBookId} />
          ) : (
            <>
              {book.title} by {book.author}{" "}
              <button onClick={() => setEditingBookId(book.id)}>Edit</button>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
