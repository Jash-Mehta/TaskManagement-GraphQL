const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  projectName: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Project',
    required: true,
  },
  assignto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  timeline: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },


});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
