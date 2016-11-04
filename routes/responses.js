'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.post('/response', (req, res, next) => {
  const { id, options } = req.body;
  const userId = 1;

  knex('reports')
    .insert({
      form_id: id,
      user_id: userId
    }, 'id')
    .then((repId) => {
      console.log(repId);
      return options.map((option) => {
        return knex('reports-options').insert({
          report_id: repId[0r],
          option_id: option.id,
          value: option.value
        });
      });
    })
    .then((promises) => {
      return Promise.all(promises);
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
