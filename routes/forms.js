'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/form/:id', (req, res, next) => {
  const { id } = req.params;
  let options;

  knex('forms')
    .select('options.id', 'options.label', 'options.type')
    .where('forms.id', id)
    .innerJoin('forms-options', 'forms-options.form_id', 'forms.id')
    .innerJoin('options', 'options.id', 'forms-options.option_id')
    .then((formRes) => {
      options = formRes;
      return knex('forms')
        .select('id', 'name')
        .where('forms.id', id)
    })
    .then((formData) => {
      const form = formData[0];

      form.options = options;
      res.send(form);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
