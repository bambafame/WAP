import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookContext } from "../BookContext";

export const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, updateBook } = useBookContext();
  const book = books.find((b) => b.id === id);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateBook(id, { title, author });
    navigate("/");
  };

  if (!book) return <p>Book not found</p>;

  return (
    <form onSubmit={handleUpdate}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};
