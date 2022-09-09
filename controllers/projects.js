
const Project = require('../models/Project')
const asyncWrapper = require('../middleware/async')

const getAllProjectsStatic = asyncWrapper(async (req, res) => {

        const projects = await Project.find({})
        res.status(200).json({projects})

})

const getAllProjects = asyncWrapper(async (req, res) => {
   
    const page = parseInt(req.query.p) - 1 || 0;
	const limit = 4;
    let language = req.query.languages || "All"
    let search = req.query.title || ""
    const languageOptions = [
        "React.js",
        "JS",
        "CSS",
        "HTML"
    ]
    language === "All" ? (language = [...languageOptions]) : (language = req.query.languages.split('&'))

   
    const projects = await Project.find({title: {$regex: search, $options: "i"}}).where("languages").in([...language]).skip(page * limit).limit(limit)
    
    const total = await Project.find({title: {$regex: search, $options: "i"}}).where("languages").in([...language]).countDocuments({
        language: { $in: [...language] },
        title: { $regex: search, $options: "i" },
    });

    const pageCount = Math.ceil(total / limit)
    const next = pageCount == page + 1 ? "null" : "not null"

    const response = {
        error: false,
        total,
        next, 
        p: page + 1,
        limit,
        languages: languageOptions,
        projects,
    };
    res.status(200).json(response);
})


module.exports = {
    getAllProjectsStatic,
    getAllProjects
}