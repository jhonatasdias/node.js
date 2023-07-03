const express = require('express');
const knex = require('knex');
const router = express.Router();

const db = knex({
    client: 'sqlite3',
    connection: {
        filename:'./dev.sqlite3'
    },
    useNullAsDefault: true
});

router.get('/', async (req, res) =>{
    try {
        const cursosDisciplinas = await db.select().table('cursos');
        res.json(cursosDisciplinas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' })
    }
})