const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a Node.js app deployed on ECS Fargate.');
});

// About Page
app.get('/about', (req, res) => {
  res.send('This is the about page. Here we share details about the application.');
});

// API: Get Users
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'Moderator' },
    { id: 4, name: 'Akash', role: 'Admin' },
    { id: 5, name: 'Om', role: 'Moderator' },
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
