const express = require('express');
const app = express();


app.use(express.json());



app.listen(7890, () => {
    console.log('started on 7890');
})

const express = require('express');
const app = express();
const Color = require('./lib/Color');

app.use(express.json());

// endpoints
app.post('/api/v1/color', (req, res) => {
  const color = new Color(req.body.red, req.body.green, req.body.blue);
  res.send(color.asHex());
});

// listen
app.listen(7890, () => {
  console.log('started on 7890');
});
