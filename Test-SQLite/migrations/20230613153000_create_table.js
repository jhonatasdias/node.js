exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
      table.timestamps(true, true);
    });
};
  
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
  