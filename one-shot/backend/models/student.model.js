const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema(
{
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  batch_year:{
    type: Number,
    max: 2026,
    required: true,
    trim: true,
    minlength: 4
  },
  college_id: {
    type: String,
    required: true,
    trim: true,
    minlength: 9
  },
  skills: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  }

}, 
{
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;