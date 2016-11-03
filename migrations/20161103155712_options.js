'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('options', (table) => {
    table.increments();
    table.string('label')
      .notNullable()
      .unique();
    table.string('type')
      .notNullable()
      .defaultTo('checkbox');
  });
}
exports.down = function(knex) {
  return knex.schema.dropTable('options');
};
