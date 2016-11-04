'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/options', (req, res, next) => {
  knex('options')
  .then((options) => {
    res.send(options);
  });
});

module.exports = router;
