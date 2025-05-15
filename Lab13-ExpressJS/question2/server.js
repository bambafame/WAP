const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Route: / or /home
app.get(["/", "/home"], (req, res) => {
  res.type("text/plain");
  res.send("Welcome to my website");
});

// Route: /image
app.get("/image", (req, res) => {
  const imagePath = path.join(__dirname, "files", "image.png");
  res.sendFile(imagePath, { headers: { "Content-Type": "image/png" } });
});

// Route: /pdf
app.get("/pdf", (req, res) => {
  const pdfPath = path.join(__dirname, "files", "document.pdf");
  res.sendFile(pdfPath, { headers: { "Content-Type": "application/pdf" } });
});

// Route: /about
app.get("/about", (req, res) => {
  const textPath = path.join(__dirname, "files", "about.txt");
  res.sendFile(textPath, { headers: { "Content-Type": "text/plain" } });
});

// 404 handler
app.use((req, res) => {
  res.status(404).type("text/plain").send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
