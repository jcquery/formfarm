'use strict';

exports.seed = function(knex) {
  
  return knex('options').del()
    .then(() => {
      return knex('options').insert([{
        id: 1,
        name: 'Team Leader',
        type: 'text'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('options_id_seq', (SELECT MAX(id) FROM options));"
      );
    });
};
