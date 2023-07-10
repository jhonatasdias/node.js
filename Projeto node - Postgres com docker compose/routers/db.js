const express = require('express');
const db = require('../js/_database');

const router = express.Router();

router.get('/eventos', async(req, res) => {
    try{
        dbConnection = db.getInstance();

        const eventos = await dbConnection.client.query('SELECT * FROM evento');
        res.json(eventos.rows);
        console.log('Acessando Eventos');
    }catch (error) {
        console.error(error);
        res.status(500).json( {massage: 'Erro ao buscar eventos'} )
    } finally {
       // await db.client.end();
    }
})

router.get('/participantes', async(req, res) => {
    try{
        dbConnection = db.getInstance();
        
        const participantes = await dbConnection.client.query('SELECT * FROM participante')
        res.json(participantes.rows);
    } catch(error){
        console.error(error);
        res.status(500).json( {massage: 'Erro ao buscar participantes'} )
    } finally {
       // await db.end();
    }
})

router.get('/relacionamento', async(req, res) => {
    try{
        dbConnection = db.getInstance();
        
        const participantes = await dbConnection.client.query('SELECT * FROM evento_participante')
        res.json(participantes.rows);
    } catch(error){
        console.error(error);
        res.status(500).json( {massage: 'Erro ao buscar relacionamento'} )
    } finally {
      //  await db.end();
    }
}) 



module.exports = router;