const express = require('express');
const app = express();
const usersRouter = require('./router-user');
const cursosRouter = require('./router-cursos');
const apiRouter = require('./router-api');

app.use(express.json());


app.use('/users', usersRouter);
app.use('/cursos', cursosRouter);
app.use('/api', apiRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})