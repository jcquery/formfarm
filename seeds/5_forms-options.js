'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('forms-options').del()
    .then(() => {
      return knex('forms-options').insert([
        {
          id: 1,
          form_id: 1,
          option_id: 1
        },
        {
          id: 2,
          form_id: 1,
          option_id: 2
        },
        {
          id: 3,
          form_id: 1,
          option_id: 3
        },
        {
          id: 4,
          form_id: 1,
          option_id: 4
        },
        {
          id: 5,
          form_id: 1,
          option_id: 5
        },
        {
          id: 6,
          form_id: 1,
          option_id: 6
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        'SELECT setval(\'forms-options_id_seq\', (SELECT MAX(id) FROM "forms-options"));'
      );
    });
};
