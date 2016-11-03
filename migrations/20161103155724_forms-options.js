'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('forms-options', (table) => {
    table.increments();
    table.integer('form_id')
      .notNullable()
      .references('id')
      .inTable('forms')
      .onDelete('CASCADE')
      .index();
    table.integer('option_id')
      .notNullable()
      .references('id')
      .inTable('options')
      .onDelete('CASCADE')
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('forms-options');
};
