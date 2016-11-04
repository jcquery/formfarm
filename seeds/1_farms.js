'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('farms').del()
    .then(() => {
      return knex('farms').insert([{
        id: 1,
        name: 'Happy Friendly Orchard',
        hashed_password: '$2a$12$w72Eos8pU07S/j5p1pR3dO.fg0B5ui1C1YAmbvUrp6IZ76E3lR3Gm'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('farms_id_seq', (SELECT MAX(id) FROM farms));"
      );
    });
};
