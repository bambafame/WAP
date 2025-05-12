import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext(null);
const API_URL = "https://67d17ef590e0670699ba5929.mockapi.io/books";

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (book) => {
    try {
      const res = await axios.post(API_URL, book);
      setBooks((prev) => [...prev, res.data]);
    } catch (err) {
      setError(err);
    }
  };

  const updateBook = async (id, updatedBook) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedBook);
      setBooks((prev) => prev.map((b) => (b.id === id ? res.data : b)));
    } catch (err) {
      setError(err);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, updateBook, deleteBook, loading, error }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
