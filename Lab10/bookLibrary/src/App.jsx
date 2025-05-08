import React from "react";
import { BookProvider } from "./BookContext";
import { AddBookForm } from "./components/AddBookForm";
import { BookList } from "./components/BookList";

function App() {
  return (
    <BookProvider>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <h1>Book Library</h1>
        <AddBookForm />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
