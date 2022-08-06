
const Project = require('../models/Project')
const asyncWrapper = require('../middleware/async')

const getAllProjects = asyncWrapper(async (req, res) => {

        const page = req.query.p || 0
        const projectsPerPage = 4

        let projects = []
        const allprojects = await Project.find().skip(page * projectsPerPage).limit(projectsPerPage)
        allprojects.map(project => projects.push(project))
        res.status(200).json({projects})

})


module.exports = {
    getAllProjects
}