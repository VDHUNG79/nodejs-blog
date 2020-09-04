const newsRouter = require('./news')
const courseRouter = require('./courses')
const siteRouter = require('./site')

function route(app) {

    // Route (Move from index.js)

    app.use('/news', newsRouter);
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    app.use('/courses', courseRouter);


    app.use('/', siteRouter);
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // app.get('/search', (req, res) => {
        // console.log(req.query.q);
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send(''); // send('') chuỗi rỗng sẽ gửi đi màn hình rỗng.
    // });

}

module.exports = route;