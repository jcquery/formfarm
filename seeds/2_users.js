'use strict';

exports.seed = function(knex) {

  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'James',
        last_name: 'Franko',
        email: 'james@franko.com',
        hashed_password: '$2a$12$bhqmyFfIWWmEeN5vlwTKKuamEvgQ409TVZJYeL3YwC45RhF5RovKC',
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
