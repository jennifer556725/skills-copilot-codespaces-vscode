// Create web server
// Create a web server that listens to incoming requests on port 3000. When a request is received, it should return the following JSON response:

// {
//   "status": "success",
//   "message": "You have hit the comments endpoint!"
// }
// The server should return the above JSON response for the following endpoints:

// GET /comments
// POST /comments
// PUT /comments
// DELETE /comments
// The server should return a 404 status code for all other endpoints.

// To test the server, you can run the following curl command in your terminal:

// curl -X GET http://localhost:3000/comments
// The above command should return the JSON response specified above.

// You can use the following code to get started:

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.status(200).json({ status: 'success', message: 'You have hit the comments endpoint!' });
});

app.post('/comments', (req, res) => {
  res.status(200).json({ status: 'success', message: 'You have hit the comments endpoint!' });
});

app.put('/comments', (req, res) => {
  res.status(200).json({ status: 'success', message: 'You have hit the comments endpoint!' });
});

app.delete('/comments', (req, res) => {
  res.status(200).json({ status: 'success', message: 'You have hit the comments endpoint!' });
});

app.get('*', (req, res) => {
  res.status(404).json({ status: 'error', message: 'Not found' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});