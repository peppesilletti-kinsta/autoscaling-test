// Import required modules
const express = require('express');
const fetch = require('node-fetch-commonjs');

// Create an Express application
const app = express();

// Define a single endpoint
app.get('/increase-cpu-load', (req, res) => {
  // Start an infinite loop to keep the CPU load high
  while (true) {
    // Perform a CPU-intensive task
    const iterations = 1000000000; // Increase this number to increase the CPU load
    let result = 0;
    for (let i = 0; i < iterations; i++) {
      result += Math.sqrt(i);
    }
  }
});

app.get('/test', (req, res) => {
  return res.send('Hello Adam!');
});

app.get('/test2', (req, res) => {
  console.log(`Fetching http://${process.env.APP_HOST}:${process.env.APP_PORT}/test`)
  fetch(`http://${process.env.APP_HOST}:${process.env.APP_PORT}/test`)
    .then(response => response.text())
    .then(data => res.send(data))
    .catch(error => console.error(error));  
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});