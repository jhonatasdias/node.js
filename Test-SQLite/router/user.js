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

// Rota GET para obter todos os usuários
router.get('/', async(req, res) => {  // req = request, res = response
    try {
        const users = await db.select().table('users');
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Rota POST para adicionar um novo usuário
router.post('/', async(req, res) => {
    try {
        const { name, email } = req.body;
        await db('users').insert({ name, email });
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

// Rota PUT para alterar dados do usuário
router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const { name, email } = req.body;
        await db('users').where({ id }).update({ name, email });
        res.sendStatus(204);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router;