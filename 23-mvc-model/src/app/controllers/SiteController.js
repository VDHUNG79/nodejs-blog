const Course = require('../models/Course');

class SiteController {

    // [GET] / 
    index(req, res) {

        // res.json({
        //     name: 'test'
        // });

        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
                return;
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        })

        // res.render('home')
    }

    // [GET] / search
    search(req, res) {




        res.render('search')
    }

}

module.exports = new SiteController;