
const Project = require('../models/Project')
const asyncWrapper = require('../middleware/async')

const getAllProjects = asyncWrapper(async (req, res) => {
        const projects = await Project.find({})
        res.status(200).json({ projects })

})

const getProject = asyncWrapper(async (req, res, next) => {
    const { id: projectID } = req.params
    const project = await Task.findOne({ _id: projectID })
    if (!task) {
      return next(createCustomError(`No task with id : ${projectID}`, 404))
    }
  
    res.status(200).json({ project })
  })

module.exports = {
    getAllProjects,
    getProject
}