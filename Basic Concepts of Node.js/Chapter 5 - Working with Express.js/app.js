const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Global Configuration Value
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./router/admin');
const shopRouter = require('./router/shop');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
});