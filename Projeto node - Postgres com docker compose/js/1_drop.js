const db = require('./_database');

async function dropTable(){
    await db.connect();
    await db.query('DROP TABLE evento CASCADE');  // CASCADE table dependece
    await db.query('DROP TABLE participante CASCADE');
    await db.query('DROP TABLE evento_participante CASCADE');
    await db.end();

    console.log('Table removed')
}

dropTable();
