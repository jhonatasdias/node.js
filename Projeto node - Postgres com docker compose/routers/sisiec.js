const express = require('express')
const db = require('../js/_database');

const router = express.Router();

router.get('/cursos', async(req, res) => {
    try{
        dbConnection = db.getInstance();

        const cursos = await dbConnection.client.query('SELECT * FROM tbl_curso');
        res.json(cursos.rows);
        console.log('Bsucando Cursos')
    } catch (error){
        console.error(error)
        res.status(500).json( {massage:'Erro ao buscar cursos'} )
    }
})

router.get('/professor', async(req, res) => {
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

router.get('/cursodisciplina', async(req, res) => {
    try{
        dbConnection = db.getInstance()

        const cursoDisciplina = await dbConnection.client.query("SELECT * FROM tbl_projeto_pedagogico")
        res.json(cursoDisciplina.rows);
    } catch (error){
        console.error(error)
        res.status(500).json( {massage:'Erro ao apresentar curso-disciplina'})
    }
})

module.exports = router;