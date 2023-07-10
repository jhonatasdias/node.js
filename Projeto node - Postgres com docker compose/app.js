const express = require('express');
const app = express();


const dbRouter = require('./routers/db');
const dbSisIESC = require('./routers/sisiec');

app.use(dbRouter);
app.use(dbSisIESC);

app.listen(3000);