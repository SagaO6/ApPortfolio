const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectControllers')

router.use('/projects', projectsController);

module.exports = router;