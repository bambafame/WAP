const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); // for application/json
app.use(bodyParser.urlencoded({ extended: true })); // for application/x-www-form-urlencoded

// Helper function to extract input from all possible sources
function getOperands(req) {
  let a, b;

  if (req.params.a !== undefined && req.params.b !== undefined) {
    a = Number(req.params.a);
    b = Number(req.params.b);
  } else if (req.query.a !== undefined && req.query.b !== undefined) {
    a = Number(req.query.a);
    b = Number(req.query.b);
  } else if (req.body.a !== undefined && req.body.b !== undefined) {
    a = Number(req.body.a);
    b = Number(req.body.b);
  }

  return [a, b];
}

// Route template
const operations = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => (b !== 0 ? a / b : "Cannot divide by zero"),
  modulus: (a, b) => (b !== 0 ? a % b : "Cannot mod by zero"),
};

Object.entries(operations).forEach(([name, operation]) => {
  // GET with params
  app.get(`/${name}/:a/:b`, (req, res) => {
    const [a, b] = getOperands(req);
    res.json({ results: operation(a, b) });
  });

  // GET with query
  app.get(`/${name}`, (req, res) => {
    const [a, b] = getOperands(req);
    res.json({ results: operation(a, b) });
  });

  // POST with body
  app.post(`/${name}`, (req, res) => {
    const [a, b] = getOperands(req);
    res.json({ results: operation(a, b) });
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Calculator API running on http://localhost:${PORT}`);
});
