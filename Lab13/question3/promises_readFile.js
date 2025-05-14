const fs = require("fs").promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile("./files/about.txt", "utf-8");
    console.log("Async read (Promise):", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFileAsync();

//Cleaner with async/await.

//Recommended for modern apps.
