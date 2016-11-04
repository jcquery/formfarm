'use strict';

exports.seed = function(knex) {

  return knex('forms').del()
    .then(() => {
      return knex('forms').insert([{
        id: 1,
        name: 'Apples',
        farm_id: 1
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('forms_id_seq', (SELECT MAX(id) FROM forms));"
      );
    });
};
