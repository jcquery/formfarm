'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('reports-options', (table) => {
    table.increments();
    table.integer('report_id')
      .notNullable()
      .references('id')
      .inTable('reports')
      .onDelete('CASCADE')
      .index();
    table.integer('option_id')
      .notNullable()
      .references('id')
      .inTable('options')
      .onDelete('CASCADE')
      .index();
    table.string('value')
      .notNullable()
      .defaultTo('');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reports-options');
};
