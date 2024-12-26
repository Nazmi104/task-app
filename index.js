// Import the built-in http module
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set the response status code to 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
    res.end('Hello, World!'); // Send a response message
});

// Define the port number
const PORT = 3000;

// Start the server and listen on localhost
server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
