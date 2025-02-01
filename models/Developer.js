const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Developer', developerSchema);