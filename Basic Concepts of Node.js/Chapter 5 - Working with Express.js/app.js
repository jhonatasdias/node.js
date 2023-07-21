const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// Global Configuration Value
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use(errorController.get404)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
});