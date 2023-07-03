const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);