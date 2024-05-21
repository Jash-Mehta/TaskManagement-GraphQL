const Project = require('./../Model/projectModel');
const Task = require('./../Model/taskModel');

const projectResolver = {
  Query: {
    getProject: async (parent, args) => {
      try {
        const project = await Project.findById(args.id);
        if (!project) {
          throw new Error('Project not found');
        }
        return project;
      } catch (error) {
        console.error('Error fetching project:', error);
        throw new Error('Error fetching project');
      }
    },
    getProjects: async () => {
      try {
        return await Project.find();
      } catch (error) {
        console.error('Error fetching projects:', error);
        throw new Error('Error fetching projects');
      }
    }
  },
  Mutation: {
    createProject: async (parent, args) => {
      const newProject = new Project({
        name: args.name,
        client: args.client,
        startdate: args.startdate,
        deadline: args.deadline,
        status: args.status
      });

      try {
        await newProject.save();
        return newProject;
      } catch (error) {
        console.error('Error creating project:', error);
        throw new Error('Error creating project');
      }
    }
  },
  Project: {
    tasks: async (parent) => {
      try {
        return await Task.find({ projectName: parent.id });
      } catch (error) {
        console.error('Error fetching tasks for project:', error);
        throw new Error('Error fetching tasks for project');
      }
    }
  }
};

module.exports = projectResolver;
