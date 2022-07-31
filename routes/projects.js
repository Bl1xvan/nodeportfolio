const express = require('express');
const router = express.Router();

const {getAllProjects} = require('../controllers/projects')

router.route('/').get(getAllProjects)


module.exports = router;