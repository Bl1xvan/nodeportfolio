const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'project title must be provided'],
    },
    image: {
        type: String,
        required: [true, 'project image must be provided'],
    },
    description: {
        type: String,
        required: [true, 'project description must be provided'],
    },
    languages:  {
        type: [String],
        required: [true, 'project languages must be provided'],
    },
    deployment:  {
        type: String,
        required: [true, 'project deployment must be provided'],
    },
    repository:  {
        type: String,
        required: [true, 'project repository must be provided'],
    },
})

module.exports = mongoose.model('Project', ProjectSchema)