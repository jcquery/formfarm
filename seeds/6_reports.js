'use strict';

exports.seed = function(knex) {

  return knex('reports').del()
    .then(() => {
      return knex('reports').insert([
        {
          id: 1,
          farm_id: 1,
          user_id: 1,
          created_at: '2016-11-03 23:09:11.761166+03',
          updated_at: '2016-11-03 23:09:11.761166+03'
        }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('reports_id_seq', (SELECT MAX(id) FROM reports));"
      );
    });
};
