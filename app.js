const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Catchall route
app.use((req, res, next) => {
  res.status(404).send('<h1>Error 404</h1><p><h2>Page not found</h2></p>');
});

app.listen(3000);
