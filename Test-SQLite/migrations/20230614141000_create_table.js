exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('cursos', function(table) {
            table.increments('id').primary();
            table.string('curso');
            table.string('sigla');
            table.boolean('ativo');    
            table.string('nucleo');
            table.specificType('tematicas', 'string[]');
            table.string('exp_ti');
            table.integer('exp_ti_val');
        }),
        knex.schema.createTable('disciplinas_cursos', function(table){
            table.increments('id');
            table.integer('cursos_id');
            table.integer('disciplinas_id');
        }),
        knex.schema.createTable('disciplinas', function(table) {
            table.increments('id').primary();
            table.string('disciplina');
        })
    ]);
};

exports.down = function(knex, Promise){
    return Promise.all([
        knex.schema.dropTable('cursos'),
        knex.schema.dropTable('disciplinas_cursos'),
        knex.schema.dropTable('disciplinas')
    ]);
};













/* exports.up = function(knex) {
    return knex.schema.createTable('cursos', function(table)
    {
        table.increments('id').primary();
        table.string('curso');
        table.string('sigla');
        table.boolean('ativo');
        table.jsonb('disciplinas', 'INT[]');
/*         table.integer('id_nucleo').unsigned().references('id').inTable('nucleos'); // relação com outra tabela (como é relacionamento de tabelas irá ser aplicado posteriormente)
        table.string('nucleo');
        table.specificType('tematicas', 'string[]');
        table.string('exp_ti');
        table.integer('exp_ti_val');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cursos');
}; */