'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.post('/response', (req, res, next) => {
  console.log(req.body);
  const { id, options } = req.body;
  const userId = 1;

  knex('reports')
    .insert({
      form_id: id,
      user_id: userId
    }, 'id')
    .then((repId) => {

      return options.map((option) => {
        return knex('reports-options').insert({
          report_id: repId[0],
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

router.get('/responses', (req, res, next) => {
  const userId = 1;

  knex('users')
    .select('forms.name', 'reports.created_at', 'reports.id')
    .where('users.id', userId)
    .innerJoin('farms', 'farms.id', 'users.farm_id')
    .innerJoin('forms', 'forms.farm_id', 'farms.id')
    .innerJoin('reports', 'reports.form_id', 'forms.id')
    .then((responses) => {
      res.send(responses);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/response/:id', (req, res, next) => {
  const resId = req.params.id;
  let formRes = {};

  knex('reports')
    .select('first_name', 'last_name', 'created_at', 'name')
    .where('reports.id', resId)
    .innerJoin('users', 'users.id', 'reports.user_id')
    .innerJoin('forms', 'forms.id', 'reports.form_id')
    .then((reportRes) => {
      formRes = reportRes[0];

      return knex('reports-options')
        .select('label', 'value')
        .where('report_id', resId)
        .innerJoin('options', 'options.id', 'option_id')
    })
    .then((optionRes) => {
      formRes.options = optionRes;

      res.send(formRes);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
