const express = require('express');
const app = express();

const dbSisIESC = require('./routers/sisiec');

app.use(dbSisIESC);

const PORT = 3000;
app.use('/', (req, res) => {
    res.status(404).send('Page Not Found');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});