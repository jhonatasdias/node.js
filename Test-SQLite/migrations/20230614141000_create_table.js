exports.up = function(knex) {
    return knex.schema.createTable('cursos', function(table)
    {
        table.increments('id').primary();
        table.string('curso');
        table.string('sigla');
        table.boolean('ativo');
        table.specificType('disciplinas', 'integer[]');
        table.integer('id_nucleo'); // relação com outra tabela
        table.string('nucleo');
        table.specificType('tematicas', 'string[]');
        table.string('exp_ti');
        table.integer('exp_ti_val');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cursos');
};