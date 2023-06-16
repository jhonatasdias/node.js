const express = require('express');
const knex = require('knex');
const app = express();

// Configurando a conexão com o banco de dados usando o Knex
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  },
  useNullAsDefault: true
});

app.use(express.json());
const cursosRouter = require('./cursos');

app.use('/cursos', cursosRouter);

// Rota GET para obter todos os usuários
app.get('/users', async (req, res) => {
  try {
    // Realizando uma consulta no banco de dados para obter todos os usuários
    const users = await db.select().table('users');
    res.json(users); // Enviando a resposta em formato JSON com os usuários obtidos
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota POST para adicionar um novo usuário
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body; // Obtendo o nome e email do corpo da requisição
    // Inserindo um novo usuário na tabela 'users' com os dados fornecidos
    await db('users').insert({ name, email });
    res.sendStatus(201); // Enviando a resposta com status 201 (Created) para indicar sucesso
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID do usuário a ser atualizado a partir dos parâmetros da URL
    const { name, email } = req.body; // Obtém os novos dados do usuário a partir do corpo da requisição
    // Realiza a atualização dos dados do usuário com o ID fornecido
    await db('users').where({ id }).update({ name, email });
    res.sendStatus(204); // Retorna um status 204 (No Content) para indicar sucesso sem conteúdo
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});