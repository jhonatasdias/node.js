exports.up = function (knex) {
    return knex.schema.createTable('produtos', function (table) {
        table.increments('id').primary();
        table.string('descricao', 200).notNullable();
        table.decimal('valor').notNullable().defaultTo(0);
        table.string('marca', 100).nullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('produto')
};