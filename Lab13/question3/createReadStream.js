const fs = require("fs");

const stream = fs.createReadStream("./files/about.txt", { encoding: "utf-8" });

stream.on("data", (chunk) => {
  console.log("Stream chunk:", chunk);
});

stream.on("error", (err) => {
  console.error("Stream error:", err);
});

stream.on("end", () => {
  console.log("Finished reading stream");
});

//Reads the file in chunks, doesn't load entire file into memory.

//Best for large files (e.g., videos, logs).

//Integrates well with HTTP responses (pipe()).
