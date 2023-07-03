exports.up = function(knex) {
    return knex.schema
        .createTable('cursos', function(table) {
            table.increments('id').primary();
            // outros atributos do JSON
        })
        .createTable('disciplinas', function(table) {
            table.increments('id').primary();
            table.string('disciplinas');
            table.integer('cursos_id').unsigned().reference('id').inTable('cursos');
        })
}

exports.down = function(knex){
    return knex.schema
        .dropTable('disciplinas')
        .dropTable('cursos')
}