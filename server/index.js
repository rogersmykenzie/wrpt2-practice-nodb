const express = require('express');
const {
  getDogs,
  addDog
} = require('./dogController');

const app = express();

const PORT = 5050;

app.use(express.json());

app.get('/api/dogs', getDogs);

app.post('/api/dogs', addDog);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));