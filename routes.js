const fs = require('fs');

const homePage = fs.readFileSync('./web_pages/index.html');

function requestHandler(req, res) {
  switch (req.url) {
    case '/process':
      if (req.method === 'POST') {
        const chunks = [];
        req.on('data', chunk => {
          chunks.push(chunk);
        });
        req.on('end', () => {
          const body = Buffer.concat(chunks).toString();
          const formInput = body.split('=')[1];
          fs.writeFile('formInput.txt', formInput, (err) => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });
        });
      }
      break;
    case '/':
    default:
      res.write(homePage);
      res.end();
  }
}

module.exports = requestHandler;