const fs = require("fs");

fs.readFile("./files/about.txt", "utf-8", (err, data) => {
  if (err) {
    return console.error("Error reading file:", err);
  }
  console.log("Async read (callback):", data);
});

//Does not block the event loop.

//Common in older-style Node.js codebases.

//Great for concurrency.
