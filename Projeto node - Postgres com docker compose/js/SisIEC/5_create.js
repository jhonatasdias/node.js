const db = require('../_database');

async function createTable(){
    await db.connect();

    await db.query(`CREATE TABLE curso_disciplina(
        id_curso integer NOT NULL,
        id_unidade integer,
        dsc_nome_curso VARCHAR (50),
        dsc_sigla_curso VARCHAR (50),
        id_disciplina integer NOT NULL,
        ativo booleon,
        PRYMARY KEY (id_curso, id_disciplina),
        FOREIGN KEY (id_disciplina) REFERENCES tbl_disciplina (id),
        FOREIGN KEY 
    )`)
}