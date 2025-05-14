const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method === "GET") {
    if (url === "/" || url === "/home") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to my website");
    } else if (url === "/image") {
      const imagePath = path.join(__dirname, "files", "image.png");
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end("Error loading image");
        }
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data);
      });
    } else if (url === "/pdf") {
      const pdfPath = path.join(__dirname, "files", "document.pdf");
      fs.readFile(pdfPath, (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end("Error loading PDF");
        }
        res.writeHead(200, { "Content-Type": "application/pdf" });
        res.end(data);
      });
    } else if (url === "/about") {
      const txtPath = path.join(__dirname, "files", "about.txt");
      fs.readFile(txtPath, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end("Error loading text file");
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
