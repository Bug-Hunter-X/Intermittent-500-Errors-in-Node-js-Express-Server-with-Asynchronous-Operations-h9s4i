const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation using async/await
    await new Promise(resolve => setTimeout(resolve, 5000)); 
    res.send('Hello from Express!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});