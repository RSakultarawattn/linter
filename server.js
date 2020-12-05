
const { linter } = require('./linter.js');
const express = require('express');
const app = express();



app.use(express.json())

app.post('/api/v1/lint', (req, res) => {
  const result = linter(req.body.code)
  res.send(result)
});

app.listen(7890, () => {
  console.log('started on 7890')
})