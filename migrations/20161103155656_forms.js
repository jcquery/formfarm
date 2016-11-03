'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('forms', (table) => {
    table.increments();
    table.string('name')
      .notNullable()
      .unique();
    table.integer('farm_id')
      .notNullable()
      .references('id')
      .inTable('farms')
      .onDelete('CASCADE')
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('forms');
};
