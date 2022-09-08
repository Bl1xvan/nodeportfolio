
const Project = require('../models/Project')
const asyncWrapper = require('../middleware/async')

const getAllProjectsStatic = asyncWrapper(async (req, res) => {

        const projectsStatic = await Project.find({})
        res.status(200).json({projectsStatic})

})

const getAllProjects = asyncWrapper(async (req, res) => {
    const {title, languages} = req.query
    const queryObject = {}

    if(languages){
        queryObject.languages = languages
    }

    if(title){
        queryObject.title = {$regex: title, $options: 'i'};
    }

    let result = Project.find(queryObject)

    const page = Number(req.query.p) || 1
    const limit = 4
    const skip = (page - 1) * limit
    result.skip(skip).limit(limit)


    
    const projects = await result

    
    res.status(200).json({projects, page})
})


module.exports = {
    getAllProjectsStatic,
    getAllProjects
}