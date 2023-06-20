exports.up = function(knex) {
    return knex.schema.createTable('cursos', function(table)
    {
        table.increments('id').primary();
        table.string('curso');
        table.string('sigla');
        table.boolean('ativo');
        table.specificType('disciplinas', 'integer[]');
/*         table.integer('id_nucleo').unsigned().references('id').inTable('nucleos'); // relação com outra tabela (como é relacionamento de tabelas irá ser aplicado posteriormente)*/
        table.string('nucleo');
        table.specificType('tematicas', 'string[]');
        table.string('exp_ti');
        table.integer('exp_ti_val');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cursos');
};