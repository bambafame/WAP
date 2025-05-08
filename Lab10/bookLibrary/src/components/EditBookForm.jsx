import React, { useState } from "react";
import { useBookContext } from "../BookContext";

export const EditBookForm = ({ book, setEditingBookId }) => {
  const { updateBook } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateBook(book.id, { title, author });
    setEditingBookId(null);
  };

  return (
    <form onSubmit={handleUpdate}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};
