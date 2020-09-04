const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] / 
    index(req, res, next) {

        // res.json({
        //     name: 'test'
        // });

        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //         // return;
        //     } else {
        //         next(err);
        //         // res.status(400).json({ error: 'ERROR!!!' });
        //     }
        // });

        // Code trên được viết dưới dạng Promise cho gọn gàng
        Course.find({})
            .then(courses => {
                // courses = courses.map(courses => courses.toObject())
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
                
            // .catch(error => next(error));
            .catch (next); // tương tự .catch(error => next(error));

        // res.render('home')
    }

    // [GET] / search
    search(req, res) {




        res.render('search')
    }

}

module.exports = new SiteController;