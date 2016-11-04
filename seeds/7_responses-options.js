'use strict';

exports.seed = function(knex) {

  return knex('reports-options').del()
    .then(() => {
      return knex('reports-options').insert([
        {
          id: 1,
          report_id: 1,
          option_id: 1,
          value: 'King George'
        },
        {
          id: 2,
          report_id: 1,
          option_id: 2,
          value: 'The Eastern Fields'
        },
        {
          id: 3,
          report_id: 1,
          option_id: 3,
          value: 'Curly, Moe, Larry'
        },
        {
          id: 4,
          report_id: 1,
          option_id: 4,
          value: 'Laser drill'
        },
        {
          id: 5,
          report_id: 1,
          option_id: 5,
          value: 'The ravenous bugblatter beast'
        },
        {
          id: 6,
          report_id: 1,
          option_id: 6,
          value: 'Rubber gloves'
        }
    ]);
    })
    .then(() => {
      return knex.raw(
        'SELECT setval(\'reports-options_id_seq\', (SELECT MAX(id) FROM "reports-options"));'
      );
    });
};
