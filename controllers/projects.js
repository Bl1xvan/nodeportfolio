
const Project = require('../models/Project')
const asyncWrapper = require('../middleware/async')

const getAllProjects = asyncWrapper(async (req, res) => {

        const page = req.query.p || 1
        const projectsPerPage = 4
        const skip = page > 0 ? (page - 1) * projectsPerPage : 0
        const count = await Project.find({}).estimatedDocumentCount();

        const pageCount = Math.ceil(count / projectsPerPage)
        const next = pageCount == page ? "null" : "not null"
        let projects = []
        const projectgroup = await Project.find().skip(skip).limit(projectsPerPage)
        projectgroup.map(project => projects.push(project))
        res.status(200).json({pageCount, next, projects})

})


module.exports = {
    getAllProjects
}