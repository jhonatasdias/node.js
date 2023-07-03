const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'localhost',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432
})


pool.query(`CREATE TABLE mytable (id SERIAL PRIMARY KEY, name VARCHAR(255))`, (err, res) => {
    if(err){
        console.error(err);
    } else {
        console.log('Tabela criada com sucesso');
    }
    pool.end();
})