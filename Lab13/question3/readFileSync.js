const fs = require("fs");

try {
  const data = fs.readFileSync("./files/about.txt", "utf-8");
  console.log("Sync read:", data);
} catch (err) {
  console.error("Error reading file:", err);
}

//Blocks the event loop until the file is fully read.

//Good for small files or startup configuration.

//Not recommended in production servers.
