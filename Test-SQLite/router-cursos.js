const express = require('express');
const knex = require('knex');
const router = express.Router();

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './dev.sqlite3'
    },
    useNullAsDefault: true
});

// Rota GET para obter todos os dados CURSO
router.get('/', async (req, res) => {
    try {
        const cursos = await db.select().table('cursos');
        res.json(cursos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
/* 
// Rota POST para adicionar um novo post
router.post('/', async (req, res) => {
    try {
        const { title, content } = req.body;
        await db('cursos').insert({ title, content });
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}); */

module.exports = router;