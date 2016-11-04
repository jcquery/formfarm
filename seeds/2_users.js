'use strict';

exports.seed = function(knex) {

  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'James',
        last_name: 'Franko',
        email: 'james@franko.com',
        hashed_password: '$2a$12$w72Eos8pU07S/j5p1pR3dO.fg0B5ui1C1YAmbvUrp6IZ76E3lR3Gm',
        owner: true,
        farm_id: 1
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
