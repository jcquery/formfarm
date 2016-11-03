'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.disable('x-powered-by');

if (process.env.NODE_ENV !== 'test') {
  const morgan = require('morgan');

  app.use(morgan('short'));
}

app.use(express.static(path.join('public')));

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port);
  }
});
