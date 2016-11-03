'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('farms', (table) => {
    table.increments();
    table.string('name')
      .notNullable()
      .unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('farms');
};
