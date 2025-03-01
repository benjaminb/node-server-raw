const express = require('express');

app = express();
app.use((req, res, next) => {
  console.log('in first mw function');
  next();
});

app.use((req, res, next) => {
  console.log('in second mw function');
  res.send('<h1>Testing</h1>');
});

app.listen(3000);
