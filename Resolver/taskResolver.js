const Task = require('../Model/taskModel');
const User = require('../Model/userModel');
const Project = require('../Model/projectModel');
const Comment = require('../Model/commentModel');

const taskResolver = {
  Query: {
    getTask: async (parent, args) => {
      return await Task.findById(args.id).populate('assignto').populate('projectName');
    },
    getTasks: async () => {
      return await Task.find().populate('assignto').populate('projectName');
    },
  },
  Mutation: {
    createTask: async (parent, args) => {
      const newTask = new Task({
        title: args.title,
        projectName: args.projectName,
        assignto: args.assignto,
        taskDescription: args.taskDescription,
        timeline: args.timeline,
        priority: args.priority,
      });

      try {
        await newTask.save();
        return newTask;
      } catch (error) {
        console.error('Error creating task:', error);
        throw new Error('Error creating task');
      }
    },
  },
  Task: {
    assignto: async (parent) => {
      return await User.findById(parent.assignto);
    },
    projectName: async (parent) => {
      return await Project.findById(parent.projectName);
    },
    comments: async(parent)=>{
      return await Comment.find({taskId:parent.id})
    }
  },
};

module.exports = taskResolver;
