'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('farms').del()
    .then(() => {
      return knex('farms').insert([{
        id: 1,
        name: 'Happy Friendly Orchard',
        hashed_password: '$2a$12$bhqmyFfIWWmEeN5vlwTKKuamEvgQ409TVZJYeL3YwC45RhF5RovKC'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('farms_id_seq', (SELECT MAX(id) FROM farms));"
      );
    });
};
