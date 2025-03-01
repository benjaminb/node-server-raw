const http = require('http');
const express = require('express');

app = express();
app.use((req, res, next) => {
  console.log('in first mw function');
  next();
});

app.use((req, res, next) => {
  console.log('in second mw function');
});

const server = http.createServer(app);
server.listen(3000);
