const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');

const app = express();
const port = 3000;

// HTTP Logger
app.use(morgan('combined'));

//  Template Engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH: ', path.join(__dirname, 'resources/views'));

// Route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

// Local host
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));