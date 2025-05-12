import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./BookContext";
import { AddBookForm } from "./components/AddBookForm";
import { BookList } from "./components/BookList";
import { EditBookPage } from "./components/EditBookPage";
import "./App.css";

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="app-container">
          <h1 className="app-title">📚 Book Library</h1>
          <nav className="app-nav">
            <Link to="/" className="nav-link">
              List Books
            </Link>
            <Link to="/add" className="nav-link">
              Add Book
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBookForm />} />
            <Route path="/edit/:id" element={<EditBookPage />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
