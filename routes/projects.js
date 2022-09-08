const express = require('express');
const router = express.Router();

const {getAllProjects, getAllProjectsStatic} = require('../controllers/projects')

router.route('/').get(getAllProjects)
router.route('/static').get(getAllProjectsStatic)
module.exports = router;