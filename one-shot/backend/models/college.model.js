const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const collegeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    founded: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    no_of_students: {
        type: Number,
        required: true
    },
    courses: {
        type: String,
        required: true
    }
    
}, {
  timestamps: true,
});

const College = mongoose.model('College', collegeSchema);

module.exports = College;