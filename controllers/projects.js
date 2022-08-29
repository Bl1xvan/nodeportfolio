
const Project = require('../models/Project')
const asyncWrapper = require('../middleware/async')

const getAllProjectsStatic = asyncWrapper(async (req, res) => {

        const projects = await Project.find({})
        res.status(200).json({projects})

})

const getAllProjects = asyncWrapper(async(req, res) => {
    const {title} = req.query
    const queryObject = {}

    if(title){
        queryObject.title = {$regex: title, option: 'i'}
    }

    let result = Project.find(queryObject)

    const page = Number(req.query.p) || 1
    const limit = Number(req.query.limit) || 4
    const skip = (page - 1) * limit

    result.skip(skip).limit(limit)

    const projects = await result
    
    res.status(200).json({projects})
})


module.exports = {
    getAllProjectsStatic,
    getAllProjects
}