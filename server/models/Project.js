const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    languages: [String],
    deployment: String,
    repository: String
})

module.exports = mongoose.model('Project', ProjectSchema)