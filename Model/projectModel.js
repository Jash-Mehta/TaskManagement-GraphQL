const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  startdate: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
