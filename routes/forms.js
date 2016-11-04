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

router.get('/forms', (req, res, next) => {
  const userId = 1;

  knex('users')
    .select('forms.name', 'forms.id')
    .where('users.id', userId)
    .innerJoin('farms', 'farms.id', 'users.farm_id')
    .innerJoin('forms', 'forms.farm_id', 'farms.id')
    .then((forms) => {
      res.send(forms);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/form', (req, res, next) => {
  const { name, options } = req.body;
  const userId = 1;
  const newForm = {};

  knex('users')
    .select('farm_id')
    .where('users.id', userId)
    .first()
    .then((farmId) => {
      return knex('forms')
        .insert({ name, farm_id: farmId.farm_id }, '*');
    })
    .then((form) => {
      newForm.id = form[0].id;
      newForm.name = form[0].name;
      console.log(newForm);
      return options.map((optId) => {
        return knex('forms-options').insert({
          form_id: newForm.id,
          option_id: optId
        });
      });
    })
    .then((promises) => {
      return Promise.all(promises);
    })
    .then(() => {
      res.send(newForm);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
