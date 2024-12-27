//backend express

// server/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample in-memory services data
const services = [
  { id: 1, name: "Web Development", description: "Build modern websites and apps." },
  { id: 2, name: "SEO Optimization", description: "Improve your website's search engine ranking." },
  { id: 3, name: "Content Creation", description: "Engage audiences with quality content." },
];

// API route to get services
app.get("/api/services", (req, res) => {
  res.json(services);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
