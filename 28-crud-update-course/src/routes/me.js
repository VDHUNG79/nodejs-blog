const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// courseController.index;

router.get('/stored/courses', meController.storedCourses);
// router.post('/store', courseController.store);
// router.get('/:slug', courseController.show);
// router.get('/', courseController.index);

module.exports = router;