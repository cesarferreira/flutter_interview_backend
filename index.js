const express = require('express');
const app = express();
const port = 3000;

// Array of items
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

// GET endpoint
app.get('/items', (req, res) => {
    res.json(items);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
