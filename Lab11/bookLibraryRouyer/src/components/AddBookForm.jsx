import React, { useState } from "react";
import { useBookContext } from "../BookContext";

export const AddBookForm = () => {
  const { addBook } = useBookContext();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook({ title, author });
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};
