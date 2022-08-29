
const Project = require('../models/Project')
const asyncWrapper = require('../middleware/async')

const getAllProjectsStatic = asyncWrapper(async (req, res) => {

        const count = await Project.find({})
        

})


module.exports = {
    getAllProjects
}