const db = require('./_database');

async function listDate(){
    await db.connect();
    var result

    // Evento
    result = await db.query("SELECT * FROM evento")
    console.log('EVENTO')
    console.log(result.rows);

    // Participantes
    result = await db.query("SELECT * FROM participante")
    console.log('PARTICIPANTE')
    console.log(result.rows);

    // Eventos e Participantes
    result = await db.query("SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id")
    console.log('EVENTOS COM PARTICIPANTES')
    console.log(result.rows);

    await db.end();
}

listDate();