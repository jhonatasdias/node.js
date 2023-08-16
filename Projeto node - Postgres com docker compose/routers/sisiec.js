const express = require('express')
const db = require('../js/_database');

const router = express.Router();

router.get('/cursos', async(req, res) => {
    try{
        dbConnection = db.getInstance();

        const cursos = await dbConnection.client.query('SELECT * FROM tbl_curso');
        res.json(cursos.rows);
        console.log('Buscando Cursos')
    } catch (error){
        console.error(error)
        res.status(500).json( {massage:'Erro ao buscar cursos'} )
    }
})

router.get('/professores', async(req, res) => {
    try{
        dbConnection = db.getInstance();

        const professor = await dbConnection.client.query("SELECT * FROM tbl_professor");
        res.json(professor.rows);
        console.log('Buscando Professor');
    } catch(error) {
        console.error(error)
        res.status(500).json( {massage:'Erro ao buscar professor'} )
    }
})

router.get('/disciplinas', async(req, res) => {
    try{
        dbConnection = db.getInstance();

        const professor = await dbConnection.client.query("SELECT * FROM tbl_disciplina");
        res.json(professor.rows);
        console.log('Buscando Disciplina');
    } catch(error) {
        console.error(error)
        res.status(500).json( {massage:'Erro ao buscar disciplina'} )
    }
})

router.get('/cursodisciplinas', async(req, res) => {
    try{
        dbConnection = db.getInstance()

        const cursoDisciplina = await dbConnection.client.query(
            `SELECT c.id_curso, c.id_unidade, c.dsc_nome_curso, c.dsc_sigla_curso, od.id_oferta, ARRAY_AGG(od.id_disciplina) AS id_disciplina
             FROM tbl_oferta_disciplina od
                INNER JOIN tbl_oferta o ON od.id_oferta = o.id_oferta
                INNER JOIN tbl_curso c ON o.id_curso = c.id_curso
             GROUP BY od.id_oferta, c.id_curso, c.id_unidade, c.dsc_nome_curso, c.dsc_sigla_curso`
            )
        res.json(cursoDisciplina.rows);
        console.log('Buscando curso-disciplina');
    } catch (error){
        console.error(error)
        res.status(500).json( {massage:'Erro ao buscar curso-disciplina'})
    }
})

module.exports = router;