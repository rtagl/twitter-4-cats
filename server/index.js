const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'working!'
  })
})


app.listen(5000, () => {
  console.log('listening on port 5000')
})