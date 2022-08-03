const express = require('express');
const router = express.Router();

const {getAllProjects, getProject} = require('../controllers/projects')

router.route('/').get(getAllProjects)
router.route('/:id').get(getProject);

module.exports = router;