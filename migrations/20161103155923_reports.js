'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('reports', (table) => {
    table.increments();
    table.integer('form_id')
      .notNullable()
      .references('id')
      .inTable('forms')
      .onDelete('CASCADE')
      .index();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reports');
};
