'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('reports', (table) => {
    table.increments();
    table.integer('forms_options_id')
      .notNullable()
      .references('id')
      .inTable('forms-options')
      .onDelete('CASCADE')
      .index();
    table.string('value').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reports');
};
